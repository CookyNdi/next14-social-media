import { LuDot } from 'react-icons/lu';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

import ActionPost from './action-post';

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
              <LuDot /> 21h
            </p>
          </div>
          <div className=' text-neutral-400 hover:bg-neutral-800/90 p-1 rounded-full cursor-pointer'>
            <HiOutlineDotsHorizontal size={20} />
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-neutral-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus suscipit deserunt, illum repellat
            reprehenderit non magni fugiat ad asperiores!
          </h1>
          <div className='rounded-[32px] my-3 overflow-hidden'>
            <Image src={'/square.jpg'} alt='test' height={550} width={550} className='object-cover w-full h-auto' />
          </div>
        </div>
        <ActionPost />
      </div>
    </div>
  );
};

export default PostCard;
