import React from "react";

const header = [
  "#",
  "Name",
  "Kills",
  "Deaths",
  "Assist",
  "KDA",
  "KP",
  "DTH%",
  "FB%",
  "GD10",
  "XPD10",
  "CSD10",
  "CS%P15",
  "DPM",
  "DMG%",
  "EGPM",
  "GOLD%",
  "WPM",
  "WCPM"
];

const LeaderboardTable = () => {
  let stack = [];
  for(var i = 0; i < 10; i++)
    stack.push(<TableEntry data={header} />);

  return(
    <div className="leaderboard-dashboard__table">
      {stack}
    </div>
  );
};

const TableEntry = ({ data }) => {
  let stack = [];
  for(var i = 0; i < data.length; i++)
    stack.push(<p>{data[i]}</p>);

  return(
    <div className="leaderboard-dashboard__entry">
      {stack}
    </div>
  );
};


export default LeaderboardTable;