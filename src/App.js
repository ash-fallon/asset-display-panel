import { useState } from 'react';

import MainDisplay from './components/MainDisplay';
import AssetContext from './context/asset-context';
import ThemeContext from './context/theme-context';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [assetSymbol, setAssetSymbol] = useState('GOOG');

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <AssetContext.Provider value={{ assetSymbol, setAssetSymbol }}>
        <MainDisplay />
      </AssetContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
