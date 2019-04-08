import React from "react";
import LeaderboardTable from "./LeaderboardTable";
import Loading from "./Loading";

const LeaderboardDashboard = ({ match }) => {  
  return(
    <div className="leaderboard-dashboard">
      <Loading component={<LeaderboardTable dsort={match.params.dsort ? match.params.dsort : 'totalKills'} quickLoad={false} />} />
    </div>
  );
};

export default LeaderboardDashboard;