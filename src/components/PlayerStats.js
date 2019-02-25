import React from "react";
import PlayerStatsheet from "./PlayerStatsheet";
import BasicAreaChart from "./BasicAreaChart";


const PlayerStats = () => (
  <div className="player-stats">
    <PlayerStatsheet />
    <div className="player-visual-stats-container">
      <BasicAreaChart />
      <BasicAreaChart />
      <BasicAreaChart />
      <BasicAreaChart />


    </div>
  </div>

  
);

export default PlayerStats;