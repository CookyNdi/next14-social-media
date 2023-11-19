import Trending from '@/components/trending';
import React from 'react';

type TrendingForYouSearchProps = {
  query: string;
};

const TrendingForYouSearch: React.FC<TrendingForYouSearchProps> = ({ query }) => {
  if (query) {
    return null;
  }
  return (
    <div className='w-full flex flex-col gap-y-4'>
      <Trending />
    </div>
  );
};

export default TrendingForYouSearch;
