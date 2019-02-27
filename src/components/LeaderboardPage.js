import React from "react";
import StatHeader from "../components/StatHeader";
import Leaderboard from "../components/Leaderboard";


const LeaderboardPage = (props) => {
  const stat = props.location.pathname.slice(7);
  return( 
    <div className="container">
      <StatHeader name={`${stat.charAt(0).toUpperCase() + stat.slice(1)} Leaderboard`}/>
      <Leaderboard />
    </div>
  );
};

export default LeaderboardPage;