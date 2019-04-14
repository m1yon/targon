import React from "react";
import Loading from './Loading';

const TeamDashboard = (props) => {
  return (
    <div className="player-overview">
      <Loading component={
        <TeamProfile />
      } quickLoad={true}/>
    </div>
  );
};

const TeamProfile = () => (
  <p>test</p>
);

export default TeamDashboard;