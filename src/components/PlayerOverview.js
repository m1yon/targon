import React from "react";
import { connect } from "react-redux";
import TopBoard from "./TopBoard";
import Loading from "./Loading";

const PlayerOverview = () => (
  <div className="player-overview">
    <Loading component={
      <div>
        <h1>Player Overview</h1>
        <div className="player-overview__grid">
          <TopBoard stat="totalKills" />
          <TopBoard stat="kda" />
          <TopBoard stat="dmgPercentage" />
          <TopBoard stat="kp" />

          <TopBoard stat="goldPercentage" />
          <TopBoard stat="totalAssists" />
          <TopBoard stat="dpm" />
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

export default connect(mapStateToProps)(PlayerOverview);