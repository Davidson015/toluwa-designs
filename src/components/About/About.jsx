import React from 'react'

// @mui components
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Container, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { KeyboardArrowRight as Arrow } from '@mui/icons-material';

// assets
import { ProfileImg } from '../../assets';

// Stylings
import useStyles from './styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Armata",
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto', 'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif'
    ].join(','),
    subtitle1: {
      color: '#eaeaea',
      fontSize: '.95rem',
      fontWeight: '400',
    }
  },
});

theme.typography.subtitle2 = {
  color: '#eaeaea',
  fontSize: '.95rem',
  fontWeight: '400',
  letterSpacing: '.1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '.75rem',
  },
};

theme.typography.h3 = {
  color: '#eaeaea',
  fontSize: '2.85rem',
  fontWeight: '400',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.15rem',
  },
}

const About = () => {
  const classes = useStyles();

  return (
    <Container
      className={classes.container}
      sx={{
        [theme.breakpoints.down('sm')]: {
          padding: '0 !important',
        },
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 0, md:8 }}
        rowSpacing={{ xs: 5, md: 0 }}
      >
        <Grid
          xs={12}
          md={6}
        >
          <img
            className={classes.profileImg}
            src={ProfileImg}
            alt="profile img"
          />
        </Grid>

        <Grid
          xs={12}
          md={6}
        >
          <div className={classes.detailBox}>
            <ThemeProvider theme={theme}>
              <Typography variant="subtitle2" gutterBottom>
                Available for small freelance projects.
              </Typography>
              
              <div style={{ marginTop: '7px', marginBottom: '24px' }}>
                <Typography variant="h3" >
                  Toluwase Ogunsola.
                </Typography>
                <Typography variant="h3">
                Graphic Designer based in Lagos, NG.
                </Typography>
              </div>
              
              <Typography variant="subtitle1" >
                I live in a world of infinite possibilities, preferring to see things not as they are, but as they could be. I'm a problem solver with a keen interest in contributing to society through design.
              </Typography>

              <a href="#" className={classes.resumeLink}>
                Full Resume
                <Arrow />
              </a>
              
              <a href="#" className={classes.contactBtn}>
                <Box
                  sx={{
                    width: '175px',
                    height: '70px',
                    backgroundColor: '#36A0E0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                    '&:hover': {
                      backgroundColor: '#3286B9',
                    },

                    '&:active': {
                      backgroundColor: '#3175A8',
                    },
                  }}
                >
                  Contact Me
                </Box>
              </a>
            </ThemeProvider>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About