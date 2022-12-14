import React from 'react'

// @mui components
import Grid from '@mui/material/Unstable_Grid2';

// Stylings
// import useStyles from './styles';

// assets
import { projects } from '../../assets';

import Project from '../Project/Project';

const Projects = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        margin: '2% 0 9% 0',
      }}
    >
      {
        projects.map( (project, key) => (
          <Project
            key={key}
            projectImg={project}
            projectLink="#"
            altText="altText"
          />
        ))
      }
    </Grid>
  )
}

export default Projects