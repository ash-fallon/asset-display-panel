import Card from './Card';

const Details = ({ details }) => {
  const detailsList = {
    name: 'Name',
    country: 'Country',
    currency: 'Currency',
    exchange: 'Exchange',
    ipo: 'IPO Date',
    marketCaptialization: 'Market Capitalization',
    finnhubIndustry: 'Industry',
  };

  const convertMillionToBillion = number => (number / 1000).toFixed(2); // Finnhub returns millions, billions makes the data prettier to display.

  return (
    <Card>
      <ul className='w-full h-full flex flex-col justify-between divide-y'>
        {Object.keys(detailsList).map(item => (
          <li key={item} className='flex-1 flex justify-between items-center'>
            <span>{detailsList[item]}</span>
            <span>
              {item === 'marketCapitalization'
                ? `${convertMillionToBillion(details[item])}B`
                : details[item]}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Details;
