import React from 'react';
import SearchComponent from '@/components/Search';

const RightBar = () => {
  return (
    <div className='w-[30%] h-full fixed top-0 right-0 border-l border-neutral-700 bg-neutral-900 hidden md:flex flex-col justify-between px-6 py-4'>
      <SearchComponent />
    </div>
  );
};

export default RightBar;
