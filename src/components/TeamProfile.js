import React from "react";
import { connect } from "react-redux";
import Loading from "./Loading";
import TeamStatsTable from './TeamStatsTable';

const TeamProfile = ({ teams, location }) => {
  return (
    <div className="team-overview">
      <Loading component={
        <Profile teams={teams} location={location} />
      } quickLoad={true}/>
    </div>
  );
};

const Profile = ({ teams, location }) => {
  const teamName = location.pathname.slice(7);

  console.log('teamName', teams[teamName]);

  return (
    <div>
      <div className="team-profile__team-banner">
        <img className='team-profile__team-banner-logo' src={`/assets/teams/logos/${teamName.replace(/ /g,"_")}.png`} onError={(e)=>{e.target.onerror = null; e.target.src="/assets/teams/avi/default.jpg"}} />
          <h1 className='team-profile__team-banner-text'>{teamName}</h1>
      </div>
      <TeamStats team={teams[teamName]} />
    </div>
  );
};

const COLORS = ['#4C61EE', '#8C43F7', '#4F3AD6', '#3A78D6', '#43BAF7'];

const TeamStats = ({ team }) => (
  <div>
    <div className="player-overview__player-stats">
      <TeamStatsTable { ...team } />
      {/* <div className="player-stats__charts">
        <hr className="hr-vert" />
        <WinratePieChart player={player} />
        <hr className="hr-vert" />
        <ChampionsPlayedPieChart player={player} />
        <hr className="hr-vert" />
        <teamstatsAreaChart stat="totalKills" player={player} color={COLORS[0]} />
        <hr className="hr-vert" />
        <teamstatsAreaChart stat="kda" player={player} color={COLORS[0]} />
        <hr className="hr-vert"/>
        <teamstatsAreaChart stat="dpm" player={player} color={COLORS[3]} />
        <hr className="hr-vert"/>
        <teamstatsAreaChart stat="totalAssists" player={player} color={COLORS[3]} />
        <hr className="hr-vert"/>
      </div> */}
    </div>
    {/* <h1 className="player-profile__match-history-title">Match History</h1> */}
    {/* <PlayerMatchHistory player={player} /> */}
  </div>
);

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    teams: state.teams
  };
};

export default connect(mapStateToProps)(TeamProfile);