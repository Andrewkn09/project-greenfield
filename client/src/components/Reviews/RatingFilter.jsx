import React, { Component } from 'react';

import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import * as actions from '../../actions/Reviews/getData.js';
import BorderLinearProgress from './RatingBar.jsx';
import Ratings from '../Ratings.jsx';

class RatingFilter extends Component {
  componentDidUpdate(prevProps) {
    const { productId, getMeta } = this.props;
    if (productId !== prevProps.productId) {
      getMeta(productId);
    }
  }

  //calculate percent of current rating out of total reviews
  normalizeRating(curr, total) {
    if (total === 0) {
      return 0;
    }
    return (curr / total) * 100;
  }

  //render out rating breakdown with rating bars
  renderRatings() {
    const { ratings, totalReviews } = this.props;
    return ratings ? (
      <Grid container direction="column">
        {[1, 2, 3, 4, 5].map(num => {
          let normalized = this.normalizeRating(
            ratings[num] || 0,
            totalReviews.length
          );
          return (
            <Grid container direction="row" key={num}>
              <Grid item sm={12} md={2}>
                <span>{num} Star</span>
              </Grid>
              <Grid item sm={12} md={10}>
                <BorderLinearProgress
                  variant="determinate"
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

  //calculate percent recommended out of total reviews
  normalizeRecommended(curr, total) {
    if (total === 0) {
      return 0;
    }
    return (curr / total) * 100;
  }

  //render out recommended percentage
  renderRecommended() {
    const { recommended, totalReviews } = this.props;
    let normalized = this.normalizeRecommended(
      recommended[0],
      totalReviews.length
    );
    return <div>{normalized}% of reviews recommend this product</div>;
  }

  //render out star rating
  renderAvgRating() {
    const { ratings, totalReviews } = this.props;
    if (ratings && totalReviews.length > 0) {
      let totalStars = 0;
      for (let stars in ratings) {
        let reviews = ratings[stars];
        totalStars += stars * reviews;
      }
      let avgRating = totalStars / totalReviews.length;
      return Number(avgRating.toFixed(2));
    }
    return 0;
  }

  render() {
    const { recommended, totalReviews } = this.props;
    return recommended && totalReviews ? (
      <div>
        <Grid container direction="row">
          <span style={{ fontSize: 30 }}>{this.renderAvgRating()}</span>
          <Ratings rating={this.renderAvgRating()} />
        </Grid>
        {this.renderRecommended()}
        {this.renderRatings()}
        <br />
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

let mapStateToProps = state => ({
  productId: state.productId,
  ratings: state.metaInfo.ratings,
  recommended: state.metaInfo.recommended,
  totalReviews: state.reviewList.results,
});

export default connect(
  mapStateToProps,
  actions
)(RatingFilter);
