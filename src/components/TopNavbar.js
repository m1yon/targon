import React, { useState } from 'react';
import MobileNavBar from './MobileNavBar';

const TopNavbar = () => {
  const [navMenuDisplayed, setNavMenuDisplayed] = useState(true);
  return(
    <div>
      {navMenuDisplayed && <MobileNavBar setNavMenuDisplayed={setNavMenuDisplayed}/>}
      <div className="top-navbar">
        <button 
          className="top-navbar__mobile-nav-button" 
          onClick={() => setNavMenuDisplayed(true)} 
        >
          nav
        </button>  

        <p className="top-navbar__mobile-logo">
          Targon
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default TopNavbar;