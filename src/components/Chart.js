import { useState } from 'react';
import { AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

import { dummyHistoricalData } from '../constants/dummyData';
import { convertUnixToDate } from '../helpers/date-helper';
import Card from './Card';

const Chart = () => {
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
      <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
          <Area
            type='monotone'
            dataKey='value'
            stroke='#312e81'
            fillOpacity={1}
            strokeWidth={0.5}
          />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
