"use client"
import React from 'react'
import { Home, Search, User2 } from 'lucide-react'

import SidebarItem from './sidebar.items'
import Button from '@/components/Button'

const routes = [
  {
    icon: Home,
    label: 'Home',
    href: '/',
  },
  {
    icon: Search,
    label: 'Explore',
    href: '/explore/search',
  },
  {
    icon: User2,
    label: 'Profile',
    href: '/1',
  },
]

const SidebarRoutes = () => {
  return (
    <div className='flex flex-col w-full'>
    {routes.map((route) => (
      <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
    ))}
      <Button className='mt-4'>Post</Button>
  </div>
  )
}

export default SidebarRoutes