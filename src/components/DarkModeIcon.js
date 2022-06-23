import { MoonIcon } from '@heroicons/react/solid';

const DarkModeIcon = () => {
  return (
    <button className='rounded-lg border border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg'>
      <MoonIcon className='h-8 w-8 cursor-pointer stroke-1 fill-transparent stroke-neutral-400' />
    </button>
  );
};

export default DarkModeIcon;
