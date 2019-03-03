import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="logo__container">
      <h1 className="header__logo">Targon</h1>
    </div>
    <div className="navbar">
      <div className="navbar-button__container">
        <NavLink className="navbutton" to="/" activeClassName="is-active" exact={true}>
          <div className="navbutton">
            Home
          </div>
        </NavLink>
        
        <NavLink className="navbutton" to="/player/tyler1" activeClassName="is-active">
            Players
        </NavLink>

        <NavLink className="navbutton" to="/team/cloud9" activeClassName="is-active">
            Teams
        </NavLink>

        <NavLink className="navbutton" to="/leaderboard/kills" activeClassName="is-active">
            Leaderboards
        </NavLink>
      </div>
    </div>
  </header>
);

export default Header;