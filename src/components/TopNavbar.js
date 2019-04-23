import React, { useState } from 'react';
import { connect } from "react-redux";
import MobileSidebar from './MobileSidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { fetchData } from '../actions/fetchData';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

library.add(faBars);

const TopNavbar = ({ changeSeason, seasons, season }) => {
  const [navMenuDisplayed, setNavMenuDisplayed] = useState(false);
  
  return(
    <div>
      {navMenuDisplayed && <MobileSidebar setNavMenuDisplayed={setNavMenuDisplayed}/>}
      <div className="navbar__top">  
        <FontAwesomeIcon 
          className="navbar__top__mobile-nav-button" 
          icon="bars" 
          onClick={() => setNavMenuDisplayed(true)}  
        />

        <NavLink to="/" className="navbar__top__mobile-logo">
          Targon
        </NavLink>
        
        <SeasonDropdown changeSeason={changeSeason} seasons={seasons} season={season}/>
      </div>
    </div>
  );
}

export const SeasonDropdown = ({ changeSeason, seasons, season, setNavMenuDisplayed, mobile }) => {
  if (mobile)
    return <Dropdown className='navbar__top-season-dropdown navbar__top-season-dropdown--mobile' onChange={(val) => {console.log('val', val); setNavMenuDisplayed(false); changeSeason(val.value);}} options={seasons} value={season} />
  return (
    <Dropdown className='navbar__top-season-dropdown' onChange={(val) => {console.log('val', val); changeSeason(val.value);}} options={seasons} value={season} />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSeason: (value) => dispatch(fetchData(value))
  }
}

const mapStateToProps = (state) => {
  return {
    seasons: state.seasons,
    season: state.season,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);