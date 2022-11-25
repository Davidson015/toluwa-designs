import React from 'react';

// @mui components
import Grid from '@mui/material/Unstable_Grid2';

// Stylings
import useStyles from './styles';

const Project = ({ projectImg, projectLink, altTxt }) => {
  const classes = useStyles();

  return (
    <Grid
      xs={12}
      md={4}
      sx={{
        overflow: 'hidden'
      }}
    >
      <a href={projectLink}>
        <img
          className={classes.projectImg}
          src={projectImg}
          alt={altTxt}
        />
      </a>
    </Grid>
  )
}

export default Project