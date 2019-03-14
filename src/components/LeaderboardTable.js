import React from "react";
import ReactTable from "react-table";
import { ReactTableDefaults } from "react-table";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "react-table/react-table.css";

const columns = [{
  Header: <p className='table--header'>Name</p>,
  Cell: (props) => <NavLink to={`/player/${props.value}`} className="cell--name">{props.value}</NavLink>,
  accessor: "_id",
  width: 150
}, {
  Header: <p className='table--header'>K</p>,
  accessor: "totalKills",
  width: 30
}, {
  Header: <p className='table--header'>D</p>,
  accessor: "totalDeaths",
  width: 30
}, {
  Header: <p className='table--header'>A</p>,
  accessor: "totalAssists",
  width: 30
}, {
  Header: <p className='table--header'>KDA</p>,
  accessor: "kda"
}, {
  Header: <p className='table--header'>KP</p>,
  accessor: "kp"
}, {
  Header: <p className='table--header'>DTH%</p>,
  accessor: "dthPercentage"
}, {
  Header: <p className='table--header'>FB%</p>,
  accessor: "fbPercentage"
}, {
  Header: <p className='table--header'>GD10</p>,
  accessor: "gd10"
}, {
  Header: <p className='table--header'>XPD10</p>,
  accessor: "xpd10"
}, {
  Header: <p className='table--header'>CSD10</p>,
  accessor: "csd10"
}, {
  Header: <p className='table--header'>CSPM</p>,
  accessor: "cspm"
}, {
  Header: <p className='table--header'>CS%P15</p>,
  accessor: "csPercent15"
}, {
  Header: <p className='table--header'>DPM</p>,
  accessor: "dpm"
}, {
  Header: <p className='table--header'>DMG%</p>,
  accessor: "dmgPercentage"
}, {
  Header: <p className='table--header'>EGPM</p>,
  accessor: "earnedGoldPerMinute"
}, {
  Header: <p className='table--header'>GOLD%</p>,
  accessor: "goldPercentage"
}, {
  Header: <p className='table--header'>WPM</p>,
  accessor: "wpm"
}, {
  Header: <p className='table--header'>WCPM</p>,
  accessor: "wcpm"
}
];

const LeaderboardTable = ({ dsort, players }) => {
  return(
    <ReactTable
      data={players}
      columns={columns}
      className="-striped"
      column={{
        ...ReactTableDefaults.column,
        minWidth: 25,
        Cell: (props) => <p className="table--cell">{props.value}</p>,
      }}
      defaultPageSize={players.length}
      defaultSorted={[{
        id: dsort,
        desc: true
      }]}
      defaultSortDesc={true}
      showPagination={false}
      resizable={false}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    players: Object.values(state.players.data)
  };
};

export default connect(mapStateToProps)(LeaderboardTable);