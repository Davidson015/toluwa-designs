import { makeStyles } from '@mui/styles';

export default makeStyles( (theme) => ({
  container: {
    margin: '5% 0',
    paddingLeft: '5% !important',
    paddingRight: '5% !important',
  },

  profileImg: {
    height: '100%',
    width: '100%',
  },

  detailBox: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column',
  },

  resumeLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#FF9C26',
    fontSize: '15px',
    margin: '5% 0',
    width: 'fit-content',
  },

  contactBtn: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#eaeaea',
    fontSize: '16px',
    fontFamily: 'Montserrat',
    margin: '2% 0',
    width: 'fit-content',
  }
}));