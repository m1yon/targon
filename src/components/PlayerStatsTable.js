import React from "react";
import { NavLink } from "react-router-dom";
import { statToPretty } from "./PlayerStats";

const PlayerStatsTable = ({ totalKills, totalDeaths, totalAssists, kda, kp, dthPercentage, fbPercentage, gd10,
  xpd10, csd10, cspm, dpm, csPercent15, dmgPercentage, earnedGoldPerMinute, goldPercentage, 
  wpm, wcpm, numOfPlayersInPos, totalKillsPlacement, totalDeathsPlacement, totalAssistsPlacement, kdaPlacement,
  kpPlacement, dthPercentagePlacement, fbPercentagePlacement, gd10Placement, xpd10Placement,
  csd10Placement, cspmPlacement, csPercent15Placement, dpmPlacement, dmgPercentagePlacement, 
  earnedGoldPerMinutePlacement, goldPercentagePlacement, wpmPlacement, wcpmPlacement }) => (
  <div>
    <h1>Statistics</h1>
    
    <div className="player-stats__stat-sheet">
      <div className="stat-sheet__header">
        <p>Stat</p>
        <p>Average</p>
        <p>Placement</p>
      </div>

      <StatsheetEntry statname={"totalKills"} avg={ totalKills } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"totalDeaths"} avg={ totalDeaths } placement={ totalDeathsPlacement } placementTotal={ numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"totalAssists"} avg={ totalAssists } placement={ totalAssistsPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"kda"} avg={ kda } placement={ kdaPlacement } placementTotal={ numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"kp"} avg={ kp } placement={ kpPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"dthPercentage"} avg={ dthPercentage } placement={ dthPercentagePlacement } placementTotal={ numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"fbPercentage"} avg={ fbPercentage } placement={ fbPercentagePlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"gd10"} avg={ gd10 } placement={ gd10Placement } placementTotal={ numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"xpd10"} avg={ xpd10 } placement={ xpd10Placement } placementTotal={ numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"csd10"} avg={ csd10 } placement={ csd10Placement } placementTotal={ numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"cspm"} avg={ cspm } placement={ cspmPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"csPercent15"} avg={ csPercent15 } placement={ csPercent15Placement } placementTotal={ numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"dpm"} avg={ dpm } placement={ dpmPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"dmgPercentage"} avg={ dmgPercentage } placement={ dmgPercentagePlacement } placementTotal={ numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"earnedGoldPerMinute"} avg={ earnedGoldPerMinute } placement={ earnedGoldPerMinutePlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"goldPercentage"} avg={ goldPercentage } placement={ goldPercentagePlacement } placementTotal={ numOfPlayersInPos } alt="1"/>
      <StatsheetEntry statname={"wpm"} avg={ wpm } placement={ wpmPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
      <StatsheetEntry statname={"wcpm"} avg={ wcpm } placement={ wcpmPlacement } placementTotal={ numOfPlayersInPos } alt="1"/>
    </div>
  </div>
);

const StatsheetEntry = ({ alt, avg, placement, statname, placementTotal }) => (
  <div className={alt == "1" ? "stat-sheet__entry" : "stat-sheet__entry stat-sheet__entry--alt"}>
  <NavLink to={`/leaderboard/${statname}`}>{statToPretty[statname]}</NavLink>
    <p>{avg}</p>
    { (placement/placementTotal) <= 0.5 ? 
      <p className="placement-positive">{placement} <span className="placement-outof">/ {placementTotal}</span></p>
    : <p className="placement-negative">{placement} <span className="placement-outof">/ {placementTotal}</span></p>
    }
  </div>
);

export default PlayerStatsTable;