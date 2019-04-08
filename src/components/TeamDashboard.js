import React from "react";

const TeamDashboard = (props) => {
  const teamName = props.location.pathname.slice(6);

  return(
    <div className="team-dashboard">
      <div className="team-banner">
        <div className="team-banner--no-overflow">
          <img src="/img/cloud9.jpg" className="team-banner__bg" />
        </div>

        <div className="team-banner--overflow">
          <div className="team-banner__player-info">
            <h1>{teamName}</h1>
            <h2>PLACEHOLDER</h2>
            <p>PLACEHOLDER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDashboard;