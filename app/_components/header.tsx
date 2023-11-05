'use client';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const HomeHeader = () => {
  const [typeContent, setTypeContent] = useState('For Your');
  return (
    <div className='w-full h-14 sticky z-[99] top-0 flex items-center border-b border-neutral-700 backdrop-blur-[2px] bg-neutral-900/80'>
      <div
        className={twMerge(
          'h-full flex flex-1 justify-center items-center text-neutral-400 cursor-pointer hover:bg-neutral-800',
          typeContent === 'For Your' && 'font-semibold text-neutral-200'
        )}
        onClick={() => setTypeContent('For Your')}
      >
        For You
      </div>
      <div
        className={twMerge(
          'h-full flex flex-1 justify-center items-center text-neutral-400 cursor-pointer hover:bg-neutral-800',
          typeContent === 'Following' && 'font-semibold text-neutral-200'
        )}
        onClick={() => setTypeContent('Following')}
      >
        Following
      </div>
    </div>
  );
};

export default HomeHeader;
