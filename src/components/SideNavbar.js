import React from 'react';
import { NavLink } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUsers, faListOl, faCalendar, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUsers, faListOl, faCalendar, faQuestionCircle);

const SideNavbar = () => (
  <div className="side-navbar">
    <div className="side-navbar__logo">
      <h1>Targon</h1>
    </div>
    <div className="navbar-button__container">
      <NavLink className="navbutton" to="/" activeClassName="is-active" exact={true}>
        <FontAwesomeIcon icon="home" />
        <p>Home</p>
      </NavLink>

      <NavLink className="navbutton" to="/player/" activeClassName="is-active">
        <FontAwesomeIcon icon="user" />
        <p>Players</p>
      </NavLink>

      <NavLink className="navbutton" to="/teams/" activeClassName="is-active" exact={true}>
        <FontAwesomeIcon icon="users" />
        <p>Teams</p>
      </NavLink>

      <NavLink className="navbutton" to="/leaderboard/" activeClassName="is-active">
        <FontAwesomeIcon icon="list-ol" />
        <p>Leaderboards</p>
      </NavLink>

      <NavLink className="navbutton" to="/schedule/" activeClassName="is-active" exact={true}>
        <FontAwesomeIcon icon="calendar" />
        <p>Schedule</p>
      </NavLink>

      <NavLink className="navbutton" to="/about/" activeClassName="is-active" exact={true}>
        <FontAwesomeIcon icon="question-circle" />
        <p>About</p>
      </NavLink>
    </div>
  </div>
);

export default SideNavbar;
