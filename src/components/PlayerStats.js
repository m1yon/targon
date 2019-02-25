import React from "react";
import PlayerStatsheet from "./PlayerStatsheet";
import BasicAreaChart from "./BasicAreaChart";


const PlayerStats = () => (
  <div className="player-stats">
    <PlayerStatsheet />
    <div className="player-visual-stats-container">
      <hr className="hr-vert" />
      <BasicAreaChart />
      <hr className="hr-vert" />
      <BasicAreaChart />
      <hr className="hr-vert" />
      <BasicAreaChart />
      <hr className="hr-vert" />
      <BasicAreaChart />
      <hr className="hr-vert" />
    </div>
  </div>

  
);

export default PlayerStats;