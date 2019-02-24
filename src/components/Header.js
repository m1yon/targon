import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1 className="logo">Targon</h1>
    <div className="navbar">
      
      <NavLink className="navbutton" to="/" activeClassName="is-active" exact={true}>
        <div className="navbutton">
          Home
        </div>
      </NavLink>
      
      <NavLink className="navbutton" to="/player-stats" activeClassName="is-active">
          Stats
      </NavLink>
    </div>
  </header>
);

export default Header;