import { useState, useContext, useEffect } from 'react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import {
  convertUnixToDate,
  convertDateToUnix,
  createDate,
} from '../helpers/date-helper';
import { chartConfig } from './../constants/chartConfig';
import { fetchHistoricalData } from '../api/asset-api';

import ThemeContext from './../context/theme-context';
import AssetContext from '../context/asset-context';

import Card from './Card';
import ChartFilter from './ChartFilter';

const Chart = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('1Y');

  const { darkMode } = useContext(ThemeContext);
  const { assetSymbol } = useContext(AssetContext);

  const formatData = data => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixToDate(data.t[index]),
      };
    });
  };

  useEffect(() => {
    const getDateRange = () => {
      // finds timestamps
      const { days, weeks, months, years } = chartConfig[filter];

      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startUnix = convertDateToUnix(startDate);
      const endUnix = convertDateToUnix(endDate);

      return {
        startUnix,
        endUnix,
      };
    };

    const updateChartData = async () => {
      try {
        const { startUnix, endUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;

        const result = await fetchHistoricalData(
          assetSymbol,
          resolution,
          startUnix,
          endUnix,
        );
        console.log(result);
        setData(formatData(result));
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();
  }, [assetSymbol, filter]);

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
        <AreaChart data={data}>
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
