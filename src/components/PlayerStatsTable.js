import React from "react";
import { NavLink } from "react-router-dom";
const numeral = require('numeral');

let percentageFormat = "0.00%";
let decimalFormat = "0,0.00";

const PlayerStatsTable = ({ totalKills, totalDeaths, totalAssists, kda, kp, dthPercentage, fbPercentage, gd10,
                            xpd10, csd10, cspm, dpm, dmgPercentage, earnedGoldPerMinute, goldPercentage, wpm, 
                            wcpm }) => (
  <div className=".player-stats__stat-sheet">
    <h1>Statistics</h1>
    <div className="stat-sheet__header">
      <p>Stat</p>
      <p>Average</p>
      <p>Placement</p>
    </div>
    <hr className="hr-alt"/>
    <StatsheetEntry statname="kills" avg={ totalKills } placement="-" alt="0"/>
    <StatsheetEntry statname="deaths" avg={ totalDeaths } placement="-" alt="1"/>
    <StatsheetEntry statname="assist" avg={ totalAssists } placement="-" alt="0"/>
    <StatsheetEntry statname="KDA" avg={ numeral(kda).format(decimalFormat) } placement="-" alt="1"/>
    <StatsheetEntry statname="KP" avg={ kp } placement="-" alt="0"/>
    <StatsheetEntry statname="DTH%" avg={ numeral(dthPercentage/100 ).format(percentageFormat) } placement="-" alt="1"/>
    <StatsheetEntry statname="FB%" avg={ numeral(fbPercentage/100).format(percentageFormat) } placement="-" alt="0"/>
    <StatsheetEntry statname="GD10" avg={ numeral(gd10).format(decimalFormat) } placement="-" alt="1"/>
    <StatsheetEntry statname="XPD10" avg={ numeral(xpd10).format(decimalFormat) } placement="-" alt="0"/>
    <StatsheetEntry statname="CSD10" avg={ numeral(csd10).format(decimalFormat) } placement="-" alt="1"/>
    <StatsheetEntry statname="CSPM" avg={ numeral(cspm).format(decimalFormat) } placement="-" alt="0"/>
    <StatsheetEntry statname="CS%P15" avg="-" placement="-" alt="1"/>
    <StatsheetEntry statname="DPM" avg={ numeral(dpm).format(decimalFormat) } placement="-" alt="0"/>
    <StatsheetEntry statname="DMG%" avg={ numeral(dmgPercentage/100).format(percentageFormat) } placement="-" alt="1"/>
    <StatsheetEntry statname="EGPM" avg={ numeral(earnedGoldPerMinute).format(decimalFormat) } placement="-" alt="0"/>
    <StatsheetEntry statname="GOLD%" avg={ numeral(goldPercentage/100).format(percentageFormat) } placement="-" alt="1"/>
    <StatsheetEntry statname="WPM" avg={ numeral(wpm).format(decimalFormat) } placement="-" alt="0"/>
    <StatsheetEntry statname="WCPM" avg={ numeral(wcpm).format(decimalFormat) } placement="-" alt="1"/>
  </div>
);

const StatsheetEntry = (props) => (
  <div className={props.alt == "1" ? "stat-sheet__entry" : "stat-sheet__entry stat-sheet__entry--alt"}>
  <NavLink to={"/leaderboard/" + props.statname}>{props.statname.charAt(0).toUpperCase() + props.statname.slice(1)}</NavLink>
    <p>{props.avg}</p>
    <p>{props.placement} <span className="placement-outof">/ 241</span></p>
  </div>
);

export default PlayerStatsTable;