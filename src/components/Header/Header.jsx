import React from 'react';
import { useState } from 'react';

// @react-router
import { NavLink, Link } from 'react-router-dom';

// @mui components
import { useMediaQuery } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';

// Assets
import { Logo4 as BrandLogo } from '../../assets';

// Stylings
import useStyles from './styles';
import { useEffect } from 'react';

const links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/#about'
  },
  {
    name: 'Skills',
    path: '/#skills'
  },
  {
    name: 'Contact',
    path: '/#contact'
  },
]


const Header = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 1023px)');
  
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    let menu = document.querySelector(`.${classes.backdrop}`).classList;
    menu.toggle('openMenu');

  }, [isOpen, isMobile]);
  
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className={classes.navBar}>
      <Link to="/">
        <img src={BrandLogo} className={classes.brandLogo} />
      </Link>

      {
        isOpen ? (
          <Menu
            sx={{
              zIndex: '1',
              color: 'white',
              marginRight: '3%',
              "@media (min-width: 1024px)": {
                display: 'none',
              }
            }}
            onClick={handleMenuToggle}
          />
        ) : (
          <Close
            sx={{
              zIndex: '1',
              color: 'white',
              marginRight: '3%',
              "@media (min-width: 1024px)": {
                display: 'none',
              }
            }}
            onClick={handleMenuToggle}
          />
        )
      }

      <div className={classes.backdrop}>
        <div className={classes.navLinks}>
          {
            links.map( (item, key) => (
              <NavLink
              key={key}
              to={item.path}
              className={({ isActive }) => 
              [
                classes.navLinkItem,
                isActive ? classes.activeNavLink : undefined,
              ]
              .filter(Boolean)
              .join(" ")
            }
              end
            >
              {item.name}
            </NavLink>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Header