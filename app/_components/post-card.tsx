import { Bookmark, Dot, Eye, Forward, Heart, MessageCircle, MoreHorizontal, Share } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const PostCard = () => {
  return (
    <div className='w-full h-auto flex border-b border-neutral-700 p-4'>
      <div className='flex w-16'>
        <div className='relative bg-neutral-600 rounded-full w-10 h-10 mr-2'></div>
      </div>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link href={'/1'} className='text-neutral-200 text-lg mr-2'>
              CookyNdi
            </Link>
            <Link href={'/1'} className='text-neutral-400 text-sm'>
              @CookyNdi
            </Link>
            <p className='text-neutral-400 text-sm flex items-center'>
              <Dot /> 20h
            </p>
          </div>
          <MoreHorizontal size={20} className='hover:bg-neutral-700 rounded-full cursor-pointer' />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-neutral-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus suscipit deserunt, illum repellat
            reprehenderit non magni fugiat ad asperiores!
          </h1>
        </div>
        <div className='flex justify-between mt-2'>
          <div className='text-neutral-400 text-sm flex gap-x-2'>
            <MessageCircle size={18} />
            56
          </div>
          <div className='text-neutral-400 text-sm flex gap-x-2'>
            <Forward size={18} />
            72
          </div>
          <div className='text-neutral-400 text-sm flex gap-x-2'>
            <Heart size={18} />
            365
          </div>
          <div className='text-neutral-400 text-sm flex gap-x-2'>
            <Eye size={18} />
            2356
          </div>
          <div className='flex gap-x-4'>
            <Bookmark size={18} />
            <Share size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
