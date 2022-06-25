import { useContext } from 'react';
import { MoonIcon } from '@heroicons/react/solid';

import ThemeContext from './../context/theme-context';

const DarkModeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className={`rounded-lg border border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg ${
        darkMode ? 'shadow-gray-100' : null
      }`}
      onClick={toggleDarkMode}
    >
      <MoonIcon
        className={`h-8 w-8 cursor-pointer stroke-1  ${
          darkMode
            ? 'fill-yellow-400 stroke-yellow-400'
            : 'fill-transparent stroke-neutral-400'
        }`}
      />
    </button>
  );
};

export default DarkModeIcon;
