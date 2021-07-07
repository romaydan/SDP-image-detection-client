import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Container, AppBar, Tabs, Tab } from '@material-ui/core';

import { getPosts } from './actions/posts';
import selaIcon from './images/selaIcon.png';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import EmotionsPage from './pages/EmotionsPage';
import MaskPage from './pages/MaskPage';
import { VoiceAssistant } from './containers/VoiceAssistant';
import VideoPage from './pages/VideoPage';
import TweetsPage from './pages/TweetsPage';

const App = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth='false'>
      <Route
        path='/'
        render={({ location }) => (
          <VoiceAssistant posts={posts}>
            <AppBar className={classes.appBar} position='static'>
              <img
                src={selaIcon}
                alt='sela'
                height='42'
                className={classes.logoImage}
              />
              <Tabs value={location.pathname} textColor='inherit'>
                <Tab
                  className={classes.tab}
                  label='Video'
                  value='/video'
                  component={Link}
                  to='/video'
                />
                <Tab
                  className={classes.tab}
                  label='Masks'
                  value='/mask'
                  component={Link}
                  to='/mask'
                />
                <Tab
                  className={classes.tab}
                  label='Emotions'
                  value='/emotions'
                  component={Link}
                  to='/emotions'
                />
                <Tab
                  className={classes.tab}
                  label='Tweets'
                  value='/tweets'
                  component={Link}
                  to='/tweets'
                />
              </Tabs>
              <h4 className={classes.title}>
                <span className={classes.whiteText}>SELA</span> |
                <span className={classes.whiteText}>DEVELOPER</span> |
                <span className={classes.whiteText}>
                  {' '}
                  PRACTICE. 5-7 JULY 2021
                </span>{' '}
              </h4>
            </AppBar>

            <Switch>
              <Route
                path='/emotions'
                render={(props) => <EmotionsPage {...props} posts={posts} />}
              />
              <Route
                path='/mask'
                render={(props) => <MaskPage {...props} posts={posts} />}
              />
              <Route
                path='/video'
                render={(props) => <VideoPage {...props} posts={posts} />}
              />
              <Route
                path='/tweets'
                render={(props) => <TweetsPage {...props} />}
              />
              <Redirect from='/' exact to='/emotions' />
            </Switch>
          </VoiceAssistant>
        )}
      />
    </Container>
  );
};

export default App;
