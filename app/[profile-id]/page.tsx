import React from 'react';
import ProfileHeader from './_components/header';
import Image from 'next/image';
import ProfileHero from './_components/hero';
import ProfileSelector from './_components/selector';
import PostCard from '@/components/postCard/post-card';

const ProfilePage = () => {
  return (
    <div className='relative md:pl-[22%] md:pr-[30%] w-full h-auto pb-32'>
      <ProfileHeader />
      <Image src={'/landscape.jpg'} alt='banner' width={550} height={550} className='w-full h-48 object-cover' />
      <ProfileHero />
      <ProfileSelector />
      <PostCard />
    </div>
  );
};

export default ProfilePage;
