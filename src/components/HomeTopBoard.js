import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

library.add(faShare)

const HomeTopBoard = ( { topBoards, isFetching, stat, players = {} } ) => (
  <div className="home-dashboard__top-board">
    {/* title */}
    <div className="top-board__stat-title">
      <NavLink to={"/leaderboard/" + stat}>
        {stat.charAt(0).toUpperCase() + stat.slice(1)}
      </NavLink>
      <NavLink className="top-board__more-icon" to={"/leaderboard/" + stat}>
        <FontAwesomeIcon icon="share" />
      </NavLink>
    </div>
    
    {/* Linebreak */}
    <hr />

    {/* Top 5 List */}
    {(!isFetching) ? 
      <div>
        <Entry rank={1} stat={stat} playerName={topBoards[stat][0]} player={players[topBoards[stat][0]]} />
        <Entry rank={2} stat={stat} playerName={topBoards[stat][1]} player={players[topBoards[stat][1]]} />
        <Entry rank={3} stat={stat} playerName={topBoards[stat][2]} player={players[topBoards[stat][2]]} />
        <Entry rank={4} stat={stat} playerName={topBoards[stat][3]} player={players[topBoards[stat][3]]} />
        <Entry rank={5} stat={stat} playerName={topBoards[stat][4]} player={players[topBoards[stat][4]]} />
      </div>
      : console.log("fetching...")
    };
    
  </div>
);

const Entry = ( { stat, rank, playerName, player } ) => (
  <div className="top-board__entry">
    <div className="top-board__entry-info">
      <p>{rank}.</p>

      <NavLink 
        className="top-board__entry-name"
        to={`/player/${playerName}`}
      >
        { playerName }
      </NavLink>
      
      <p className="top-board__team-sfx">{player.team}</p>
    </div>
    <p className={`top-board__stat-${rank}`}>
      { player[stat] }
    </p>
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    players: state.players.data,
    topBoards: state.topBoards.data,
    isFetching: state.topBoards.isFetching,
    stat: props.stat
  }
};

export default connect(mapStateToProps)(HomeTopBoard);