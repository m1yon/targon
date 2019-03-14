import React from "react";
import { connect } from "react-redux"
import LeaderboardTable from "./LeaderboardTable";

const LeaderboardDashboard = ({ isFetching, match }) => {
  return(
    <div className="leaderboard-dashboard">
      <h1>Leaderboard</h1>
      {!isFetching ?
        <LeaderboardTable dsort={match.params.dsort} />
      :
        <p>loading...</p>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    isFetching: state.players.isFetching
  })
}

export default connect(mapStateToProps)(LeaderboardDashboard);