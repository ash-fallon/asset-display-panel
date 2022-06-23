import { useState } from 'react';
import { XIcon, SearchIcon } from '@heroicons/react/solid';

import { dummySymbolLookupData } from '../constants/dummyData';

const SearchBar = () => {
  const [input, setInput] = useState(''); // Tracks search input
  const [bestMatches, setBestMatches] = useState(dummySymbolLookupData.result); // Tracks returned matches from search

  const clearSearchBarHandler = () => {
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

      {input && (
        <button onClick={clearSearchBarHandler}>
          <XIcon className='h-4 w-4 mr-2 fill-gray-500' />
        </button>
      )}

      <button
        onClick={bestMatchesHandler}
        className='h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-2 p-2'
      >
        <SearchIcon className='h-4 w-4 fill-gray-100' />
      </button>
    </div>
  );
};

export default SearchBar;
