import React from "react";
import DB from "../database";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

library.add(faShare)

const HomeTopBoard = ( { isFetching, stat, players = {} } ) => (
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
        <Entry rank={1} player={players[0]} />
        <Entry rank={2} player={players[1]} />
        <Entry rank={3} player={players[2]} />
        <Entry rank={4} player={players[3]} />
        <Entry rank={5} player={players[4]} />
      </div>
      : console.log("fetching...")
    };
    
  </div>
);

const Entry = ( { rank, player } ) => (
  <div className="top-board__entry">
    <div className="top-board__entry-info">
      <p>{rank}.</p>

      <NavLink 
        className="top-board__entry-name" 
        to={`/player/${player["_id"]}`}
      >
        { player["_id"] }
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
    players: state.topboards.kills,
    isFetching: state.isFetching,
    stat: props.stat
  }
};

export default connect(mapStateToProps)(HomeTopBoard);