import React from "react";
import { NavLink } from "react-router-dom";

const header = [
  "Name",
  "Team",
  "Kills",
  "Wins"
];

const LeaderboardTable = ({ data }) => {
  const entries = data.map((obj, index) => <TableEntry key={obj["name"]} data={obj} number={index + 1}/>);

  return(
    <div className="leaderboard-dashboard__table">
      <TableHeader />
      {entries}
    </div>
  );
};

const TableHeader = () => {
  const entries = [<p key={"#"}>#</p>];
  for(let i = 0; i < 4; i++) {
    entries.push(<p key={i}>{header[i].toUpperCase()}</p>);
  }

  return(
    <div className="leaderboard-dashboard__entry">
      {entries}
    </div>
  );
}

const TableEntry = ({ data, number }) => {
  const entries = [""];
  entries.push(<p key={"number" + number}>{number}.</p>)
  entries.push(
    <NavLink 
      key={0} 
      to={"/player/" + data[header[0].toLowerCase()]}
    >
      {data[header[0].toLowerCase()]}
    </NavLink>
  );

  for(let i = 1; i < 4; i++) {
    entries.push(<p key={i}>{data[header[i].toLowerCase()]}</p>);
  }

  if(number % 2 == 0) {
    return(
      <div className="leaderboard-dashboard__entry">
        {entries}
      </div>
    );
  } else {
    return(
      <div className="leaderboard-dashboard__entry leaderboard-dashboard__entry-alt">
        {entries}
      </div>
    );
  }
};


export default LeaderboardTable;