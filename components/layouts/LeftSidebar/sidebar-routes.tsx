'use client';
import { FaHome, FaRegBookmark, FaUser } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

import SidebarItem from './sidebar.items';
import { Button } from '@/components/ui/button';

export const routes = [
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
    href: '/1',
  },
];

const SidebarRoutes = () => {
  return (
    <div className='flex flex-col w-full'>
      {routes.map((route) => (
        <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
      ))}
      <Button variant='purpleSecondary' className='mt-4'>
        Post
      </Button>
    </div>
  );
};

export default SidebarRoutes;
