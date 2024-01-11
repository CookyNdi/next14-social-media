import { IoIosArrowDown } from 'react-icons/io';

import { auth } from '@/auth';
import ProfileImage from '@/components/profile-image';
import { cn } from '@/lib/utils';

const ProfilePreview = async () => {
  const session = await auth();
  return (
    <button
      className={cn(
        'flex justify-between items-center gap-x-2 rounded-3xl pl-4 text-neutral-400 text-base font-medium transition-all hover:bg-neutral-500/20'
      )}
    >
      <div className='flex items-center gap-x-4 py-2'>
        <ProfileImage />
        <div className='flex flex-col text-left'>
          <h1 className='w-32 text-neutral-200 text-base truncate'>{session?.user?.name || 'Example'}</h1>
          <h1 className='text-neutral-400 text-sm'>{session?.user?.username || '@Example'}</h1>
        </div>
      </div>
      <IoIosArrowDown size={24} className='mr-4' />
    </button>
  );
};

export default ProfilePreview;
