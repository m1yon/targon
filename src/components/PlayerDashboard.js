import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PlayerStats from "./PlayerStats";

const PlayerDashboard = ({ isFetching, players, location }) => {
  const playerName = location.pathname.slice(8);

  return (
    <div className="player-dashboard">
      { !isFetching ? 
        <div>
          <div className="team-banner">
            <div className="team-banner--no-overflow">
              <img src="/img/cloud9.jpg" className="team-banner__bg" />
            </div>

            <div className="team-banner--overflow">
              <img src="/img/tyler1.jpg" className="team-banner__profile-picture" />
              <div className="team-banner__player-info">
                <h1>{ playerName }</h1>
                <h2>TYLER STEINKAMP</h2>
                <NavLink to={"/team/" + players[playerName].team}>{players[playerName].position} - {players[playerName].team}</NavLink>
              </div>
            </div>
          </div>
          <PlayerStats player={ players[playerName] } />
        </div>
      :
      console.log("fetching...")}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.players.isFetching,
    players: state.players.data
  };
};

export default connect(mapStateToProps)(PlayerDashboard);