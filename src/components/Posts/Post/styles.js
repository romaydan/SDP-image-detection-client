import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
  },
  image: {
    margin: '7px',
    width: '200px',
    height: '200px',
    objectFit: 'cover'
  },
  media: {
    paddingTop: '175%',
    backgroundColor: 'rgba(0, 0, 0, 0.375)',
    backgroundBlendMode: 'darken',
  },
  overlay: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    color: 'white',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',


  },
});
