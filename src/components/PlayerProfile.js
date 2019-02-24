import React from "react";

const PlayerProfile = (props) => {
  const playerName = props.location.pathname.slice(8);

  return(
    <div className="player-profile-container">
      <div className="team-banner">
        <div className="no-overflow">
          <img src="/img/cloud9.jpg" className="team-bg" />
        </div>

        <div className="overflow">
          <img src="/img/tyler1.jpg" className="profile-picture" />
          <div className="player-info-banner">
            <h1>{playerName}</h1>
            <h2>TYLER STEINKAMP</h2>
            <p>ADC - Cloud9</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlayerProfile;