import React from "react";
import HomeTopBoard from "./HomeTopBoard"; 

const HomeDashboard = () => (
  <div>
    <h1>2019 Spring Split Leaders</h1>
    <div className="home-dashboard">
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
);

export default HomeDashboard;