'use client';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { navRoutes } from '@/lib/navRoutes';
import NavItem from '@/components/layouts/MobileNavbar/navItem';

const MobileNavbar = () => {
  const user = useCurrentUser();
  navRoutes[3].href = user!.username.slice(1);
  return (
    <div className='w-full h-14 border-t border-neutral-700 fixed bottom-0 z-[100] left-0 bg-neutral-900 flex lg:hidden'>
      {navRoutes.map((route, index) => (
        <NavItem href={route.href} label={route.label} icon={route.icon} key={index} />
      ))}
    </div>
  );
};

export default MobileNavbar;
