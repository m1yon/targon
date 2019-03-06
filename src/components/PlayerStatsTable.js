import React from "react";
import { NavLink } from "react-router-dom";

const PlayerStatsTable = ({ player }) => (
  <div className=".player-stats__stat-sheet">
    <h1>Statistics</h1>
    <div className="stat-sheet__header">
      <p>Stat</p>
      <p>Average</p>
      <p>Placement</p>
    </div>
    <hr className="hr-alt"/>
    <StatsheetEntry statname="kills" avg={ player.kills } placement="-" alt="0"/>
    <StatsheetEntry statname="deaths" avg={ player.deaths } placement="-" alt="1"/>
    <StatsheetEntry statname="assist" avg="-" placement="-" alt="0"/>
    <StatsheetEntry statname="KDA" avg="-" placement="-" alt="1"/>
    <StatsheetEntry statname="KP" avg="-" placement="-" alt="0"/>
    <StatsheetEntry statname="DTH%" avg="-" placement="-" alt="1"/>
    <StatsheetEntry statname="FB%" avg="-" placement="-" alt="0"/>
    <StatsheetEntry statname="GD10" avg="-" placement="-" alt="1"/>
    <StatsheetEntry statname="XPD10" avg="-" placement="-" alt="0"/>
    <StatsheetEntry statname="CSD10" avg="-" placement="-" alt="1"/>
    <StatsheetEntry statname="CSPM" avg="-" placement="-" alt="0"/>
    <StatsheetEntry statname="CS%P15" avg="-" placement="-" alt="1"/>
    <StatsheetEntry statname="DPM" avg="-" placement="-" alt="0"/>
    <StatsheetEntry statname="DMG%" avg="-" placement="-" alt="1"/>
    <StatsheetEntry statname="EGPM" avg="-" placement="-" alt="0"/>
    <StatsheetEntry statname="GOLD%" avg="-" placement="-" alt="1"/>
    <StatsheetEntry statname="WPM" avg="-" placement="-" alt="0"/>
    <StatsheetEntry statname="WCPM" avg="-" placement="-" alt="1"/>
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