import React from "react";
import HomeTopBoard from "./HomeTopBoard"; 
import HomeMatchHistory from "./HomeMatchHistory";

const HomeDashboard = () => (
  <div className="home-dashboard">
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
      <div>
        <HomeMatchHistory />
      </div>
    </div>
  </div>
);

export default HomeDashboard;