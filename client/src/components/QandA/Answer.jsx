import React from 'react';
import { Fragment } from 'react-dom';
import AnswerImages from './AnswerImages.jsx';

//Material Componenets
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import { typography } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Answer = props => {
  return (
    <div>
      <Grid container>
        <Typography variant="body2" component="p">
          {props.answer.body}{' '}
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center">
          <Typography variant="caption" component="p">
            by {props.answer.answerer_name},{' '}
            {props.answer.date.substring(0, 10)} | Helpful?
          </Typography>
          <Button size="small">Yes ({+props.answer.helpfulness})</Button>
          <Typography component="h4"> | </Typography>
          <Button size="small">Report</Button>
          {props.answer.photos.length > 0 ? (
            <AnswerImages photos={props.answer.photos} />
          ) : (
            <div />
          )}
        </Grid>
      </Grid>{' '}
    </div>
  );
};

export default Answer;
