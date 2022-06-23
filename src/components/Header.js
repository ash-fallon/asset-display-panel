import SearchBar from './SearchBar';

const Header = ({ name }) => {
  return (
    <>
      <div className='xl:px-32'>
        <h1 className='text-5xl'>{name}</h1>
        <SearchBar />
      </div>
    </>
  );
};

export default Header;
