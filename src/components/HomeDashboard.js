import React from "react";
import { connect } from "react-redux";
import Loading from "./Loading";

const HomeDashboard = () => (  
  <div className="home-dashboard">
    <Loading component = {
      <div className="home-dashboard__flex">
        <div>
          <h1>Home</h1>
          {/* <div className="home-dashboard__grid">
            <HomeTopBoard stat="totalKills"/>
            <HomeTopBoard stat="kda"/>
            <HomeTopBoard stat="dmgPercentage"/>
            <HomeTopBoard stat="kp"/>
          </div> */}
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