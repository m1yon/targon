import React from "react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Label
} from 'recharts';
import moment from 'moment';
import { statToPretty } from './PlayerDashboard';

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

export const ChampionsPlayedPieChart = ({ player }) => {
  const temp = {};
  player.graphs.championsPlayedPieChart.championsPlayed.forEach((champ) => {
    if(!temp.hasOwnProperty(champ)) {
      temp[champ] = 1;
    } else {
      temp[champ] = temp[champ] + 1;
    }
  });

  console.log('temp', temp);
  let data = [];
  for(let i in temp) {
    if(temp[i] != 0)
      data.push({ 'name': i, 'value': temp[i] });
  }

  const COLORS = ['#4C61EE', '#8C43F7', '#FA95CA', '#43FAB6', '#3A78D6', '#43BAF7', '#FA52D5', '#FC7C62', '#4F3AD6', '#FAC552', '#D94862', '#8AFFFF'];

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

export const PlayerStatsAreaChart = ({ color, player, stat }) => {
  let data = [];

  player.graphs.statHistoryGraphs[stat].date.forEach((obj, index) => {
    data.unshift({ 
      name: moment(player.graphs.statHistoryGraphs[stat].date[index]).format('MM/DD'), 
      value: player.graphs.statHistoryGraphs[stat].stat[index], 
      avgValue: player.graphs.statHistoryGraphs[stat].stat[0], 
    });
  });

  return (
    <div>
      <h1>{statToPretty[stat]} Per Match</h1>
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
          <Area isAnimationActive={false} type="monotone" dataKey="value" strokeWidth={0} fill={color} />
          <Area isAnimationActive={false} type="monotone" dataKey="avgValue" strokeWidth={0} fill="rgba(255, 255, 255, .1)" />
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