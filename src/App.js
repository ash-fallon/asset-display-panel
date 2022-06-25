import { useState } from 'react';

import MainDisplay from './components/MainDisplay';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return <MainDisplay />;
};

export default App;
