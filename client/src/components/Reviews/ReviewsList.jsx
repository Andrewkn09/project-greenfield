import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

// React Components
import { getList, getMeta } from '../../actions/Reviews/getData.js';
import { setShown } from '../../actions/Reviews/setShown.js';
import ReviewsEntry from './ReviewsEntry.jsx';
import ReviewSort from '../Reviews/ReviewSort.jsx';
import ReviewSearch from './ReviewSearch.jsx';

const useStyles = makeStyles(theme => ({
  title: {
    display: 'inline-block',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '5px',
    marginRight: '5px',
  },
}));

const ReviewsList = props => {
  const { getList, getMeta, productId, reviews } = props;
  const classes = useStyles();

  //only update when productId changes
  useEffect(() => {
    getList(productId, 'relevant');
    getMeta(productId);
  }, [productId]);

  //if there are rating filters, filter the reviews then only render those reviews
  const renderList = () => {
    const { search, filter, listLimit, setShown } = props;

    if (search.length > 3) {
      reviews.results.filter(review => {
        let bodyContains = review.body.toLowerCase().includes(search);
        let nameContains = review.body.toLowerCase().includes(search);
        let summaryContains = review.body.toLowerCase().includes(search);
        //if review.body contains search or if review.reviewer_name contains search or if review.summary contains search
      });
    }

    let filteredList = reviews.results;
    //if filters are selected, filter the list
    if (Object.keys(filter).length > 0) {
      filteredList = filteredList.filter(review => {
        return filter[review.rating];
      });
    }

    let reviewsList = filteredList.map(review => {
      return <ReviewsEntry key={review.review_id} review={review} />;
    });

    //update amount of reviews displayed
    setShown(reviewsList.length);

    //display amount of reviews depending on limit set
    return reviewsList.slice(0, listLimit);
  };

  return reviews.results ? (
    <Fragment>
      <Box>
        <span className={classes.title}>
          {reviews.results.length} reviews, sorted by
        </span>
        <span className="sortSelect">
          <ReviewSort />
        </span>
      </Box>
      <ReviewSearch />
      {renderList()}
    </Fragment>
  ) : (
    <div>Loading...</div>
  );
};

const mapStateToProps = state => ({
  productId: state.productId,
  reviews: state.reviewList,
  metaInfo: state.metaInfo,
  filter: state.reviewFilter,
  listLimit: state.listLimit,
  search: state.reviewSearch,
});

const mapDispatchToprops = dispatch => ({
  setShown: length => {
    dispatch(setShown(length));
  },
  getList: (productId, sort) => {
    dispatch(getList(productId, sort));
  },
  getMeta: productId => {
    dispatch(getMeta(productId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(ReviewsList);
