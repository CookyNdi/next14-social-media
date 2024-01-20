import Image from 'next/image';

import ProfileHeader from '@/app/(general)/[username]/_components/header';
import ProfileHero from '@/app/(general)/[username]/_components/hero';
import ProfileSelector from '@/app/(general)/[username]/_components/selector';
import PostCard from '@/components/postCard/post-card';
import getUserData from '@/actions/user/getUserData';

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const user = await getUserData(params.username);
  // console.log(user);
  return (
    <div className='md:pl-[22%] md:pr-[30%] w-full h-auto pb-32'>
      <ProfileHeader user={user!} />
      <div className='w-full h-48 relative bg-neutral-600'>
        {user?.banner_image && <Image src={user?.banner_image} alt='banner' fill className='object-cover' />}
      </div>
      <ProfileHero user={user!} />
      <ProfileSelector />
      <PostCard />
    </div>
  );
};

export default ProfilePage;
