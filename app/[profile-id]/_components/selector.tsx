'use client';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const selectors = [
  {
    name: 'post',
  },
  {
    name: 'replies',
  },
  {
    name: 'media',
  },
  {
    name: 'like',
  },
];

const ProfileSelector = () => {
  const [typeContent, setTypeContent] = useState('post');
  return (
    <div className='w-full h-14 flex items-center border-b border-neutral-700 backdrop-blur-[2px] bg-neutral-900/80'>
      {selectors.map((selector, index) => (
        <div
          key={index}
          className={twMerge(
            'relative h-full flex flex-1 justify-center items-center text-neutral-400 cursor-pointer hover:bg-neutral-800 capitalize tracking-wide',
            typeContent === selector.name && 'text-neutral-200'
          )}
          onClick={() => setTypeContent(selector.name)}
        >
          {selector.name}
          {typeContent === selector.name && <div className='absolute bottom-0 w-24 h-[2px] bg-purple-600' />}
        </div>
      ))}
    </div>
  );
};

export default ProfileSelector;
