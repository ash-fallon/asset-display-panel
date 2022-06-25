import { useState } from 'react';

import MainDisplay from './components/MainDisplay';
import AssetContext from './context/asset-context';
import ThemeContext from './context/theme-context';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [assetSymbol, setAssetSymbol] = useState('FB');

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <AssetContext value={{ assetSymbol, setAssetSymbol }}>
        <MainDisplay />
      </AssetContext>
    </ThemeContext.Provider>
  );
};

export default App;
