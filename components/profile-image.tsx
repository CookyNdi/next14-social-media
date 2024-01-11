import Image from 'next/image';

import { auth } from '@/auth';
import { cn } from '@/lib/utils';

const ProfileImage = async ({ className }: { className?: string }) => {
  const session = await auth();

  return (
    <div className={cn('relative bg-neutral-600 rounded-full overflow-hidden w-10 h-10', className)}>
      {session?.user && <Image src={session?.user.image || ''} alt='Profile' fill />}
    </div>
  );
};

export default ProfileImage;
