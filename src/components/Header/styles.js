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

  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "20%",
    height: "45%",
    // marginRight: "10%"
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

    '&:after': {
      content: '""',
      position: 'absolute',
      height: '2px',
      width: '100%',
      bottom: '0',
      left: '0',
      borderRadius: '30px',
      backgroundColor: 'white',
      transform: 'translateX(-100%)',
      transition: 'all 0.5s ease-in-out',
    },

    '&:hover:after, &:focus:after': {
      transform: 'translateX(0%)'
    },
  },
}))