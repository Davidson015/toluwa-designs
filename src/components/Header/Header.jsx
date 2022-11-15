import React from 'react'
import { NavLink } from 'react-router-dom';

import useStyles from './styles'

const Header = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.navBar}>
      <div className={classes.brandLogo}>
        
      </div>

      <div className={classes.navLinks}>
        <NavLink
          to="/"
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
          Home
        </NavLink>

        <NavLink
          to="/#about"
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
          About
        </NavLink>

        <NavLink
          to="/#skills"
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
          Skills
        </NavLink>

        <NavLink
          to="/#contact"
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
          Contact
        </NavLink>
      </div>
    </div>
  )
}

export default Header