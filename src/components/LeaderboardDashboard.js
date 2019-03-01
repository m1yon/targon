import React from "react";
import LeaderboardTable from "./LeaderboardTable";
import Database from "../database";

const LeaderboardDashboard = (props) => {
  const statname = props.location.pathname[13].toUpperCase() + props.location.pathname.slice(14);
  
  return(<div className="leaderboard-dashboard">
    <h1>{statname} Leaderboard</h1>
    <LeaderboardTable data={Database["players"]} />
  </div>);
};

export default LeaderboardDashboard;