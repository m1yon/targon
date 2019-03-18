import React from "react";
import { connect } from "react-redux";
import Loading from "./Loading";
import PlayerProfile from './PlayerProfile';

const PlayerDashboard = ({ players, location }) => {
  return (
    <div className="player-dashboard">
      <Loading component={
        <PlayerProfile players={players} location={location} />
      } quickLoad={true}/>
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