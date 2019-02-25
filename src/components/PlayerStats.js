import React from "react";
import PlayerStatsheet from "./PlayerStatsheet";
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


const PlayerStats = () => (
  <div className="player-stats">
    <PlayerStatsheet />
      
    <ResponsiveContainer height="50%">
      <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="kills" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="kills" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
  </div>

  
);

export default PlayerStats;