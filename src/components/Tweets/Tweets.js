import React from 'react';
import Tweet from './Tweet/Tweet';
import { GridList, GridListTile } from '@material-ui/core';
import useStyles from './styles';

const Tweets = ({ tweets }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.tweetsContainer}>
        {tweets.map((t) => {
          return t != undefined ? <Tweet key={t._id} tweet={t} /> : null;
        })}
      </div>
    </div>
  );
};

export default Tweets;
