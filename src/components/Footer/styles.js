import { makeStyles } from '@mui/styles';

export default makeStyles( (theme) => ({
  wrapper: {
    width: '100%',
    minHeight: '10%',
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: '-1',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

    "@media (max-width: 1023px)": {
      padding: '5% 0',
    },

    "@media (max-width: 500px)": {
      padding: '10% 0',
    },
  },

  container: {
    padding: '0 !important'
  },

  linkedIn: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#A9A9A9',

    "@media (max-width: 1023px)": {
      justifyContent: 'center',
    },
  },

  dev: {
    display: 'flex',
    textDecoration: 'none',
    color: '#A9A9A9',
    justifyContent: 'right',

    "@media (max-width: 1023px)": {
      justifyContent: 'center',
    },
  }
}));