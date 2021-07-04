import React, { useState } from 'react';
import useStyles from './styles';
import Modal from '../modal/Modal';

const EmotionsInfo = ({ posts }) => {
  const [happiest, setHappiest] = useState();
  const [showHappiest, setShowHappiest] = useState(false);
  const classes = useStyles();

  const findTheHappiest = () => {
    let happy;

    if (posts.length) {
      happy = posts.reduce((prev, current) => {
        if (prev.data.face_detection || current.data.face_detection) return prev;
        else
          return prev.data.face_detection && current.data.face_detection && prev.data.face_detection.faceAttributes.emotion.happiness >
            current.data.face_detection.faceAttributes.emotion.happiness
            ? prev
            : current
      }
      );
    }

    setHappiest(happy);
  };

  const handleTheHappiestClick = () => {
    setShowHappiest(true);
    findTheHappiest();
  };

  return (
    <div>
      <Modal content={happiest} showModal={showHappiest} setShowModal={setShowHappiest} title="You are the HAPPIEST person out here!">
      </Modal>
    </div >
  );
};

export default EmotionsInfo;
