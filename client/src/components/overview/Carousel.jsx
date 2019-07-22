import React, { useState } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import NextArrow from '@material-ui/icons/KeyboardArrowRightRounded';
import BackArrow from '@material-ui/icons/KeyboardArrowLeftRounded';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: '99%',
    height: '750px',
    backgroundColor: '#E0E0E0',
    marginTop: theme.spacing(1),
  },
  expandedRoot: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    position: 'absolute',
    width: '95%',
    height: '750px',
    backgroundColor: '#E0E0E0',
    marginTop: theme.spacing(1),
  },
  imgBox: {
    display: 'flex',
    flexWrap: 'nowrap',
    maxWidth: '90%',
    maxHeight: '100%',
  },
  img: {
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  },
  progress: {
    margin: theme.spacing(1),
  },
}));

const Carousel = props => {
  const classes = useStyles();

  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState(true);

  const changePrevious = index => {
    if (index <= 1) {
      setPrevious(true);
    }
    if (index <= 5) {
      setNext(false);
    }
  };
  const [next, setNext] = useState(false);

  const changeNext = index => {
    if (index >= 0) {
      setPrevious(false);
    }
    if (index === 4) {
      setNext(true);
    }
  };

  const [click, setClick] = useState(false);

  const [imgColumns, setImgColumns] = useState(8);
  const [styleColumns, setStyleColumns] = useState(4);

  const changeColumns = () => {
    if (click === true) {
      setImgColumns(8);
      setStyleColumns(4);
    } else {
      setImgColumns(12);
      setStyleColumns(0);
    }
  };

  return (
    <div>
      <Box className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Box className={classes.arrow}>
            <IconButton
              disabled={previous}
              onClick={() => {
                setIndex(Math.max(index - 1, 0));
                changePrevious(index);
              }}>
              <BackArrow />
            </IconButton>
          </Box>
          <Box className={classes.imgBox}>
            {props.styles.results ? (
              <img
                src={props.styles.results[props.index].photos[index].url}
                className={classes.img}
                onClick={() => {
                  setClick(!click);
                  changeColumns();
                  props.changeSize(imgColumns, styleColumns);
                }}
              />
            ) : (
              <CircularProgress className={classes.progress} />
            )}
          </Box>
          <Box className={classes.arrow}>
            <IconButton
              disabled={next}
              onClick={() => {
                setIndex(Math.min(index + 1, 5));
                changeNext(index);
              }}>
              <NextArrow />
            </IconButton>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Carousel;
