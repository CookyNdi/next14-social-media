'use client';

import { FcGoogle } from 'react-icons/fc';
import { VscGithub } from 'react-icons/vsc';

import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from 'next-auth/react';

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
        size='lg'
        className='w-full bg-transparent border-neutral-700'
        variant='outline'
        onClick={() => onClick('google')}
      >
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button
        size='lg'
        className='w-full bg-transparent border-neutral-700 text-white hover:text-black'
        variant='outline'
        onClick={() => onClick('github')}
      >
        <VscGithub className='h-5 w-5' />
      </Button>
    </div>
  );
};
