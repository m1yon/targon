import React from "react";
import DB from "../database";

const TopBoard = (props) => (
  <div className="TopBoard">
    <h1>{props.stat}</h1>
    <Player rank={1} stat={props.stat}/>
    <Player rank={2} stat={props.stat}/>
    <Player rank={3} stat={props.stat}/>
    <Player rank={4} stat={props.stat}/>
    <Player rank={5} stat={props.stat}/>
  </div>
);

const Player = (props) => (
  <div>
    <p>{DB.players[props.rank - 1].name}</p>
    <p>{DB.players[props.rank - 1][props.stat]}</p>
  </div>
)

export default TopBoard;