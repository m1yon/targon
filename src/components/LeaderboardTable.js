import React from "react";
import ReactTable from "react-table";
import { ReactTableDefaults } from "react-table";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "react-table/react-table.css";
import numeral from 'numeral';

const columns = [{
  Header: <p className='table--header'>Name</p>,
  Cell: (props) => <NavLink to={`/player/${props.value}`} className="cell--name">{props.value}</NavLink>,
  accessor: "_id",
  minWidth: 150,
}, {
  Header: <p className='table--header'>K</p>,
  accessor: "totalKills",
  minWidth: 35,
}, {
  Header: <p className='table--header'>D</p>,
  accessor: "totalDeaths",
  minWidth: 35
}, {
  Header: <p className='table--header'>A</p>,
  accessor: "totalAssists",
  minWidth: 35
}, {
  Header: <p className='table--header'>KDA</p>,
  accessor: "kda",
  minWidth: 65,
}, {
  Header: <p className='table--header'>KP</p>,
  accessor: "kp",
  minWidth: 65,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}, {
  Header: <p className='table--header'>DTH%</p>,
  accessor: "dthPercentage",
  minWidth: 65,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}, {
  Header: <p className='table--header'>FB%</p>,
  accessor: "fbPercentage",
  minWidth: 65,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}, {
  Header: <p className='table--header'>GD10</p>,
  accessor: "gd10",
  minWidth: 65,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}, {
  Header: <p className='table--header'>XPD10</p>,
  accessor: "xpd10",
  minWidth: 65,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}, {
  Header: <p className='table--header'>CSD10</p>,
  accessor: "csd10",
  minWidth: 65,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}, {
  Header: <p className='table--header'>CSPM</p>,
  accessor: "cspm",
  minWidth: 65,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}, {
  Header: <p className='table--header'>CS%P15</p>,
  accessor: "csPercent15",
  minWidth: 70,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}, {
  Header: <p className='table--header'>DPM</p>,
  accessor: "dpm",
  minWidth: 65,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}, {
  Header: <p className='table--header'>DMG%</p>,
  accessor: "dmgPercentage",
  minWidth: 65,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}, {
  Header: <p className='table--header'>EGPM</p>,
  accessor: "earnedGoldPerMinute",
  minWidth: 65,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}, {
  Header: <p className='table--header'>GOLD%</p>,
  accessor: "goldPercentage",
  minWidth: 65,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}, {
  Header: <p className='table--header'>WPM</p>,
  accessor: "wpm",
  minWidth: 65,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}, {
  Header: <p className='table--header'>WCPM</p>,
  accessor: "wcpm",
  minWidth: 65,
  sortMethod: (a, b, desc) => {
    a = numeral(a).value();
    b = numeral(b).value();
    if(a > b)
      return 1;
    else if (a < b)
      return -1;
    return 0;
  } 
}
];

const LeaderboardTable = ({ dsort, players }) => {
  return (
    <div id='leaderboard-table' className="React-Table__container">
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