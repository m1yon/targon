import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="logo-container">
      {/* <img className="imglogo" src="/img/logo.png" /> */}
      <h1 className="logo">Targon</h1>
    </div>
    <div className="navbar">
      
      <NavLink className="navbutton" to="/" activeClassName="is-active" exact={true}>
        <div className="navbutton">
          Home
        </div>
      </NavLink>
      
      <NavLink className="navbutton" to="/player" activeClassName="is-active">
          Player
      </NavLink>
    </div>
  </header>
);

export default Header;