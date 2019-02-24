import React from "react";
import TopBoard from "../components/TopBoard"; 
import StatHeader from "../components/StatHeader";

const Homepage = () => (
  <div>
    <StatHeader name="2019 Spring Split Leaders"/>
    <div className="homepage">
      <TopBoard stat="kills"/>
      <TopBoard stat="wins"/>
      <TopBoard stat="kills"/>
      <TopBoard stat="wins"/>

      <TopBoard stat="wins"/>
      <TopBoard stat="kills"/>
      <TopBoard stat="wins"/>
      <TopBoard stat="kills"/>

      <TopBoard stat="kills"/>
      <TopBoard stat="wins"/>
      <TopBoard stat="kills"/>
      <TopBoard stat="wins"/>
    </div>
  </div>
);

export default Homepage;