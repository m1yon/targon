import React from "react";
import { connect } from "react-redux";
import PlayersTopBoard from "./PlayersTopBoard";
import Loading from "./Loading";

const PlayersDashboard = () => (
  <div className="players-dashboard">
    <Loading component={
      <div>
        <h1>Player Overview</h1>
        <div className="players-dashboard__grid">
          <PlayersTopBoard stat="totalKills" />
          <PlayersTopBoard stat="kda" />
          <PlayersTopBoard stat="dmgPercentage" />
          <PlayersTopBoard stat="kp" />

          <PlayersTopBoard stat="goldPercentage" />
          <PlayersTopBoard stat="totalAssists" />
          <PlayersTopBoard stat="dpm" />
        </div>
      </div>
    } quickLoad={true} />
  </div>

);

const mapStateToProps = (state) => {
  return {
    isFetching: state.topBoards.isFetching,
  };
}

export default connect(mapStateToProps)(PlayersDashboard);