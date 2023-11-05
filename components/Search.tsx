import React from 'react';
import { Search } from 'lucide-react';

const SearchComponent = () => {
  return (
    <div className='relative w-full bg-neutral-700 rounded-full overflow-hidden'>
      <input type='text' className='w-full bg-neutral-700 text-neutral-200 p-2 px-4 ml-6 focus:outline-none' placeholder='Search' />
      <Search size={20} className='absolute top-[10px] left-3 text-neutral-400' />
    </div>
  );
};

export default SearchComponent;
