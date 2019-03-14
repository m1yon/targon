import React from "react";
import { NavLink } from "react-router-dom";
import { statToPretty } from "./PlayerStats";

const numeral = require('numeral');

let percentageFormat = "0.00%";
let decimalFormat = "0,0.00";

const PlayerStatsTable = ({ totalKills, totalDeaths, totalAssists, kda, kp, dthPercentage, fbPercentage, gd10,
  xpd10, csd10, cspm, dpm, csPercent15, dmgPercentage, earnedGoldPerMinute, goldPercentage, 
  wpm, wcpm }) => (
  <div className=".player-stats__stat-sheet">
    <h1>Statistics</h1>
    <div className="stat-sheet__header">
      <p>Stat</p>
      <p>Average</p>
      <p>Placement</p>
    </div>
    <hr className="hr-alt"/>

    <StatsheetEntry statname={"totalKills"} avg={ totalKills } placement="-" alt="0"/>
    <StatsheetEntry statname={"totalDeaths"} avg={ totalDeaths } placement="-" alt="1"/>
    <StatsheetEntry statname={"totalAssists"} avg={ totalAssists } placement="-" alt="0"/>
    <StatsheetEntry statname={"kda"} avg={ numeral(kda).format(decimalFormat) } placement="-" alt="1"/>
    <StatsheetEntry statname={"kp"} avg={ numeral(kp/100 ).format(percentageFormat) } placement="-" alt="0"/>
    <StatsheetEntry statname={"dthPercentage"} avg={ numeral(dthPercentage/100 ).format(percentageFormat) } placement="-" alt="1"/>
    <StatsheetEntry statname={"fbPercentage"} avg={ numeral(fbPercentage/100).format(percentageFormat) } placement="-" alt="0"/>
    <StatsheetEntry statname={"gd10"} avg={ numeral(gd10).format(decimalFormat) } placement="-" alt="1"/>
    <StatsheetEntry statname={"xpd10"} avg={ numeral(xpd10).format(decimalFormat) } placement="-" alt="0"/>
    <StatsheetEntry statname={"csd10"} avg={ numeral(csd10).format(decimalFormat) } placement="-" alt="1"/>
    <StatsheetEntry statname={"cspm"} avg={ numeral(cspm).format(decimalFormat) } placement="-" alt="0"/>
    <StatsheetEntry statname={"csPercent15"} avg={ numeral(csPercent15/100).format(percentageFormat) } placement="-" alt="1"/>
    <StatsheetEntry statname={"dpm"} avg={ numeral(dpm).format(decimalFormat) } placement="-" alt="0"/>
    <StatsheetEntry statname={"dmgPercentage"} avg={ numeral(dmgPercentage/100).format(percentageFormat) } placement="-" alt="1"/>
    <StatsheetEntry statname={"earnedGoldPerMinute"} avg={ numeral(earnedGoldPerMinute).format(decimalFormat) } placement="-" alt="0"/>
    <StatsheetEntry statname={"goldPercentage"} avg={ numeral(goldPercentage/100).format(percentageFormat) } placement="-" alt="1"/>
    <StatsheetEntry statname={"wpm"} avg={ numeral(wpm).format(decimalFormat) } placement="-" alt="0"/>
    <StatsheetEntry statname={"wcpm"} avg={ numeral(wcpm).format(decimalFormat) } placement="-" alt="1"/>
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