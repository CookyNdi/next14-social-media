import { HiOutlineDotsHorizontal } from 'react-icons/hi';

import { auth } from '@/auth';
import ProfileImage from '@/components/profile-image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LogoutButton } from '@/components/auth/logout-button';

const ProfilePreview = async () => {
  const session = await auth();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='flex justify-between items-center gap-x-2 rounded-3xl pl-4 text-neutral-400 text-base font-medium transition-all hover:bg-neutral-500/20 cursor-pointer'>
          <div className='flex items-center gap-x-4 py-2'>
            <ProfileImage />
            <div className='flex flex-col text-left'>
              <span className='w-32 text-neutral-200 text-base truncate'>{session?.user?.name || 'Example'}</span>
              <span className='text-neutral-400 text-sm'>{session?.user?.username || '@Example'}</span>
            </div>
          </div>
          <HiOutlineDotsHorizontal size={24} className='mr-4' />
        </div>
      </DialogTrigger>
      <DialogContent className='max-w-[320px] sm:max-w-md'>
        <div className='pt-4'>
          <LogoutButton>
            <Button variant='purple' className='w-full'>
              Logout
            </Button>
          </LogoutButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfilePreview;
