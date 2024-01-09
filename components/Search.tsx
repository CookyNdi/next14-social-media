'use client';
import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const SearchComponent = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const enterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/explore/search?query=${query}`);
    }
  };
  return (
    <div className='relative w-full bg-neutral-700 rounded-full overflow-hidden'>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyDown={(e) => enterHandler(e)}
        type='text'
        className='w-full bg-neutral-700 text-neutral-200 p-2 px-4 ml-6 focus:outline-none'
        placeholder='Search'
      />
      <IoMdSearch size={20} className='absolute top-[10px] left-3 text-neutral-400' />
    </div>
  );
};

export default SearchComponent;
