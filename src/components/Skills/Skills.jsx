import React from 'react'

// @mui components
import { Typography, Container, Divider, Stack, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    body1: {
      color: '#eaeaea',
      textAlign: 'center',
    },
    subtitle2: {
      color: '#eaeaea',
      textAlign: 'center',
      fontWeight: '700',
    }
  },
});

theme.typography.h2 = {
  color: '#eaeaea',
  fontSize: '4rem',
  fontWeight: '400',
  letterSpacing: '.1rem',
  textAlign: 'center',
  padding: '16px 0 24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
};

theme.typography.subtitle1 = {
  color: '#eaeaea',
  textAlign: 'center',
  fontSize: '1.58rem',
  fontWeight: '400',
  paddingBottom: '8.25%',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.32rem',
  },
}

const Skills = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          padding: '0 !important',
          margin: '20% 0 10%',
        }}
      >
        <Typography variant='h2'>
          What I Do
        </Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                backgroundColor: '#eaeaea',
              }}
            />
          }
          spacing={{ xs: 4, md: 8 }}
        >
          {/* Websites */}
          <Container className={classes.smallerContainer}>
            <Typography variant='subtitle1'>
              Websites
            </Typography>

            <Typography variant='body1' gutterBottom>
              Comfortable with most platforms...
            </Typography>

            <div>
              <Typography variant='subtitle2'>
                Webflow
              </Typography>
              <Typography variant='subtitle2'>
                Wordpress
              </Typography>
              <Typography variant='subtitle2'>
                WIX + Squarespace
              </Typography>
              <Typography variant='subtitle2'>
                + more
              </Typography>
            </div>
          </Container>

          {
            isMobile ? (
              <Divider
                flexItem
                sx={{
                  backgroundColor: '#eaeaea',
                }}
              />
            ) : (
              undefined
            )
          }
          
          {/* Design */}
          <Container className={classes.smallerContainer}>
            <Typography variant='subtitle1'>
              Design
            </Typography>

            <Typography variant='body1' gutterBottom>
              I do...
            </Typography>

            <div>
              <Typography variant='subtitle2'>
                Logos
              </Typography>
              <Typography variant='subtitle2'>
                Invitations
              </Typography>
              <Typography variant='subtitle2'>
                Social Media Graphics
              </Typography>
              <Typography variant='subtitle2'>
                Infographics
              </Typography>
              <Typography variant='subtitle2'>
                + more
              </Typography>
            </div>
          </Container>

          {
            isMobile ? (
              <Divider
                flexItem
                sx={{
                  backgroundColor: '#eaeaea',
                }}
              />
            ) : (
              undefined
            )
          }
          
          {/* Management */}
          <Container className={classes.smallerContainer}>
            <Typography variant='subtitle1'>
              Management (CMS+CRM)
            </Typography>

            <Typography variant='body1' gutterBottom>
              I'm well trained in...
            </Typography>

            <div>
              <Typography variant='subtitle2'>
                Hubspot
              </Typography>
              <Typography variant='subtitle2'>
                Salesforce
              </Typography>
              <Typography variant='subtitle2'>
                Bynder
              </Typography>
              <Typography variant='subtitle2'>
                Unbouce
              </Typography>
              <Typography variant='subtitle2'>
                Shopify
              </Typography>
              <Typography variant='subtitle2'>
                + more
              </Typography>
            </div>
          </Container>
        </Stack>
      </Container>
    </ThemeProvider>
  )
}

export default Skills