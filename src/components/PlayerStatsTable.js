import React from "react";
import { NavLink } from "react-router-dom";
import { statToPretty } from "./PlayerStats";

const PlayerStatsTable = ({ totalKills, totalDeaths, totalAssists, kda, kp, dthPercentage, fbPercentage, gd10,
  xpd10, csd10, cspm, dpm, csPercent15, dmgPercentage, earnedGoldPerMinute, goldPercentage, 
  wpm, wcpm }) => (
  <div>
    <h1>Statistics</h1>
    
    <div className="player-stats__stat-sheet">
      <div className="stat-sheet__header">
        <p>Stat</p>
        <p>Average</p>
        <p>Placement</p>
      </div>

      <StatsheetEntry statname={"totalKills"} avg={ totalKills } placement="-" alt="0"/>
      <StatsheetEntry statname={"totalDeaths"} avg={ totalDeaths } placement="-" alt="1"/>
      <StatsheetEntry statname={"totalAssists"} avg={ totalAssists } placement="-" alt="0"/>
      <StatsheetEntry statname={"kda"} avg={ kda } placement="-" alt="1"/>
      <StatsheetEntry statname={"kp"} avg={ kp } placement="-" alt="0"/>
      <StatsheetEntry statname={"dthPercentage"} avg={ dthPercentage } placement="-" alt="1"/>
      <StatsheetEntry statname={"fbPercentage"} avg={ fbPercentage } placement="-" alt="0"/>
      <StatsheetEntry statname={"gd10"} avg={ gd10 } placement="-" alt="1"/>
      <StatsheetEntry statname={"xpd10"} avg={ xpd10 } placement="-" alt="0"/>
      <StatsheetEntry statname={"csd10"} avg={ csd10 } placement="-" alt="1"/>
      <StatsheetEntry statname={"cspm"} avg={ cspm } placement="-" alt="0"/>
      <StatsheetEntry statname={"csPercent15"} avg={ csPercent15 } placement="-" alt="1"/>
      <StatsheetEntry statname={"dpm"} avg={ dpm } placement="-" alt="0"/>
      <StatsheetEntry statname={"dmgPercentage"} avg={ dmgPercentage } placement="-" alt="1"/>
      <StatsheetEntry statname={"earnedGoldPerMinute"} avg={ earnedGoldPerMinute } placement="-" alt="0"/>
      <StatsheetEntry statname={"goldPercentage"} avg={ goldPercentage } placement="-" alt="1"/>
      <StatsheetEntry statname={"wpm"} avg={ wpm } placement="-" alt="0"/>
      <StatsheetEntry statname={"wcpm"} avg={ wcpm } placement="-" alt="1"/>
    </div>
  </div>
);

const StatsheetEntry = ({ alt, avg, placement, statname}) => (
  <div className={alt == "1" ? "stat-sheet__entry" : "stat-sheet__entry stat-sheet__entry--alt"}>
  <NavLink to={`/leaderboard/${statname}`}>{statToPretty[statname]}</NavLink>
    <p>{avg}</p>
    <p>{placement} <span className="placement-outof">/ 241</span></p>
  </div>
);

export default PlayerStatsTable;