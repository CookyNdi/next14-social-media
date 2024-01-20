import HomeHeader from './_components/header';
import CreatePost from './_components/create-post';
// import PostFloatButton from '@/components/PostButton';
import PostCard from '@/components/postCard/post-card';
import getAllPostData from '@/actions/post/getAllPostData';

const Home = async () => {
  const post = await getAllPostData();
  return (
    <div className='lg:pl-[22%] lg:pr-[30%] w-full h-auto pb-32'>
      <HomeHeader />
      <CreatePost />
      {/* <PostFloatButton /> */}
      {post?.map((data) => (
        <PostCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Home;
