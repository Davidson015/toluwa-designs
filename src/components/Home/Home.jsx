import React from 'react';

// @mui components
import { Container, Grid2 as Grid } from '@mui/material';

// Stylings
import useStyles from './styles';

import { Projects } from '../index'

const Home = () => {
  return (
    <Container>
      <Projects />
    </Container>
  )
}

export default Home