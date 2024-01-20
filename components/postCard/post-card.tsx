import Image from 'next/image';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { LuDot } from 'react-icons/lu';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

import ActionPost from './action-post';
import { postDataType } from '@/types/post';
import { cn } from '@/lib/utils';

const PostCard = ({ data }: { data: postDataType }) => {
  const formatedTime = formatDistanceToNow(new Date(data.createdAt), { addSuffix: true, includeSeconds: true });
  return (
    <div className='w-full h-auto flex border-b border-neutral-700 p-4'>
      <div className='flex w-16'>
        <div className={cn('relative bg-neutral-600 rounded-full overflow-hidden w-10 h-10')}>
          <Image src={data.profileImage || ''} alt='Profile' fill />
        </div>
      </div>
      <div className='w-full flex flex-col'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link href={`/${data.username?.slice(1)}`} className='text-neutral-200 text-lg mr-2'>
              {data.name}
            </Link>
            <Link href={`/${data.username?.slice(1)}`} className='text-neutral-400 text-sm'>
              {data.username}
            </Link>
            <p className='text-neutral-400 text-sm flex items-center'>
              <LuDot /> {formatedTime}
            </p>
          </div>
          <div className=' text-neutral-400 hover:bg-neutral-800/90 p-1 rounded-full cursor-pointer'>
            <HiOutlineDotsHorizontal size={20} />
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-neutral-200'>{data.content}</h1>
          {data.images.length > 0 && (
            <div className='rounded-[32px] my-3 overflow-hidden'>
              <Image
                src={data.images[0].image_url}
                alt={data.images[0].image_url}
                height={550}
                width={550}
                className='object-cover w-full h-auto'
              />
            </div>
          )}
        </div>
        <ActionPost data={data} />
      </div>
    </div>
  );
};

export default PostCard;
