import React from "react";

const PlayerProfile = (props) => {
  const playerName = props.location.pathname.slice(8);

  return(
    <div className="player-profile-container">
      <div className="team-banner">
      <div className="profile-picture" />
        <div className="player-info-banner">
          <h1>{playerName}</h1>
          <h2>TYLER STEINKAMP</h2>

          <p>ADC | Cloud9</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;