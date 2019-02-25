import React from "react";

const PlayerStatsheet = () => (
  <div className="player-statsheet">
    <h1>Statistics</h1>
    <div className="statsheet-header">
      <p>Stat</p>
      <p>Average</p>
      <p>Placement</p>
    </div>
    <hr className="hr-alt"/>
    <StatsheetEntry statname="kills" avg="412" placement="43" alt="0"/>
    <StatsheetEntry statname="deaths" avg="52" placement="224" alt="1"/>
    <StatsheetEntry statname="assist" avg="52" placement="224" alt="0"/>
    <StatsheetEntry statname="KDA" avg="52" placement="224" alt="1"/>
    <StatsheetEntry statname="KP" avg="52" placement="224" alt="0"/>
    <StatsheetEntry statname="DTH%" avg="52" placement="224" alt="1"/>
    <StatsheetEntry statname="FB%" avg="52" placement="224" alt="0"/>
    <StatsheetEntry statname="GD10" avg="52" placement="224" alt="1"/>
    <StatsheetEntry statname="XPD10" avg="52" placement="224" alt="0"/>
    <StatsheetEntry statname="CSD10" avg="52" placement="224" alt="1"/>
    <StatsheetEntry statname="CSPM" avg="52" placement="224" alt="0"/>
    <StatsheetEntry statname="CS%P15" avg="52" placement="224" alt="1"/>
    <StatsheetEntry statname="DPM" avg="52" placement="224" alt="0"/>
    <StatsheetEntry statname="DMG%" avg="52" placement="224" alt="1"/>
    <StatsheetEntry statname="EGPM" avg="52" placement="224" alt="0"/>
    <StatsheetEntry statname="GOLD%" avg="52" placement="224" alt="1"/>
    <StatsheetEntry statname="WPM" avg="52" placement="224" alt="0"/>
    <StatsheetEntry statname="WCPM" avg="52" placement="224" alt="1"/>
  </div>
);

const StatsheetEntry = (props) => (
  <div className={props.alt == "1" ? "statsheet-entry" : "statsheet-entry statsheet-entry-alt"}>
  <a href="#">{props.statname.charAt(0).toUpperCase() + props.statname.slice(1)}</a>
    <p>{props.avg}</p>
    <p>{props.placement} <span className="placement-outof">/ 241</span></p>
  </div>
);

export default PlayerStatsheet;