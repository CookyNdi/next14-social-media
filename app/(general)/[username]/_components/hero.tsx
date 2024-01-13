import Image from 'next/image';

import { User } from '@/types/user';
import { Button } from '@/components/ui/button';

const ProfileHero = ({ user }: { user: User }) => {
  return (
    <div className='relative w-full py-2 px-4'>
      <div className='absolute -top-[60px] left-[5%] w-32 h-32 rounded-full border-4 bg-neutral-600 border-neutral-900 overflow-hidden'>
        {user.image && <Image src={user.image} alt='pfp' width={550} height={550} className='object-cover' />}
      </div>
      <div className='w-full flex justify-end'>
        <Button variant='purpleSecondary' className='w-36 py-2'>
          Follow
        </Button>
      </div>
      <div className='mt-8 flex flex-col'>
        <span className='text-xl text-white font-bold'>{user.name}</span>
        <span className='text-neutral-400'>{user.username}</span>
        <p className='text-white mt-2'>{user.bio}</p>
        <div className='flex gap-x-4 mt-2'>
          <p className='text-white hover:underline'>
            108 <span className='text-neutral-400'>Folowing</span>
          </p>
          <p className='text-white hover:underline'>
            36 <span className='text-neutral-400'>Followers</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
