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
          <TopBoard type='players' stat="totalKills" />
          <TopBoard type='players' stat="kda" />
          <TopBoard type='players' stat="dmgPercentage" />
          {/* <TopBoard stat="kp" /> */}

          <TopBoard type='players' stat="goldPercentage" />
          <TopBoard type='players' stat="totalAssists" /> 
          <TopBoard type='players' stat="dpm" />
        </div>
      </div>
    } quickLoad={true} />
  </div>

);

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
  };
}

export default connect(mapStateToProps)(PlayerOverview);