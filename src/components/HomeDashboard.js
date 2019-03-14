import React from "react";
import { connect } from "react-redux";
import HomeTopBoard from "./HomeTopBoard"; 
import HomeMatchHistory from "./HomeMatchHistory";

const HomeDashboard = ({ isFetching }) => (
  <div className="home-dashboard">
    {!isFetching ? 
      <div>
        <h1>2019 Spring Split Leaders</h1>
        <div className="home-dashboard__grid">
          <HomeTopBoard stat="totalKills"/>
          <HomeTopBoard stat="totalAssists"/>
          <HomeTopBoard stat="kda"/>

          <HomeTopBoard stat="dpm"/>
          <HomeTopBoard stat="dmgPercentage"/>
          <HomeTopBoard stat="kp"/>

          <HomeTopBoard stat="goldPercentage"/>
        </div>
      </div>
      :
    <p>loading...</p>}

    <div> 
      <h1>Match History</h1>
      <HomeMatchHistory />
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    isFetching: state.topBoards.isFetching,
  };
}

export default connect(mapStateToProps)(HomeDashboard);