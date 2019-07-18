import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/Reviews/getData.js';

import Grid from '@material-ui/core/Grid';
import BorderLinearProgress from './RatingBar.jsx';

class RatingFilter extends Component {
  componentDidUpdate(prevProps) {
    const { productId, getMeta } = this.props;
    if (productId !== prevProps.productId) {
      getMeta(productId);
    }
  }

  normalize(curr, max) {
    return (curr / max) * 100;
  }

  renderRatings() {
    const { ratings, totalReviews } = this.props;
    return ratings ? (
      <Grid container direction="column">
        {[1, 2, 3, 4, 5].map(num => {
          let normalized = this.normalize(ratings[num] || 0, totalReviews);
          return (
            <Grid container direction="row" key={num}>
              <Grid item sm={12} md={2}>
                <span>{num} Star</span>
              </Grid>
              <Grid item sm={12} md={7}>
                <BorderLinearProgress
                  variant="determinate"
                  // color="secondary"
                  value={normalized}
                />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    ) : (
      <div>Loading...</div>
    );
  }

  render() {
    return (
      <div>
        <div>100% of reviews recommend this product</div>
        <div>Bar graphs</div>
        {this.renderRatings()}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  productId: state.productId,
  ratings: state.metaInfo.ratings,
  recommend: state.metaInfo.recommend,
  totalReviews: state.reviewList.count
});

export default connect(
  mapStateToProps,
  actions
)(RatingFilter);
