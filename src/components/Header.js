import SearchBar from './SearchBar';
import DarkModeIcon from './DarkModeIcon';

const Header = ({ name }) => {
  return (
    <>
      <div className='xl:px-32'>
        <h1 className='text-5xl'>{name}</h1>
        <SearchBar />
      </div>
      <DarkModeIcon />
    </>
  );
};

export default Header;
