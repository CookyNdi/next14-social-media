'use client';
import React from 'react';
import { routes } from '../LeftSidebar/sidebar-routes';
import NavItem from './navItem';

const MobileNavbar = () => {
  return (
    <div className='w-full h-14 border-t border-neutral-700 fixed bottom-0 z-[100] left-0 bg-neutral-900 flex lg:hidden'>
      {routes.map((route, index) => (
        <NavItem href={route.href} label={route.label} icon={route.icon} key={index} />
      ))}
    </div>
  );
};

export default MobileNavbar;
