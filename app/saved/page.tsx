import PostCard from '@/components/postCard/post-card';
import { MoreHorizontal } from 'lucide-react';
import React from 'react';

const SavedPage = () => {
  return (
    <div className='md:pl-[22%] md:pr-[30%] w-full h-auto pb-32'>
      <div className='flex justify-between items-center p-4'>
        <div>
          <h1 className='text-lg text-white font-bold'>Saved</h1>
          <p className='text-sm text-neutral-400'>@CookyNdi</p>
        </div>
        <div className=' text-neutral-400 hover:bg-neutral-800/90 p-1 rounded-full cursor-pointer'>
          <MoreHorizontal size={20} />
        </div>
      </div>
      <PostCard />
    </div>
  );
};

export default SavedPage;
