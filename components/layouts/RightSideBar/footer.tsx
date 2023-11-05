import Link from 'next/link';
import React from 'react';

const Footter = () => {
  return (
    <div className='w-full flex flex-wrap gap-x-4 text-sm text-neutral-400'>
      <Link href={'/'}>Terms Of Service</Link>
      <Link href={'/'}>Privacy Policy</Link>
      <Link href={'/'}>Cookie Policy</Link>
      <Link href={'/'}>Accessbillity</Link>
    </div>
  );
};

export default Footter;
