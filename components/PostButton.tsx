import { FaPlus } from 'react-icons/fa';

const PostFloatButton = () => {
  return (
    <div className=' absolute z-50 bottom-10 right-10 w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center'>
      <FaPlus size={28} className='text-neutral-200' />
    </div>
  );
};

export default PostFloatButton;
