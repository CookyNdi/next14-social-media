import React from 'react';
import SearchSelector from './selector';
import PostCard from '@/components/postCard/post-card';

const SearchContent = () => {
  return (
    <div>
      <SearchSelector />
      <PostCard />
    </div>
  );
};

export default SearchContent;
