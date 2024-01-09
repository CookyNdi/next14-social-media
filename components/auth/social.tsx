'use client';

import { FcGoogle } from 'react-icons/fc';
import { VscGithub } from 'react-icons/vsc';

import { Button } from '@/components/ui/button';

export const Social = () => {
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button size='lg' className='w-full bg-transparent border-neutral-700' variant='outline' onClick={() => {}}>
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button size='lg' className='w-full bg-transparent border-neutral-700' variant='outline' onClick={() => {}}>
        <VscGithub className='h-5 w-5 text-white' />
      </Button>
    </div>
  );
};
