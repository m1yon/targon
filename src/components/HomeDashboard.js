import React from "react";
import HomeTopBoard from "./HomeTopBoard"; 
import HomeMatchHistory from "./HomeMatchHistory";

const HomeDashboard = () => (
  <div className="home-dashboard">
    <div>
      <h1>2019 Spring Split Leaders</h1>
      <div className="home-dashboard__grid">
        <HomeTopBoard stat="kills"/>
        <HomeTopBoard stat="wins"/>
        <HomeTopBoard stat="kills"/>
        <HomeTopBoard stat="wins"/>

        <HomeTopBoard stat="wins"/>
        <HomeTopBoard stat="kills"/>
        <HomeTopBoard stat="wins"/>
        <HomeTopBoard stat="kills"/>

        <HomeTopBoard stat="kills"/>
        <HomeTopBoard stat="wins"/>
        <HomeTopBoard stat="kills"/>
        <HomeTopBoard stat="wins"/>
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