import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import reactStringReplace from 'react-string-replace';

import useStyles from '../styles';

const Tweet = ({ tweet }) => {
  const classes = useStyles();
  const title = reactStringReplace(tweet.Text, /#(\w+)/g, (match, i) => {
    return (
      <span key={i} style={{ color: '#1B95E0' }}>
        {'#' + match}
      </span>
    );
  });
  return (
    <Paper
      className={classes.card}
      style={{ backgroundColor: colorDefiner(tweet) }}
    >
      <Box
        display='flex'
        justifyItems='center'
        alignContent='center'
        flexDirection='column'
      >
        <Typography varient='h3'>{title}</Typography>
      </Box>
    </Paper>
  );
};

const colorDefiner = (tweet) => {
  switch (tweet.Overall_Sentiment) {
    case 'negative':
      return '#ffeaed';
    case 'positive':
      return '#eaffeb';
    case 'mixed':
      return '#fcffea';
    case 'natural':
      return '#f7fcfc';
    default:
      break;
  }
};
export default Tweet;
