'use client';
import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { usePathname} from 'next/navigation';
import { twMerge } from 'tailwind-merge';

type SidebarItemProps = {
  icon: LucideIcon;
  href: string;
  label: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, href, label }) => {
  const pathname = usePathname();

  const isActive = (pathname === '/' && href === '/') || pathname === href || pathname?.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      className={twMerge(
        'flex items-center gap-x-2 rounded-full pl-4 text-neutral-400 text-base font-medium transition-all hover:bg-neutral-500/20',
        isActive && 'font-semibold text-neutral-200'
      )}
    >
      <div className='flex items-center gap-x-3 py-4'>
        <Icon
          strokeWidth={isActive ? 2.5 : 1.5}
          size={24}
          className={twMerge('text-neutral-400', isActive && 'text-neutral-200')}
        />
        {label}
      </div>
    </Link>
  );
};

export default SidebarItem;
