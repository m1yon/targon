import React from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  {name: 'Game 1', kills: 2, avgkills: 5},
  {name: 'Game 2', kills: 3, avgkills: 5},
  {name: 'Game 3', kills: 2, avgkills: 5},
  {name: 'Game 4', kills: 6, avgkills: 5},
  {name: 'Game 5', kills: 12, avgkills: 5},
]

const BasicAreaChart = () => (
  <div>
    <h1>Kills vs Deaths</h1>
      <ResponsiveContainer height="70%" className="chart">
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
          <Area type="monotone" dataKey="kills" stroke="#3b95f7" fill="#3b95f7" />
          <Area type="monotone" dataKey="avgkills" stroke="#848484" fill="#848484" />
        </AreaChart>
    </ResponsiveContainer>
  </div>
);

const CustomToolTip = ({ active, payload, label}) => {
  if(active) {
    return(
      <div className="tooltip">
        <p>First Value {payload[0].value}</p>
        <p>Second Value {payload[1].value}</p>
      </div>);
  }
};

export default BasicAreaChart;