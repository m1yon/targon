import React from "react";
import PlayerStatsTable from "./PlayerStatsTable";
import PlayerStatsAreaChart from "./PlayerStatsAreaChart";

export const statToPretty =  {
  totalKills: 'Kills',
  totalDeaths: 'Deaths',
  totalAssists: 'Assists',
  kda: 'KDA',
  kp: 'KP',
  dthPercentage: 'DTH%',
  fbPercentage: 'FB%',
  gd10: 'GD10',
  xpd10: 'XPD10',
  csd10: 'CSD10',
  cspm: 'CSPM',
  csPercent15: 'CS%P15',
  dpm: 'DPM',
  dmgPercentage: 'DMG%',
  earnedGoldPerMinute: 'EGPM',
  goldPercentage: 'GOLD%',
  wpm: 'WPM',
  wcpm: 'WCPM'
};

const PlayerStats = ({ player }) => (
  <div className="player-dashboard__player-stats">
    <PlayerStatsTable { ...player } />
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