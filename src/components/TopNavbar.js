import React, { useState } from 'react';
import MobileSidebar from './MobileSidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

library.add(faBars);

const TopNavbar = () => {
  const [navMenuDisplayed, setNavMenuDisplayed] = useState(false);
  return(
    <div>
      {navMenuDisplayed && <MobileSidebar setNavMenuDisplayed={setNavMenuDisplayed}/>}
      <div className="top-navbar">  
        <FontAwesomeIcon 
          className="top-navbar__mobile-nav-button" 
          icon="bars" 
          onClick={() => setNavMenuDisplayed(true)}  
        />

        <NavLink to="/" className="top-navbar__mobile-logo">
          Targon
        </NavLink>
        <div></div>
      </div>
    </div>
  );
}

export default TopNavbar;