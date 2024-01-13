import { FaArrowLeft } from 'react-icons/fa';

import TrendingForYouSearch from './_component/trendingForYou';
import SearchComponent from '@/components/Search';
import SearchContent from './_component/SearchContent';

type SearchPageProps = {
  searchParams: {
    query: string;
  };
};

const SearchPage: React.FC<SearchPageProps> = ({ searchParams }) => {
  const query = searchParams.query || '';

  return (
    <div className='md:pl-[22%] md:pr-[30%] w-full h-auto pb-32'>
      <div className='p-4 flex flex-col gap-y-2'>
        <div className='flex'>
          {query && (
            <div className='p-2 text-neutral-200 cursor-pointer'>
              <FaArrowLeft />
            </div>
          )}
          <SearchComponent />
        </div>
        <TrendingForYouSearch query={query} />
        {query && <SearchContent />}
      </div>
    </div>
  );
};

export default SearchPage;
