import { useState } from 'react';

import MainDisplay from './components/MainDisplay';
import ThemeContext from './context/theme-context';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MainDisplay />
    </ThemeContext.Provider>
  );
};

export default App;
