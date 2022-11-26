import React from 'react';

// @mui components
import { Container } from '@mui/material';

// Stylings
// import useStyles from './styles';

import { Projects, About, Skills } from '../index'

const Home = () => {
  return (
    <Container>
      <Projects />
      <About />
      <Skills />
    </Container>
  )
}

export default Home