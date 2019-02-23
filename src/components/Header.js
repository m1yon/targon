import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1 className="logo">Targon</h1>
    <div className="navbar">
      <div className="navbutton">
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      </div>
      <div className="navbutton">
        <NavLink to="/player-stats" activeClassName="is-active">Stats</NavLink>
      </div>
    </div>
  </header>
);

export default Header;