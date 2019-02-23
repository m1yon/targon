import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Targon</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/player-stats" activeClassName="is-active">Stats</NavLink>
  </header>
);

export default Header;