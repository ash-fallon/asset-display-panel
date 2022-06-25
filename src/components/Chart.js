import { useState } from 'react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { dummyHistoricalData } from '../constants/dummyData';
import { convertUnixToDate } from '../helpers/date-helper';
import { chartConfig } from './../constants/chartConfig';

import { useContext } from 'react';

import ThemeContext from './../context/theme-context';

import Card from './Card';
import ChartFilter from './ChartFilter';

const Chart = () => {
  const { darkMode } = useContext(ThemeContext);

  const [data, setData] = useState(dummyHistoricalData);
  const [filter, setFilter] = useState('1W');

  const formatData = () => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixToDate(data.t[index]),
      };
    });
  };

  return (
    <Card>
      <ul className='flex absolute top-2 right-2 z-40'>
        {Object.keys(chartConfig).map(item => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => setFilter(item)}
            ></ChartFilter>
          </li>
        ))}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
          <defs>
            <linearGradient id='chartColour' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='5%'
                stopColor={darkMode ? '#312e81' : 'rgb(199 210 254)'}
                stopOpacity={0.8}
              />
              <stop
                offset='95%'
                stopColor={darkMode ? '#312e81' : 'rgb(199 210 254)'}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type='monotone'
            dataKey='value'
            stroke='#312e81'
            fillOpacity={1}
            strokeWidth={0.5}
            fill='url(#chartColour)'
          />
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: '#111827' } : null}
            itemStyle={darkMode ? { color: '#818cf8' } : null}
          />
          <XAxis dataKey={'date'} />
          <YAxis domain={['dataMin', 'dataMax']} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
