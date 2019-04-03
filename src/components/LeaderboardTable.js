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
  width: 150,
}, {
  Header: <p className='table--header'>K</p>,
  accessor: "totalKills",
  width: 35
}, {
  Header: <p className='table--header'>D</p>,
  accessor: "totalDeaths",
  width: 35
}, {
  Header: <p className='table--header'>A</p>,
  accessor: "totalAssists",
  width: 35
}, {
  Header: <p className='table--header'>KDA</p>,
  accessor: "kda",
  width: 65,
}, {
  Header: <p className='table--header'>KP</p>,
  accessor: "kp",
  width: 65,
}, {
  Header: <p className='table--header'>DTH%</p>,
  accessor: "dthPercentage",
  width: 65,
}, {
  Header: <p className='table--header'>FB%</p>,
  accessor: "fbPercentage",
  width: 65,
}, {
  Header: <p className='table--header'>GD10</p>,
  accessor: "gd10",
  width: 65,
}, {
  Header: <p className='table--header'>XPD10</p>,
  accessor: "xpd10",
  width: 65,
}, {
  Header: <p className='table--header'>CSD10</p>,
  accessor: "csd10",
  width: 65,
}, {
  Header: <p className='table--header'>CSPM</p>,
  accessor: "cspm",
  width: 65,
}, {
  Header: <p className='table--header'>CS%P15</p>,
  accessor: "csPercent15",
  width: 65,
}, {
  Header: <p className='table--header'>DPM</p>,
  accessor: "dpm",
  width: 65,
}, {
  Header: <p className='table--header'>DMG%</p>,
  accessor: "dmgPercentage",
  width: 65,
}, {
  Header: <p className='table--header'>EGPM</p>,
  accessor: "earnedGoldPerMinute",
  width: 65,
}, {
  Header: <p className='table--header'>GOLD%</p>,
  accessor: "goldPercentage",
  width: 65,
}, {
  Header: <p className='table--header'>WPM</p>,
  accessor: "wpm",
  width: 65,
}, {
  Header: <p className='table--header'>WCPM</p>,
  accessor: "wcpm",
  width: 65,
}
];

const LeaderboardTable = ({ dsort, players }) => {
  return (
    <div className="React-Table__container">
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    players: Object.values(state.players.data)
  };
};

export default connect(mapStateToProps)(LeaderboardTable);