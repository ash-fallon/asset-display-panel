import { useContext } from 'react';

import ThemeContext from './../context/theme-context';
import AssetContext from './../context/asset-context';

const SearchResults = ({ results }) => {
  const { darkMode } = useContext(ThemeContext);
  const { setAssetSymbol } = useContext(AssetContext);

  return (
    <ul
      className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll ${
        darkMode
          ? 'bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark'
          : 'bg-white border-neutral-200 custom-scrollbar'
      }`}
    >
      {results.map(item => (
        <li
          key={item.symbol}
          className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md ${
            darkMode ? 'hover:bg-indigo-600' : 'hover:bg-indigo-200'
          }`}
          onClick={() => setAssetSymbol(item.symbol)}
        >
          <span>{item.symbol}</span>
          <span>{item.description}</span>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
