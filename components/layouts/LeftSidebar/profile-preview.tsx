import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';

const ProfilePreview = () => {
  return (
    <button
      className={twMerge(
        'flex justify-between items-center gap-x-2 rounded-3xl pl-4 text-neutral-400 text-base font-medium transition-all hover:bg-neutral-500/20'
      )}
    >
      <div className='flex items-center gap-x-4 py-2'>
        <div className='relative bg-neutral-600 rounded-full w-10 h-10'></div>
        <div className='flex flex-col text-left'>
          <h1 className='w-32 text-neutral-200 text-base truncate'>CookyNdi</h1>
          <h1 className='text-neutral-400 text-sm'>@CookyNdi</h1>
        </div>
      </div>
      <IoIosArrowDown size={24} className='mr-4' />
    </button>
  );
};

export default ProfilePreview;
