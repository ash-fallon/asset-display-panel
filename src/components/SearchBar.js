import { useState } from 'react';

import { dummySymbolLookupData } from '../constants/dummyData';

const SearchBar = () => {
  const [input, setInput] = useState(''); // Tracks search input
  const [bestMatches, setBestMatches] = useState(dummySymbolLookupData.result); // Tracks returned matches from search

  const clear = () => {
    setInput('');
    setBestMatches([]);
  };

  const bestMatchesHandler = () => {
    setBestMatches(dummySymbolLookupData.result); // Dummy data for testing
  };

  return (
    <div className='flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200'>
      <input
        type='text'
        value={input}
        className='w-full px-4 py-2 focus:outline-none rounded-md'
        placeholder='Search asset...'
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && bestMatchesHandler()}
      />
    </div>
  );
};

export default SearchBar;
