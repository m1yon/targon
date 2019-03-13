import React from "react";
import ReactTable from "react-table";
import { ReactTableDefaults } from "react-table";
import { connect } from "react-redux";
import "react-table/react-table.css";

const columns = [{
  Header: "Name",
  accessor: "_id",
}, {
  Header: "Kills",
  accessor: "totalKills"
}, {
  Header: "Deaths",
  accessor: "totalDeaths"
}, {
  Header: "Assists",
  accessor: "totalAssists"
}, {
  Header: "KDA",
  accessor: "kda"
}, {
  Header: "KP",
  accessor: "kp"
}, {
  Header: "DTH%",
  accessor: "dthPercentage"
}, {
  Header: "FB%",
  accessor: "fbPercentage"
}, {
  Header: "GD10",
  accessor: "gd10"
}, {
  Header: "XPD10",
  accessor: "xpd10"
}, {
  Header: "CSD10",
  accessor: "csd10"
}, {
  Header: "CSPM",
  accessor: "cspm"
}, {
  Header: "CS%P15",
  accessor: "csPercent15"
}, {
  Header: "DPM",
  accessor: "dpm"
}, {
  Header: "DMG%",
  accessor: "dmgPercentage"
}, {
  Header: "EGPM",
  accessor: "earnedGoldPerMinute"
}, {
  Header: "GOLD%",
  accessor: "goldPercentage"
}, {
  Header: "WPM",
  accessor: "wpm"
}, {
  Header: "WCPM",
  accessor: "wcpm"
}
];

const LeaderboardTable = ({ isFetching, players }) => {
  return(
    <div>
      {!isFetching && <ReactTable
        data={Object.values(players)}
        columns={columns}
        column={{
          ...ReactTableDefaults.column,
          minWidth: 25
        }}
      />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.players.isFetching,
    players: state.players.data
  };
};

export default connect(mapStateToProps)(LeaderboardTable);