import React, { Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  slide: {
    display: 'inline-block',
    height: '100%',
    width: '100%',
  },
  slideZoomed: {
    display: 'inline-block',
    height: '100%',
    width: '100%',
    transform: 'scale(1.8)',
  },
}));

const Image = ({ image }) => {
  const classes = useStyles();

  const [position, setPosition] = useState({ backgroundPosition: '0% 0%' });

  const handleMouseMove = event => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    setPosition({ backgroundPosition: `${x}% ${y}%` });
  };

  const [zoom, setZoom] = useState(classes.slide);

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: position.backgroundPosition,
  };

  return (
    <div
      className={zoom}
      style={styles}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setZoom(classes.slideZoomed);
        setOpacity(classes.imgHover);
      }}
      onMouseLeave={() => {
        setZoom(classes.slide);
      }}
    />
  );
};

export default Image;
