'use client';
import SidebarItem from '@/components/layouts/LeftSidebar/sidebar-items';
import { navRoutes } from '@/lib/navRoutes';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const SidebarRoutes = () => {
  const user = useCurrentUser();
  navRoutes[3].href = user!.username.slice(1);
  return (
    <div className='flex flex-col w-full'>
      {navRoutes.map((route) => (
        <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
      ))}
      <Button variant='purpleSecondary' className='mt-4'>
        Post
      </Button>
    </div>
  );
};

export default SidebarRoutes;
