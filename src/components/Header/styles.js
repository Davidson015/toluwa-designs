import { makeStyles } from '@mui/styles';

export default makeStyles( (theme) => ({
  navBar: {
    width: "100%",
    height: "7.8%",
    backgroundColor: '#211E1E',
    padding: '2.65% 0',
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  brandLogo: {
    height: "25%",
    width: "25%",
  },

  backdrop: {
    display: 'flex',
    width: '20%',
    height: '45%',

    "@media (max-width: 1023px)": {
      position: 'absolute',
      top: '0',
      height: '99%',
      width: '95%',
      display: 'none',
      backgroundColor: 'rgba(33, 30, 30, .8)',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },

  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    // marginRight: "10%",

    "@media (max-width: 1023px)": {
      flexDirection: "column",
      width: '50%',
      height: '30%',
    },
  },

  navLinkItem: {
    textDecoration: 'none',
    color: '#ffffff',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '350',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.5s ease-in-out',
    
    "@media (max-width: 1023px)": {
      fontSize: '24px',
      height: 'initial',
    },

    '&:after': {
      content: '""',
      position: 'absolute',
      height: '2px',
      width: '100%',
      bottom: '0',
      left: '0',
      borderRadius: '30px',
      backgroundColor: 'white',
      transform: 'translateX(-150%)',
      transition: 'all 0.5s ease-in-out',
    },

    '&:hover:after, &:focus:after': {
      transform: 'translateX(0%)'
    },
  },
}))