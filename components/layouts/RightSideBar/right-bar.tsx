import React from 'react';
import SearchComponent from '@/components/Search';
import TrendsForYou from './trends-for-you';
import Footter from './footer';

const RightBar = () => {
  return (
    <div className='w-[30%] min-h-screen fixed top-0 right-0 border-l border-neutral-700 bg-neutral-900 hidden md:flex flex-col gap-y-6 px-6 py-4'>
      <SearchComponent />
      <TrendsForYou />
      <Footter />
    </div>
  );
};

export default RightBar;
