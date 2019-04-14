import React from "react";
import { NavLink } from "react-router-dom";
import { statToPretty } from "./PlayerProfile";

const TeamStatsTable = ({ totalKills, totalDeaths, totalAssists, kda, kpm, teamdragkills, fbPercentage, gd10, xpd10,
  csd10, cspm, csPercent15, dpm, dmgPercentage, earnedGoldPerMinute, goldPerGame, wpm, wcpm, baronKills, firstBaronTime,
  firstTowerTime, firstDragonTime, heraldTime, invisiblewardclearrate, totalLosses, totalTeamdragkills,
  totalWins, visibleWardClearRate, }) => {
  const totalKillsPlacement = 1;
  const numOfPlayersInPos = 8;
  return (
    <div>
      <h1 className="player-stats__statistics-title">Statistics</h1>
      
      <div className="player-profile__stat-sheet">
        <div className="stat-sheet__header">
          <p>Stat</p>
          <p>Average</p>
          <p>Placement</p>
        </div>

        <StatsheetEntry statname={"kda"} avg={ kda } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
        <StatsheetEntry statname={"baronKills"} avg={ baronKills } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="1"/>
        <StatsheetEntry statname={"teamdragkills"} avg={ teamdragkills } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
        <StatsheetEntry statname={"gd10"} avg={ gd10 } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="1"/>
        <StatsheetEntry statname={"xpd10"} avg={ xpd10 } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
        <StatsheetEntry statname={"csd10"} avg={ csd10 } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="1"/>
        <StatsheetEntry statname={"cspm"} avg={ cspm } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
        <StatsheetEntry statname={"dpm"} avg={ dpm } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="1"/>
        <StatsheetEntry statname={"earnedGoldPerMinute"} avg={ earnedGoldPerMinute } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
        <StatsheetEntry statname={"goldPerGame"} avg={ goldPerGame } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="1"/>
        <StatsheetEntry statname={"wpm"} avg={ wpm } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
        <StatsheetEntry statname={"wcpm"} avg={ wcpm } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="1"/>
        <StatsheetEntry statname={"kpm"} avg={ kpm } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>
        <StatsheetEntry statname={"invisiblewardclearrate"} avg={ invisiblewardclearrate } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="1"/>
        <StatsheetEntry statname={"visibleWardClearRate"} avg={ visibleWardClearRate } placement={ totalKillsPlacement } placementTotal={ numOfPlayersInPos } alt="0"/>


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