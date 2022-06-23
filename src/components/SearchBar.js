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

  return <div>SearchBar</div>;
};

export default SearchBar;
