import { User } from '@/types/user';

import { FaArrowLeft } from 'react-icons/fa';

const ProfileHeader = ({ user }: { user: User }) => {
  return (
    <div className='w-full h-14 sticky z-[99] top-0 flex items-center border-b border-neutral-700 backdrop-blur-[2px] bg-neutral-900/80'>
      <div className='p-4 text-neutral-200 cursor-pointer'>
        <FaArrowLeft />
      </div>
      <div>
        <h1 className='text-lg font-bold text-white'>{user.name}</h1>
        <p className='text-sm text-neutral-400'>43 Post</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
