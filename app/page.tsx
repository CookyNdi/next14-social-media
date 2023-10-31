import RightBar from '@/components/layouts/RightSideBar/right-bar';
import HomeHeader from './_components/header';
import CreatePost from './_components/create-post';
import PostFloatButton from '@/components/PostButton';
import PostCard from './_components/post-card';

const Home = () => {
  return (
    <div className='md:pl-[22%] md:pr-[30%] relative w-full h-[200dvh]'>
      <RightBar />
      <HomeHeader />
      <CreatePost />
      {/* <div className='w-screen h-screen fixed top-0 left-0 z-0'>
        <PostFloatButton />
      </div> */}
      <PostCard />
    </div>
  );
};

export default Home;
