import { useContext, useEffect, useState } from 'react';

import Header from './Header';
import Details from './Details';
import Overview from './Overview';
import Chart from './Chart';

import ThemeContext from './../context/theme-context';
import AssetContext from './../context/asset-context';

import { fetchAssetDetails, fetchQuote } from '../api/asset-api';

const MainDisplay = () => {
  const { darkMode } = useContext(ThemeContext);
  const { assetSymbol } = useContext(AssetContext);

  const [assetDetails, setAssetDetails] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateAssetDetails = async () => {
      try {
        const result = await fetchAssetDetails(assetSymbol);
        setAssetDetails(result);
      } catch (error) {
        setAssetDetails({});
        console.log(error);
      }
    };

    const updateAssetOverview = async () => {
      try {
        const result = await fetchQuote(assetSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateAssetDetails();
    updateAssetOverview();
  }, [assetSymbol]); // every time the asset symbol changes, like when its clicked in the drop down, the data will update accordingly

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? 'bg-gray-900 text-gray-300' : 'bg-neutral-100'
      }`}
    >
      <div className='col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center'>
        <Header name={assetDetails.name} />
      </div>
      <div className='md:col-span-2 row-span-4'>
        <Chart />
      </div>
      <div>
        <Overview
          symbol={assetSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={assetDetails.currency}
        ></Overview>
      </div>
      <div className='row-span-2 xl:row-span-3'>
        <Details details={assetDetails} />
      </div>
    </div>
  );
};

export default MainDisplay;
