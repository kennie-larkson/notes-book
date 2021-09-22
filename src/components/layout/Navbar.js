import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({title}) => {
  return (
    
      <nav className="green">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            {title}
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
    
  );
};

export default Navbar;
