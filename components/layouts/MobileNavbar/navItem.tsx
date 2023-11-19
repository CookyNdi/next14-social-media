import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type NavItemProps = {
  icon: LucideIcon;
  href: string;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label }) => {
  const pathname = usePathname();

  const isActive = (pathname === '/' && href === '/') || pathname === href || pathname?.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      title={label}
      className={twMerge(
        'relative h-full flex flex-1 justify-center items-center text-neutral-400 cursor-pointer hover:bg-neutral-800 capitalize tracking-wide'
      , isActive && "text-white")}
    >
      <Icon />
    </Link>
  );
};

export default NavItem;
