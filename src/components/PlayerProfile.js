import React from 'react';
import { NavLink } from "react-router-dom";
import PlayerStats from "./PlayerStats";

const PlayerProfile = ({ players, location }) => {
  const playerName = location.pathname.slice(8);

  return (
    <div>
      <div className="team-banner">
        <div className="team-banner__content">
          {/* <img src="/img/cloud9.jpg" className="team-banner__bg" /> */}
          <img src="/img/tyler1.jpg" className="team-banner__profile-picture" />
          <div className="team-banner__player-info">
            <h1>{playerName}</h1>
            <h2>TYLER STEINKAMP</h2>
            <NavLink to={"/team/" + players[playerName].team}>{players[playerName].position} - {players[playerName].team}</NavLink>
          </div>
        </div>
      </div>
      <PlayerStats player={players[playerName]} />
    </div>
  );
}

export default PlayerProfile;