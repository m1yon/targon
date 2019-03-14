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

        <NavLink className="navbutton" to="/leaderboard/" activeClassName="is-active">
            Leaderboard
        </NavLink>
      </div>
    </div>
  </header>
);

export default Header;