import HomeHeader from './_components/header';
import CreatePost from './_components/create-post';
// import PostFloatButton from '@/components/PostButton';
import PostCard from '@/components/postCard/post-card';

const Home = () => {
  return (
    <div className='md:pl-[22%] md:pr-[30%] w-full h-auto pb-32'>
      <HomeHeader />
      <CreatePost />
      {/* <PostFloatButton /> */}
      <PostCard />
    </div>
  );
};

export default Home;
