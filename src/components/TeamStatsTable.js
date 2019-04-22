import React from "react";
import { NavLink } from "react-router-dom";
import { statToPretty } from "./PlayerProfile";

const TeamStatsTable = ({ stats, placement }) => {
  return (
    <div>
      <h1 className="player-stats__statistics-title">Statistics</h1>
      
      <div className="player-profile__stat-sheet">
        <div className="stat-sheet__header">
          <p>Stat</p>
          <p>Average</p>
          <p>Placement</p>
        </div>

        <StatsheetEntry statname={"kda"} avg={ stats.kda } placement={ placement.kda } placementTotal={ placement.numOfTeams } alt="0"/>
        <StatsheetEntry statname={"baronKills"} avg={ stats.baronKills } placement={ placement.baronKills } placementTotal={ placement.numOfTeams } alt="1"/>
        <StatsheetEntry statname={"teamDragKills"} avg={ stats.teamDragKills } placement={ placement.teamDragKills } placementTotal={ placement.numOfTeams } alt="0"/>
        <StatsheetEntry statname={"gd10"} avg={ stats.gd10 } placement={ placement.gd10 } placementTotal={ placement.numOfTeams } alt="1"/>
        <StatsheetEntry statname={"xpd10"} avg={ stats.xpd10 } placement={ placement.xpd10 } placementTotal={ placement.numOfTeams } alt="0"/>
        <StatsheetEntry statname={"csd10"} avg={ stats.csd10 } placement={ placement.csd10 } placementTotal={ placement.numOfTeams } alt="1"/>
        <StatsheetEntry statname={"cspm"} avg={ stats.cspm } placement={ placement.cspm } placementTotal={ placement.numOfTeams } alt="0"/>
        <StatsheetEntry statname={"dpm"} avg={ stats.dpm } placement={ placement.dpm } placementTotal={ placement.numOfTeams } alt="1"/>
        <StatsheetEntry statname={"earnedGoldPerMinute"} avg={ stats.earnedGoldPerMinute } placement={ placement.earnedGoldPerMinute } placementTotal={ placement.numOfTeams } alt="0"/>
        <StatsheetEntry statname={"goldPerGame"} avg={ stats.goldPerGame } placement={ placement.goldPerGame } placementTotal={ placement.numOfTeams } alt="1"/>
        <StatsheetEntry statname={"wpm"} avg={ stats.wpm } placement={ placement.wpm } placementTotal={ placement.numOfTeams } alt="0"/>
        <StatsheetEntry statname={"wcpm"} avg={ stats.wcpm } placement={ placement.wcpm } placementTotal={ placement.numOfTeams } alt="1"/>
        <StatsheetEntry statname={"kpm"} avg={ stats.kpm } placement={ placement.kpm } placementTotal={ placement.numOfTeams } alt="0"/>
        <StatsheetEntry statname={"invisibleWardClearRate"} avg={ stats.invisibleWardClearRate } placement={ placement.invisibleWardClearRate } placementTotal={ placement.numOfTeams } alt="1"/>
        <StatsheetEntry statname={"visibleWardClearRate"} avg={ stats.visibleWardClearRate } placement={ placement.visibleWardClearRate } placementTotal={ placement.numOfTeams } alt="0"/>
      </div>
    </div>
  );
};

// invisiblewardclearrate: "0.29"
// kpm: "3.72"
// teamdragkills: "2.00"
// totalLosses: "14.00"
// totalTeamdragkills: "36.00"
// totalWins: "4.00"
// visibleWardClearRate: "0.60"
// winPercentage: "22.22%"

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

export default TeamStatsTable;