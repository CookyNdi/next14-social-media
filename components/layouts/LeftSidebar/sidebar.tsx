import React from 'react';

import Logo from './logo';
import SidebarRoutes from './sidebar-routes';
import ProfilePreview from './profile-preview';

const Sidebar = () => {
  return (
    <div className='w-[22%] h-full fixed top-0 left-0 bg-neutral-900 hidden md:flex flex-col justify-between px-6 py-4'>
      <div className='flex flex-col gap-y-4'>
        <Logo />
        <SidebarRoutes />
      </div>
      <ProfilePreview />
    </div>
  );
};

export default Sidebar;
