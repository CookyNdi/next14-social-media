import React from 'react';

const Trending = () => {
  return (
    <>
      <h1 className='text-2xl text-neutral-200 font-bold'>Trends For You</h1>
      <div className='flex flex-col'>
        <h2 className='text-base text-neutral-200 tracking-wide'>Hujan</h2>
        <h3 className='text-sm text-neutral-400'>200 posts</h3>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-base text-neutral-200 tracking-wide'>Yagoo</h2>
        <h3 className='text-sm text-neutral-400'>200 posts</h3>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-base text-neutral-200 tracking-wide'>Hololive</h2>
        <h3 className='text-sm text-neutral-400'>200 posts</h3>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-base text-neutral-200 tracking-wide'>Kobo</h2>
        <h3 className='text-sm text-neutral-400'>200 posts</h3>
      </div>
    </>
  );
};

export default Trending;
