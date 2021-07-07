import React from 'react';
import useStyles from './styles';
import video from './video.mp4';
const VideoPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.flexDiv}>
      <h1>Video Gathering Detection</h1>
      <video
        classes={classes.videoElem}
        src={video}
        autoPlay
        loop
        type='video/mp4'
      />
    </div>
  );
};

export default VideoPage;
