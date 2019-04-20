import React from "react";
import { NavLink } from "react-router-dom";
import { statToPretty } from "./PlayerProfile";

const PlayerStatsTable = ({ stats, placement }) => (
  <div>
    <h1 className="player-stats__statistics-title">Statistics</h1>
    
    <div className="player-profile__stat-sheet">
      <div className="stat-sheet__header">
        <p>Stat</p>
        <p>Average</p>
        <p>Placement</p>
      </div>

      <StatsheetEntry statname={"totalKills"} avg={ stats.totalKills } placement={ placement.kills } placementTotal={ placement.numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"totalDeaths"} avg={ stats.totalDeaths } placement={ placement.deaths } placementTotal={ placement.numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"totalAssists"} avg={ stats.totalAssists } placement={ placement.assists } placementTotal={ placement.numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"kda"} avg={ stats.kda } placement={ placement.kda } placementTotal={ placement.numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"kp"} avg={ stats.kp } placement={ placement.kp } placementTotal={ placement.numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"dthPercentage"} avg={ stats.dthPercentage } placement={ placement.dthPercentage } placementTotal={ placement.numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"fbPercentage"} avg={ stats.fbPercentage } placement={ placement.fbPercentage } placementTotal={ placement.numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"gd10"} avg={ stats.gd10 } placement={ placement.gd10 } placementTotal={ placement.numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"xpd10"} avg={ stats.xpd10 } placement={ placement.xpd10 } placementTotal={ placement.numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"csd10"} avg={ stats.csd10 } placement={ placement.csd10 } placementTotal={ placement.numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"cspm"} avg={ stats.cspm } placement={ placement.cspm } placementTotal={ placement.numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"csPercent15"} avg={ stats.csPercent15 } placement={ placement.csPercent15 } placementTotal={ placement.numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"dpm"} avg={ stats.dpm } placement={ placement.dpm } placementTotal={ placement.numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"dmgPercentage"} avg={ stats.dmgPercentage } placement={ placement.dmgPercentage } placementTotal={ placement.numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"earnedGoldPerMinute"} avg={ stats.earnedGoldPerMinute } placement={ placement.earnedGoldPerMinute } placementTotal={ placement.numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"goldPercentage"} avg={ stats.goldPercentage } placement={ placement.goldPercentage } placementTotal={ placement.numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"wpm"} avg={ stats.wpm } placement={ placement.wpm } placementTotal={ placement.numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"wcpm"} avg={ stats.wcpm } placement={ placement.wcpm } placementTotal={ placement.numOfPlayersInPos } alt="1"/>
    </div>
  </div>
);

const StatsheetEntry = ({ alt, avg, placement, statname, placementTotal }) => (
  <div className={alt == "1" ? "stat-sheet__entry" : "stat-sheet__entry stat-sheet__entry--alt"}>
  <NavLink to={`/leaderboards/${statname}`}>{statToPretty[statname]}</NavLink>
    <p className='stat-sheet__stat'>{avg}</p>
    { (placement/placementTotal) <= 0.5 ? 
      <p className="placement-positive">{placement} <span className="placement-outof">/ {placementTotal}</span></p>
    : <p className="placement-negative">{placement} <span className="placement-outof">/ {placementTotal}</span></p>
    }
  </div>
);

export default PlayerStatsTable;