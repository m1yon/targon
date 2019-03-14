import React from "react";
import { connect } from "react-redux"
import LeaderboardTable from "./LeaderboardTable";

const LeaderboardDashboard = ({ isFetching, match }) => {
  return(
    <div className="leaderboard-dashboard">
      {!isFetching ?
        <LeaderboardTable dsort={match.params.dsort ? match.params.dsort : 'totalKills'} />
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
};

export default connect(mapStateToProps)(LeaderboardDashboard);