import React from 'react';

// @mui components
import { Container, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LinkedIn, GitHub } from '@mui/icons-material';

// Stylings
import useStyles from './styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
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
  },
});

theme.typography.body1 = {
  color: '#A9A9A9',
}

const Footer = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.wrapper}>
        <Container className={classes.container}>
          <Grid
            container
            rowSpacing={{ xs: 2, md: 0 }}
          >
            <Grid
              xs={12}
              md={4}
            >
              <a
                className={classes.linkedIn}
                href="https://www.linkedin.com/in/toluwase-ogunsola?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkqzcX8rxRxiD1uAFeFtteQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
                <Typography variant='body1'>
                  Toluwase Ogunsola
                </Typography>
              </a>
            </Grid>
            
            <Grid
              xs={12}
              md={4}
            >
              <Typography variant='body1'>
                &copy; 2022 ToluwaDesigns, Inc.
              </Typography>
            </Grid>
            
            <Grid
              xs={12}
              md={4}
            >
              <a
                className={classes.dev}
                href="https://github.com/Davidson015/toluwa-designs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </a>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default Footer