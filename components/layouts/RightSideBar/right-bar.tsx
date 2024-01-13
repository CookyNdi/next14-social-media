import Link from 'next/link';

import SearchComponent from '@/components/Search';
import TrendsForYou from '@/components/layouts/RightSideBar/trends-for-you';
import Footter from '@/components/layouts/RightSideBar/footer';
import { Button } from '@/components/ui/button';
import { auth } from '@/auth';

const RightBar = async () => {
  const session = await auth();

  return (
    <div className='w-[30%] min-h-screen fixed top-0 right-0 border-l border-neutral-700 bg-neutral-900 hidden lg:flex flex-col gap-y-6 px-6 py-4'>
      <SearchComponent />
      <TrendsForYou />
      <Footter />
      {!session?.user && (
        <Button variant='purpleSecondary' className='mt-4'>
          <Link href='/auth/login'>Login</Link>
        </Button>
      )}
    </div>
  );
};

export default RightBar;
