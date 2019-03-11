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
        <Entry rank={1} playerName={topBoards["kills"][0]} player={players[topBoards["kills"][0]]} />
        <Entry rank={2} playerName={topBoards["kills"][1]} player={players[topBoards["kills"][1]]} />
        <Entry rank={3} playerName={topBoards["kills"][2]} player={players[topBoards["kills"][2]]} />
        <Entry rank={4} playerName={topBoards["kills"][3]} player={players[topBoards["kills"][3]]} />
        <Entry rank={5} playerName={topBoards["kills"][4]} player={players[topBoards["kills"][4]]} />
      </div>
      : console.log("fetching...")
    };
    
  </div>
);

const Entry = ( { rank, playerName, player } ) => (
  <div className="top-board__entry">
    <div className="top-board__entry-info">
      <p>{rank}.</p>

      <NavLink 
        className="top-board__entry-name" 
        to={`/player/${playerName}`}
      >
        { playerName }
      </NavLink>
      
      {/* <p className="top-board__team-sfx">{DB.players[props.rank - 1].team}</p> */}
    </div>
    <p className={`top-board__stat-${rank}`}>
      { player["totalKills"] }
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