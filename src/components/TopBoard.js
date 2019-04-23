import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { statToPretty } from "./PlayerProfile";

library.add(faShare)

const topBoard = ( { type, stat, data = {} } ) => {
  let topBoards = data[type + 'TopBoards'];
  data = data[type];

  return(
    <div className="player-overview__top-board">
      {/* title */}
      <div className="top-board__stat-title">
        <NavLink to={`/leaderboards/${stat}`}>
          {statToPretty[stat]}
        </NavLink>
      </div>

      {/* Top 5 List */}
      <div>
        {
          topBoards[stat][type].map((value, index) => 
            <Entry 
              key={index + 1}
              rank={index + 1} 
              type={type} 
              stat={stat} 
              name={topBoards[stat][type][index]} 
              data={data[topBoards[stat][type][index]]} 
            />
          )        
        }
      </div>
      
    </div>
  );
};

const Entry = ( { stat, type, rank, name, data } ) => (
  <div className="top-board__entry">
    <div className="top-board__entry-info">
      <p className="top-board__rank">{rank}.</p>

      <NavLink 
        className="top-board__entry-name"
        to={`/${type}/${name}`}
      >
        { name }
      </NavLink>
      
      {/* <p className="top-board__team-sfx">{player.team}</p> */}
    </div>
    <p className={`top-board__stat-${rank}`}>
      { data.stats[stat] }
    </p>
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    data: state,
    stat: props.stat
  }
};

export default connect(mapStateToProps)(topBoard);