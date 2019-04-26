import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import PlayerStatsTable from './PlayerStatsTable';
import PlayerMatchHistory from './PlayerMatchHistory';
import { ChampionsPlayedPieChart, PlayerStatsAreaChart, WinratePieChart} from './PlayerProfileCharts';
import Loading from "./Loading";
import { Redirect } from 'react-router';

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
  wcpm: 'WCPM',

  baronKills: 'Barons',
  goldPerGame: 'GOLDPG',
  firstBaronTime: 'First Baron Time',
  firstTowerTime: 'First Tower Time',
  heraldTime: 'Herald Time',
  invisibleWardClearRate: 'IWCR',
  visibleWardClearRate: 'VWCR',
  winPercentage: 'Win Percentage',
  firstTowerTime: 'FTT',
  firstBaronTime: 'FBT',
  firstDragonTime: 'FDT',
  heraldTime: 'HT',
  kpm: 'KPM',
  teamDragKills: 'Dragons',
  totalLosses: 'Loses',
  totalTeamdragkills: 'Dragon Kills',
  totalWins: 'Wins',
  goldAt10:'Gold at 10',
  xpAt10: 'XP at 10',

};

const PlayerProfile = ({ players, location }) => {
  return (
    <div className="player-profile">
      <Loading component={
        <Profile players={players} location={location} />
      } quickLoad={true}/>
    </div>
  );
};

const Profile = ({ players, location }) => {
  const playerName = location.pathname.slice(9);

  // check if player exists
  if(!players[playerName])
    return (
      <Redirect to='/' />
    );

  return (
    <div>
      <div className="team-banner">
        <img className='team-banner__team-logo' src={`/assets/teams/logos/${players[playerName].team.replace(/ /g,"_")}.png`} onError={(e)=>{e.target.onerror = null; e.target.src="/assets/players/avi/default.jpg"}} />

        <div className="team-banner__content" >
          <img src={`/assets/players/avi/${playerName}.png`.replace(/ /g,"_")} onError={(e)=>{e.target.onerror = null; e.target.src="/assets/players/avi/default.jpg"}} className="team-banner__profile-picture" />
          <div className="team-banner__player-info">
            <h1>{playerName}</h1>
            {/* <h2>TYLER STEINKAMP</h2> */}
              <NavLink className='player-profile__role-team'
                to={"/teams/" + players[playerName].team}
              >
                {players[playerName].position} - {players[playerName].team}
                <span style={{backgroundImage: `url(/assets/teams/icons/${players[playerName].team.replace(/ /g,"_")}.png)`}} onError={(e)=>{e.target.onerror = null; e.target.src="/assets/players/avi/default.jpg"}} className="team-banner__team-icon"></span>
              </NavLink>
          </div>
        </div>
      </div>
      <PlayerStats player={players[playerName]} />
    </div>
  );
};

const COLORS = ['#4C61EE', '#8C43F7', '#FA95CA', '#43FAB6', '#3A78D6', '#43BAF7', '#FA52D5', '#FC7C62', '#4F3AD6', '#FAC552', '#D94862', '#8AFFFF'];

const PlayerStats = ({ player }) => (
  <div>
    <div className="player-overview__player-stats">
      <PlayerStatsTable { ...player } />
      <div className="player-stats__charts">
        <hr className="hr-vert" />
        <WinratePieChart winrate={player.graphs.winRatePieChart.winRate} />
        <hr className="hr-vert" />
        <ChampionsPlayedPieChart player={player} />
        <hr className="hr-vert" />
        <PlayerStatsAreaChart stat="totalKills" player={player} color={COLORS[0]} />
        <hr className="hr-vert" />
        <PlayerStatsAreaChart stat="kda" player={player} color={COLORS[0]} />
        <hr className="hr-vert"/>
        <PlayerStatsAreaChart stat="dpm" player={player} color={COLORS[0]} />
        <hr className="hr-vert"/>
        <PlayerStatsAreaChart stat="totalAssists" player={player} color={COLORS[0]} />
        <hr className="hr-vert"/>
      </div>
    </div>
    <h1 className="player-profile__match-history-title">Match History</h1>
    <PlayerMatchHistory player={player} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    players: state.players
  };
};

export default connect(mapStateToProps)(PlayerProfile);