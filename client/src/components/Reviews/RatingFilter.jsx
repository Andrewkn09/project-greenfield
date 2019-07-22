import React, { Component } from 'react';

import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import * as actions from '../../actions/Reviews/getData.js';
import RatingBar from './RatingBar.jsx';
import Ratings from '../Ratings.jsx';

const RatingFilter = props => {
  //calculate percent recommended out of total reviews
  const normalizeRecommended = (curr, total) => {
    if (total === 0) {
      return 0;
    }
    return (curr / total) * 100;
  };

  //render out recommended percentage
  const renderRecommended = totalReviews => {
    const { recommended } = props;

    let normalized = normalizeRecommended(recommended[1] || 0, totalReviews);
    return <div>{normalized}% of reviews recommend this product</div>;
  };

  //render out star rating
  const renderAvgRating = totalReviews => {
    const { ratings } = props;
    if (ratings && totalReviews > 0) {
      let totalStars = 0;
      for (let stars in ratings) {
        let reviews = ratings[stars];
        totalStars += stars * reviews;
      }
      let avgRating = totalStars / totalReviews;
      return Number(avgRating.toFixed(1));
    }
    return 0;
  };

  //if avg rating doesn't have a decimal, add one
  const padAvgRating = avgRating => {
    let stringified = avgRating.toString();
    if (stringified.indexOf('.') < 0) {
      return stringified + '.0';
    }
    return stringified;
  };

  const addTotal = (ratings = {}) => {
    if (Object.keys(ratings).length > 0) {
      let totalReviews = Object.values(ratings).reduce((sum, num) => {
        return sum + num;
      });
      return totalReviews;
    }
    return 0;
  };

  const { recommended, ratings } = props;
  const totalReviews = addTotal(ratings);
  const avgRating = renderAvgRating(totalReviews);

  return recommended && ratings ? (
    <Box>
      <Grid container direction="row" style={{ marginBottom: 13 }}>
        <span style={{ fontSize: 30, fontWeight: 'bold', marginRight: '15px' }}>
          {padAvgRating(avgRating)}
        </span>
        <Ratings rating={avgRating} />
      </Grid>
      {renderRecommended(totalReviews)}
      <RatingBar ratings={ratings} totalReviews={totalReviews} />
    </Box>
  ) : (
    <div>Loading...</div>
  );
};

let mapStateToProps = state => ({
  productId: state.productId,
  ratings: state.metaInfo.ratings,
  recommended: state.metaInfo.recommended,
  filters: state.reviewFilter,
});

export default connect(
  mapStateToProps,
  actions
)(RatingFilter);
