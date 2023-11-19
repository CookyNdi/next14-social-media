import React from 'react';

const TrendsForYou = () => {
  return (
    <div className='w-full bg-neutral-700 rounded-2xl p-4 flex flex-col gap-y-4'>
      <h1 className='text-2xl text-neutral-200 font-bold'>Trends For You</h1>
      <div className='flex flex-col'>
        <h2 className='text-base text-neutral-200 tracking-widest'>Hujan</h2>
        <h3 className='text-sm text-neutral-400'>200 posts</h3>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-base text-neutral-200 tracking-widest'>Yagoo</h2>
        <h3 className='text-sm text-neutral-400'>200 posts</h3>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-base text-neutral-200 tracking-widest'>Hololive</h2>
        <h3 className='text-sm text-neutral-400'>200 posts</h3>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-base text-neutral-200 tracking-widest'>Kobo</h2>
        <h3 className='text-sm text-neutral-400'>200 posts</h3>
      </div>
    </div>
  );
};

export default TrendsForYou;
