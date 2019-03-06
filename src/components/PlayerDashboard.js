import React from "react";
import { connect } from "react-redux";
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
            <h1>{props.player.name}</h1>
            <h2>TYLER STEINKAMP</h2>
            <NavLink to="/team/cloud9">ADC - Cloud9</NavLink>
          </div>
        </div>
      </div>

      <PlayerStats player={props.player} />
      
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const playerName = props.location.pathname.slice(8);
  return {
    player: state.players.find((player) => player.name === playerName)
  };
};

export default connect(mapStateToProps)(PlayerDashboard);