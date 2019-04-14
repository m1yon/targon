import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { statToPretty } from "./PlayerProfile";

library.add(faShare)

const topBoard = ( { topBoards, stat, data = {} } ) => (
  <div className="player-overview__top-board">
    {/* title */}
    <div className="top-board__stat-title">
      <NavLink to={"/leaderboards/" + stat}>
        {statToPretty[stat]}
      </NavLink>
    </div>

    {/* Top 5 List */}
    <div>
      <Entry rank={1} stat={stat} playerName={topBoards[stat][0]} player={data[topBoards[stat][0]]} />
      <Entry rank={2} stat={stat} playerName={topBoards[stat][1]} player={data[topBoards[stat][1]]} />
      <Entry rank={3} stat={stat} playerName={topBoards[stat][2]} player={data[topBoards[stat][2]]} />
      <Entry rank={4} stat={stat} playerName={topBoards[stat][3]} player={data[topBoards[stat][3]]} />
      <Entry rank={5} stat={stat} playerName={topBoards[stat][4]} player={data[topBoards[stat][4]]} />
    </div>
  </div>
);

const Entry = ( { stat, rank, playerName, player } ) => (
  <div className="top-board__entry">
    <div className="top-board__entry-info">
      <p className="top-board__rank">{rank}.</p>

      <NavLink 
        className="top-board__entry-name"
        to={`/players/${playerName}`}
      >
        { playerName }
      </NavLink>
      
      {/* <p className="top-board__team-sfx">{player.team}</p> */}
    </div>
    <p className={`top-board__stat-${rank}`}>
      { player[stat] }
    </p>
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    data: state.players.data,
    topBoards: state.topBoards.data,
    stat: props.stat
  }
};

export default connect(mapStateToProps)(topBoard);