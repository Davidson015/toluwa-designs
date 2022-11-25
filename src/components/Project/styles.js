import { makeStyles } from '@mui/styles';

export default makeStyles( (theme) => ({
  projectImg: {
    height: '100%',
    width: '100%',
    transition: 'all 1s ease-in-out',

    '&:hover': {
      transform: 'scale(105%)',
    }
  },
}));