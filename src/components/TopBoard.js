import React from "react";
import DB from "../database";

const TopBoard = (props) => (
  <div className="topboard">
    <h1 className="stat-title">{props.stat.charAt(0).toUpperCase() + props.stat.slice(1)}</h1>
    <hr />
    <Player rank={1} stat={props.stat}/>
    <Player rank={2} stat={props.stat}/>
    <Player rank={3} stat={props.stat}/>
    <Player rank={4} stat={props.stat}/>
    <Player rank={5} stat={props.stat}/>
  </div>
);

const Player = (props) => (
  <div className="player">
    <div className="player-info">
      <p>{props.rank}.</p>
      <p className="player-name">{DB.players[props.rank - 1].name}</p>
      <p className="team-name">{DB.players[props.rank - 1].team}</p>
    </div>
    <p className={`stat-${props.rank}`}>{DB.players[props.rank - 1][props.stat]}</p>
  </div>
)

export default TopBoard;