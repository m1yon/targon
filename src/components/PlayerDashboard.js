import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import PlayerStatsTable from './PlayerStatsTable';
import { PlayerStatsAreaChart, WinratePieChart} from './PlayerProfileCharts';
import Loading from "./Loading";

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

const PlayerDashboard = ({ players, location }) => {
  return (
    <div className="player-dashboard">
      <Loading component={
        <PlayerProfile players={players} location={location} />
      } quickLoad={true}/>
    </div>
  );
};

const PlayerProfile = ({ players, location }) => {
  const playerName = location.pathname.slice(8);

  return (
    <div>
      <div className="team-banner">
        <div className="team-banner__content">
          {/* <img src="/img/cloud9.jpg" className="team-banner__bg" /> */}
          <img src="/img/tyler1.jpg" className="team-banner__profile-picture" />
          <div className="team-banner__player-info">
            <h1>{playerName}</h1>
            <h2>TYLER STEINKAMP</h2>
            <NavLink to={"/team/" + players[playerName].team}>{players[playerName].position} - {players[playerName].team}</NavLink>
          </div>
        </div>
      </div>
      <PlayerStats player={players[playerName]} />
    </div>
  );
};

const PlayerStats = ({ player }) => (
  <div className="player-dashboard__player-stats">
    <PlayerStatsTable { ...player } />
    <div className="player-stats__charts">
      <hr className="hr-vert" />
      <WinratePieChart />
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

const mapStateToProps = (state) => {
  return {
    isFetching: state.players.isFetching,
    players: state.players.data
  };
};

export default connect(mapStateToProps)(PlayerDashboard);