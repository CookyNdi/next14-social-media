import { FaHome, FaRegBookmark, FaUser } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

export const navRoutes = [
  {
    icon: FaHome,
    label: 'Home',
    href: '/',
  },
  {
    icon: IoSearch,
    label: 'Explore',
    href: '/explore/search',
  },
  {
    icon: FaRegBookmark,
    label: 'Saved',
    href: '/saved',
  },
  {
    icon: FaUser,
    label: 'Profile',
    href: `/CookyNdi`,
  },
];
