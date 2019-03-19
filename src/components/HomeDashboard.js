import React from "react";
import { connect } from "react-redux";
import HomeTopBoard from "./HomeTopBoard"; 
import HomeMatchHistory from "./HomeMatchHistory";
import Loading from "./Loading";

const HomeDashboard = () => (  
  <div className="home-dashboard">
    <Loading component = {
      <div className="home-dashboard__flex">
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

        <div> 
          <h1>Match History</h1>
          <HomeMatchHistory />
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

export default connect(mapStateToProps)(HomeDashboard);