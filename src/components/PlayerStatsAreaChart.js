import React from "react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  {name: 'Game 1', kills: 2, avgkills: 5},
  {name: 'Game 2', kills: 3, avgkills: 5},
  {name: 'Game 3', kills: 2, avgkills: 5},
  {name: 'Game 4', kills: 6, avgkills: 5},
  {name: 'Game 5', kills: 12, avgkills: 5},
]

const PlayerStatsAreaChart = () => (
  <div>
    <h1>Kills vs Deaths</h1>
      <ResponsiveContainer height="70%" className="player-stats__area-chart">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10, right: 60, left: 0, bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={CustomToolTip} />
          <Area type="monotone" dataKey="kills" stroke="#4c61ee" fill="#4c61ee" />
          <Area type="monotone" dataKey="avgkills" stroke="#2b2d42" fill="#2b2d42" />
        </AreaChart>
    </ResponsiveContainer>
  </div>
);

const CustomToolTip = ({ active, payload, label}) => {
  if(active) {
    return(
      <div className="player-stats__tooltip">
        <p>First Value {payload[0].value}</p>
        <p>Second Value {payload[1].value}</p>
      </div>);
  }
};

export default PlayerStatsAreaChart;