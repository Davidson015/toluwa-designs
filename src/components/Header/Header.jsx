import React from 'react'
import { NavLink, Link } from 'react-router-dom';

// Assets
import { Logo4 as BrandLogo } from '../../assets';

// Stylings
import useStyles from './styles'

const Header = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.navBar}>
      <Link to="/">
        <img src={BrandLogo} className={classes.brandLogo} />
      </Link>

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