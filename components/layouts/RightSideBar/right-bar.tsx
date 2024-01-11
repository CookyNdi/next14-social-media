import React from 'react';
import SearchComponent from '@/components/Search';
import TrendsForYou from './trends-for-you';
import Footter from './footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { auth } from '@/auth';
import { LogoutButton } from '@/components/auth/logout-button';

const RightBar = async () => {
  const session = await auth();

  return (
    <div className='w-[30%] min-h-screen fixed top-0 right-0 border-l border-neutral-700 bg-neutral-900 hidden md:flex flex-col gap-y-6 px-6 py-4'>
      <SearchComponent />
      <TrendsForYou />
      <Footter />
      {!session?.user ? (
        <Button variant='purpleSecondary' className='mt-4'>
          <Link href='/auth/login'>Login</Link>
        </Button>
      ) : (
        <LogoutButton>
          <Button variant='purpleSecondary' className='mt-4'>
            Logout
          </Button>
        </LogoutButton>
      )}
    </div>
  );
};

export default RightBar;
