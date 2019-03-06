import React from "react";
import PlayerStatsTable from "./PlayerStatsTable";
import PlayerStatsAreaChart from "./PlayerStatsAreaChart";


const PlayerStats = (props) => (
  <div className="player-dashboard__player-stats">
    <PlayerStatsTable player={ props.player } />
    <div className="player-stats__charts">
      <hr className="hr-vert" />
      <PlayerStatsAreaChart />
      <hr className="hr-vert" />
      <PlayerStatsAreaChart />
      <hr className="hr-vert" />
      <PlayerStatsAreaChart />
      <hr className="hr-vert" />
      <PlayerStatsAreaChart />
      <hr className="hr-vert" />
    </div>
  </div>
);

export default PlayerStats;