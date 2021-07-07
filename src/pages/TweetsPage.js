import { Grid, CircularProgress, Button, Box } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import useStyles from './styles';
import socket from '../api/socket';
import Tweets from '../components/Tweets/Tweets';

const TweetsPage = () => {
  const apiUrl = 'https://sdpimagedetection.com:443/tweets';
  const classes = useStyles();

  const [ratio, setRatio] = useState({});
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      console.log(`res.data`, res.data);
      setRatio(res.data.ratio);
      setTweets(res.data.tweets.reverse());
    });

    const func = (data) => {
      console.log(`tweet arrived`, data);
      setRatio(data.ratio);
      setTweets((prev) => [...prev, data.tweet]);
    };

    socket.on('tweetAdded', func);
    return () => {
      socket.off('tweetAdded', func);
    };
  }, []);
  return !tweets.length ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={10}>
      {/* <Grid item xs={12}>
        <Box display='flex' justifyContent='center'>
          <Button
            oncClick={() => {
              axios.delete(apiUrl).then(console.log('stopped'));
            }}
            className={classes.button}
            style={{ backgroundColor: '#D85B6D' }}
            variant='contained'
          >
            Stop{' '}
          </Button>
          <Button
            oncClick={() => {
              axios.put(apiUrl).then(console.log('started'));
            }}
            style={{ backgroundColor: '#9FCD61' }}
            className={classes.button}
            variant='contained'
          >
            Start{' '}
          </Button>
        </Box>
      </Grid> */}
      <Grid item xs={6}>
        <div className={classes.scrollContainer}>
          {<Tweets tweets={tweets} />}
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={classes.scrollContainer}>
          <PieChart
            className={classes.pieChart}
            data={[
              { title: 'positive', value: ratio.positive, color: '#9fcd61' },
              { title: 'negative', value: ratio.negative, color: '#d85b6d' },
              { title: 'mixed', value: ratio.mixed, color: '#f6c042' },
              { title: 'natural', value: ratio.natural, color: '#fffffe' },
            ]}
            label={({ dataEntry }) => Math.round(dataEntry.value)}
            labelStyle={{
              fill: '#EF8F5F',
              pointerEvents: 'none',
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default TweetsPage;
