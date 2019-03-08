import React from "react";
import { NavLink } from "react-router-dom";
import PlayerStats from "./PlayerStats";

const PlayerDashboard = (props) => {
  const playerName = props.location.pathname.slice(8);

  return(
    <div className="player-dashboard">
      <div className="team-banner">
        <div className="team-banner--no-overflow">
          <img src="/img/cloud9.jpg" className="team-banner__bg" />
        </div>

        <div className="team-banner--overflow">
          <img src="/img/tyler1.jpg" className="team-banner__profile-picture" />
          <div className="team-banner__player-info">
            <h1>{playerName}</h1>
            <h2>TYLER STEINKAMP</h2>
            <NavLink to="/team/cloud9">ADC - Cloud9</NavLink>
          </div>
        </div>
      </div>

      <PlayerStats />
      
    </div>
  );
};

export default PlayerDashboard;