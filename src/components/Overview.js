import Card from './Card';

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card>
      <span className='absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl'>
        {symbol}
      </span>
    </Card>
  );
};

export default Overview;
