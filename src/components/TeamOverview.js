import React from "react";
import { connect } from "react-redux";
import TopBoard from "./TopBoard";
import Loading from "./Loading";

const TeamOverview = () => (
  <div className="player-overview">
    <Loading component={
      <div>
        <h1>Team Overview</h1>
        <div className="player-overview__grid">
          <TopBoard type='teams' stat="winPercentage" />
          <TopBoard type='teams' stat="firstBaronTime" />
          <TopBoard type='teams' stat="firstTowerTime" />
          <TopBoard type='teams' stat="heraldTime" />
          {/* <TopBoard type='teams' stat="invisibleWardClearRate" /> */}
          <TopBoard type='teams' stat="visibleWardClearRate" />
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

export default connect(mapStateToProps)(TeamOverview);