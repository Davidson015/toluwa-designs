import React from 'react';

// @mui components
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Fade, Box, Fab } from '@mui/material';
import { ArrowUpward as Arrow } from '@mui/icons-material';

const BackToTop = () => {
  const trigger = useScrollTrigger();  

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: '12%',
          right: 20,
          zIndex: '1000',

          "@media (max-width: 1023px)": {
           bottom: 180,
          },
      }}
      >
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, .5)',
            color: '#eaeaea',
            transition: 'all .5s ease-in-out',

            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, .8)',
              transform: 'scale(105%)',
            }
          }}
        >
          <Arrow />
        </Fab>
      </Box>
    </Fade>
  )
}

export default BackToTop