import React from 'react';
import { Bookmark, Eye, Forward, Heart, MessageCircle, Share } from 'lucide-react';

const ActionPost = () => {
  return (
    <div className='flex justify-between mt-3'>
      <div className='text-neutral-400 text-sm flex gap-x-2 cursor-pointer hover:text-neutral-200'>
        <MessageCircle size={18} />
        56
      </div>
      <div className='text-neutral-400 text-sm flex gap-x-2 cursor-pointer hover:text-neutral-200'>
        <Forward size={18} />
        72
      </div>
      <div className='text-neutral-400 text-sm flex gap-x-2 cursor-pointer hover:text-neutral-200'>
        <Heart size={18} />
        365
      </div>
      <div className='text-neutral-400 text-sm flex gap-x-2 cursor-pointer hover:text-neutral-200'>
        <Eye size={18} />
        2356
      </div>
      <div className='flex gap-x-4'>
        <Bookmark size={18} className='text-neutral-400 text-sm flex gap-x-2 cursor-pointer hover:text-neutral-200' />
        <Share size={18} className='text-neutral-400 text-sm flex gap-x-2 cursor-pointer hover:text-neutral-200' />
      </div>
    </div>
  );
};

export default ActionPost;
