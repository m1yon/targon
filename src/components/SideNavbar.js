import React from 'react';
import { NavLink } from "react-router-dom";

const SideNavbar = () => (
  <div className="side-navbar">
    <div className="side-navbar__logo">
      <h1>Targon</h1>
    </div>
    <div className="navbar-button__container">
      <NavLink className="navbutton" to="/" activeClassName="is-active" exact={true}>
          Home
      </NavLink>

      <NavLink className="navbutton" to="/leaderboard/" activeClassName="is-active">
        Leaderboard
      </NavLink>
    </div>
  </div>
);

export default SideNavbar;
