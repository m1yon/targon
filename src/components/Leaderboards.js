import React from "react";
import ReactTable from "react-table";
import { ReactTableDefaults } from "react-table";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "react-table/react-table.css";
import numeral from 'numeral';
import Loading from './Loading';

const Leaderboards = ({ match, players }) => {  
  return(
    <div className="leaderboard-dashboard">
      <Loading component={<LeaderboardTable players={players} dsort={match.params.dsort ? match.params.dsort : 'totalKills'} quickLoad={false} />} />
    </div>
  );
};

const columns = [{
  Header: <p className='table--header'>Name</p>,
  Cell: (props) => <NavLink to={`/players/${props.value}`} className="cell--name">{props.value}</NavLink>,
  accessor: "_id",
  minWidth: 150,
}, {
  Header: <p className='table--header'>K</p>,
  accessor: "stats.totalKills",
  minWidth: 35,
}, {
  Header: <p className='table--header'>D</p>,
  accessor: "stats.totalDeaths",
  minWidth: 35
}, {
  Header: <p className='table--header'>A</p>,
  accessor: "stats.totalAssists",
  minWidth: 35
}, {
  Header: <p className='table--header'>KDA</p>,
  accessor: "stats.kda",
  minWidth: 65,
}, {
  Header: <p className='table--header'>KP</p>,
  accessor: "stats.kp",
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
  accessor: "stats.dthPercentage",
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
  accessor: "stats.fbPercentage",
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
  accessor: "stats.gd10",
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
  accessor: "stats.xpd10",
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
  accessor: "stats.csd10",
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
  accessor: "stats.cspm",
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
  accessor: "stats.csPercent15",
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
  accessor: "stats.dpm",
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
  accessor: "stats.dmgPercentage",
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
  accessor: "stats.earnedGoldPerMinute",
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
  accessor: "stats.goldPercentage",
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
  accessor: "stats.wpm",
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
  accessor: "stats.wcpm",
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
          id: `stats.${dsort}`,
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
    players: Object.values(state.players)
  };
};

export default connect(mapStateToProps)(Leaderboards);