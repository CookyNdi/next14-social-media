import Trending from '@/components/trending';
import React from 'react';

const TrendsForYou = () => {
  return (
    <div className='w-full bg-neutral-700 rounded-2xl p-4 flex flex-col gap-y-4'>
      <Trending />
    </div>
  );
};

export default TrendsForYou;
