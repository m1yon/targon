import React from "react";
import LeaderboardTable from "./LeaderboardTable";

const LeaderboardDashboard = ({ match }) => {
  return(<div className="leaderboard-dashboard">
    <h1>Leaderboard</h1>
    <LeaderboardTable dsort={match.params.dsort} />
  </div>);
};

export default LeaderboardDashboard;