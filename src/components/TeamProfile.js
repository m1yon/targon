import React from "react";
import { connect } from "react-redux";
import Loading from "./Loading";
import TeamStatsTable from './TeamStatsTable';
import { MonsterTimeBarChart, PlayerStatsAreaChart, WinratePieChart } from './PlayerProfileCharts';
import { NavLink } from 'react-router-dom';
import TeamMatchHistory from './TeamMatchHistory';
import { Redirect } from 'react-router';

const TeamProfile = ({ teams, players, location }) => {
  return (
    <div className="team-profile">
      <Loading component={
        <Profile teams={teams} players={players} location={location} />
      } quickLoad={true}/>
    </div>
  );
};

const Profile = ({ teams, players, location }) => {
  const teamName = location.pathname.slice(7);

  // check if player exists
  if(!teams[teamName])
    return (
      <Redirect to='/' />
    );

  return (
    <div>
      <div className="team-profile__team-banner">
        <img className='team-profile__team-banner-logo' src={`/assets/teams/logos/${teamName.replace(/ /g,"_")}.png`} onError={(e)=>{e.target.onerror = null; e.target.src="/assets/players/avi/default.jpg"}} />
          <h1 className='team-profile__team-banner-text'>{teamName}</h1>
      </div>
      <TeamStats team={teams[teamName]} players={players} />
    </div>
  );
};

const COLORS = ['#4C61EE', '#8C43F7', '#4F3AD6', '#3A78D6', '#43BAF7'];

const TeamStats = ({ team, players }) => (
  <div>
    <Roster team={team} players={players} />
    <div className="team-profile__stats-container">
      <TeamStatsTable { ...team } />
      <div className="team-stats__charts">
        <hr className="hr-vert" />
        <WinratePieChart winrate={ team.graphs.winRatePieChart.winRate } />
        <hr className="hr-vert" />
        <MonsterTimeBarChart { ...team.stats } />
        <hr className="hr-vert" />
        <PlayerStatsAreaChart stat="goldAt10" player={team} color={COLORS[0]} />
        <hr className="hr-vert" />
        <PlayerStatsAreaChart stat="cspm" player={team} color={COLORS[0]} />
        <hr className="hr-vert"/>
        <PlayerStatsAreaChart stat="goldPerGame" player={team} color={COLORS[0]} />
        <hr className="hr-vert"/>
        <PlayerStatsAreaChart stat="xpAt10" player={team} color={COLORS[0]} />
        <hr className="hr-vert"/>
      </div>
    </div>
    <h1 className="player-profile__match-history-title">Match History</h1>
    <TeamMatchHistory team={team} />
  </div>
);

const Roster = ({ team, players }) => (
  <div>
    <h1 className='team-profile__roster-header'>Roster</h1>
    <div className='team-profile__roster'>

      {team.roster.player.map((player, index) => (
        <PlayerPortrait player={players[player]} role={team.roster.position[index]} key={index} />
      ))}
    </div>
  </div>
);

const PlayerPortrait = ({ player, role }) => (
  <div className='team-profile__roster-player'>
    <img 
      src={`/assets/players/avi/${player._id}.png`.replace(/ /g,"_")} 
      onError={(e)=>{e.target.onerror = null; e.target.src="/assets/players/avi/default.jpg"}} 
      className="team-profile__roster-picture" 
    />
    <NavLink className='team-profile__player-name' to={`/players/${player._id}`}>{player._id}</NavLink>
    <p>{role}</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    teams: state.teams,
    players: state.players
  };
};

export default connect(mapStateToProps)(TeamProfile);