import React from "react";
import DB from "../database";
import { NavLink } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleRight)

const TopBoard = (props) => (
  <div className="topboard">
    {/* title */}
    <div className="stat-title">
      <a href="#">
        {props.stat.charAt(0).toUpperCase() + props.stat.slice(1)}
      </a>
      <a href="#">
        <FontAwesomeIcon icon="angle-right" />
      </a>
    </div>
    
    {/* Linebreak */}
    <hr />

    {/* Top 5 List */}
    <Entry rank={1} stat={props.stat}/>
    <Entry rank={2} stat={props.stat}/>
    <Entry rank={3} stat={props.stat}/>
    <Entry rank={4} stat={props.stat}/>
    <Entry rank={5} stat={props.stat}/>
  </div>
);

const Entry = (props) => (
  <div className="entry">
    <div className="entry-info">
      <p>{props.rank}.</p>

      <NavLink 
        className="entry-name" 
        to={`/player/${DB.players[props.rank - 1].name}`}
      >
        {DB.players[props.rank - 1].name}
      </NavLink>
      
      <p className="team-sfx">{DB.players[props.rank - 1].team}</p>
    </div>
    <p className={`stat-${props.rank}`}>{DB.players[props.rank - 1][props.stat]}</p>
  </div>
)

export default TopBoard;