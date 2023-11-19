import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';

const ProfileHero = () => {
  return (
    <div className='relative w-full py-2 px-4'>
      <div className='absolute -top-[60px] left-[5%] w-32 h-32 rounded-full border-4 border-neutral-900 overflow-hidden'>
        <Image src={'/square.jpg'} alt='pfp' width={550} height={550} className='object-cover' />
      </div>
      <div className='w-full flex justify-end'>
        <Button className='w-36 py-2'>Follow</Button>
      </div>
      <div className='mt-8'>
        <h1 className='text-xl text-white font-bold'>CookyNdi</h1>
        <h2 className='text-neutral-400'>@CookyNdi</h2>
        <p className='text-white mt-2'>
          湊あくあが最推しです。あくたん最高!! あ☆く☆た☆ん☆ ⚓ 日本語 • English • Bahasa Indonesia 👉 OK 👍
        </p>
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
