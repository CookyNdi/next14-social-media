import { FaRegBookmark, FaShare, FaRegComment, FaRegHeart, FaEye } from 'react-icons/fa';
import { GiShare } from 'react-icons/gi';

import { postDataType } from '@/types/post';

const ActionPost = ({ data }: { data: postDataType }) => {
  return (
    <div className='flex justify-between mt-3'>
      <div className='text-neutral-400 text-sm flex gap-x-2 cursor-pointer hover:text-neutral-200'>
        <FaRegComment size={18} />
        56
      </div>
      <div className='text-neutral-400 text-sm flex gap-x-2 cursor-pointer hover:text-neutral-200'>
        <FaShare size={18} />
        {data.respost_count}
      </div>
      <div className='text-neutral-400 text-sm flex gap-x-2 cursor-pointer hover:text-neutral-200'>
        <FaRegHeart size={18} />
        {data.likes}
      </div>
      <div className='text-neutral-400 text-sm flex gap-x-2 cursor-pointer hover:text-neutral-200'>
        <FaEye size={18} />
        {data.view}
      </div>
      <div className='flex gap-x-4'>
        <FaRegBookmark
          size={18}
          className='text-neutral-400 text-sm flex gap-x-2 cursor-pointer hover:text-neutral-200'
        />
        <GiShare size={18} className='text-neutral-400 text-sm flex gap-x-2 cursor-pointer hover:text-neutral-200' />
      </div>
    </div>
  );
};

export default ActionPost;
