import React from "react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Label
} from 'recharts';

export const WinratePieChart = () => {
  const data = [
    { name: "Win%", value: 80},
    { name: "Lose%", value: 20},
  ];

  return (
    <div>
      <h1>Winrate</h1>
      <ResponsiveContainer height="75%" isAnimationActive={false}>
        <PieChart width={600} height={500}>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={false}
          >

            // Win slice
            <Cell 
              key={`win-cell`} 
              fill={'#4c61ee'}
              strokeWidth={0} 
            />

            <Label className='winrate-pie-chart__label' value={`${data[0].value}%`} offset={0} position="center" />

            // Lose slice
            <Cell 
              key={`loss-cell`} 
              fill={'#4d5272'}
              strokeWidth={0} 
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ChampionsPlayedPieChart = () => {
  const data = [
    { name: "Morgana", value: 4},
    { name: "Kayle", value: 3},
    { name: "Tristana", value: 2},
    { name: "Dr. Mundo", value: 1},
    { name: "Teemo", value: 1},
  ];

  const COLORS = ['#4C61EE', '#8C43F7', '#4F3AD6', '#3A78D6', '#43BAF7'];

  return (
    <div>
      <h1>Champions Played</h1>
      <ResponsiveContainer height="75%" isAnimationActive={false}>
        <PieChart width={600} height={600}>
          <Pie
            data={data}
            labelLine={false}
            stroke={'#1c1e2e'}
            outerRadius={90}
            strokeWidth={0}
            dataKey='value'
            isAnimationActive={false}
          >
            {
              data.map((obj, index) => (
                <Cell 
                  key={`win-cell${index}`} 
                  fill={COLORS[index]}
                />
              ))
            } 
          </Pie>
          <Tooltip content={ChampionsPlayedTooltip} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const ChampionsPlayedTooltip = ({ active, payload, label }) => { 
  if (active) {
    return (
      <div className="champions-played-chart__tooltip">
        <p>{payload[0].name}: {payload[0].value}</p>
      </div>);
  }
};

export const PlayerStatsAreaChart = ({title, color}) => {
  const data = [
    { name: '3/25', kills: 2, avgkills: 5 },
    { name: '3/25', kills: 3, avgkills: 5 },
    { name: '3/25', kills: 2, avgkills: 5 },
    { name: '3/26', kills: 6, avgkills: 5 },
    { name: '3/26', kills: 12, avgkills: 5 },
  ]

  return (
    <div>
      <h1>{title}</h1>
      <ResponsiveContainer height="70%" className="player-profile__area-chart" >
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10, right: 60, left: 0, bottom: 0,
          }}
        >
          <XAxis axisLine={false} tickLine={false} dataKey="name" tick={<XAxisLabel />} />
          <YAxis axisLine={false} tickLine={false} padding={{ bottom: 0 }} tick={<YAxisLabel />} />

          <Tooltip content={CustomToolTip} />
          <Area isAnimationActive={false} type="monotone" dataKey="kills" strokeWidth={0} fill={color} />
          <Area isAnimationActive={false} type="monotone" dataKey="avgkills" strokeWidth={0} fill="rgba(255, 255, 255, .1)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const XAxisLabel = ({x, y, stroke, payload}) => {
  return(
    <g transform={`translate(${x},${y})`}>
      <text x={15} y={0} dy={12} textAnchor="end" className='pie-chart-yaxis__label'>
        {payload.value}
      </text>
    </g>
  );
};

const YAxisLabel = ({x, y, stroke, payload}) => {
  return(
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={-15} dy={15} textAnchor="end" className='pie-chart-yaxis__label'>
        {payload.value}
      </text>
    </g>
  );
};

const CustomToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="player-profile__tooltip">
        <p className='player-profile__tooltip-title'>{label}</p>
        <p>Value: {payload[0].value}</p>
        <p>Average: {payload[1].value}</p>
      </div>);
  }
};