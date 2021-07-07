import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  Typography,
  DialogActions,
} from '@material-ui/core';
import React from 'react';

import useStyles from '../../styles';

const Modal = ({ showModal, setShowModal, content, title }) => {
  const classes = useStyles();

  return (
    <Dialog
      classes={{ paper: classes.card }}
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle className={classes.textAlign} id='alert-dialog-title'>
        <Typography
          variant='body1'
          style={{ color: '#ea9164' }}
          color='secondary'
        >
          {title}
        </Typography>
      </DialogTitle>

      <DialogContent>
        {!content ? (
          <CircularProgress />
        ) : (
          <img src={content.url} alt='' height='300' />
        )}
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => setShowModal(false)}
          style={{ color: '#ea9164' }}
        >
          <Typography variant='button' display='block'>
            OK
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
