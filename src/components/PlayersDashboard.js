import React from "react";
import { connect } from "react-redux";
import HomeTopBoard from "./HomeTopBoard"; 
import Loading from "./Loading";

const PlayersDashboard = () => (  
  <div className="players-dashboard">
    <Loading component = {
      <div className="home-dashboard__flex">
        <div>
          <h1>Player Overview</h1>
          <div className="home-dashboard__grid">
            <HomeTopBoard stat="totalKills"/>
            <HomeTopBoard stat="kda"/>
            <HomeTopBoard stat="dmgPercentage"/>
            <HomeTopBoard stat="kp"/>
          </div>
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