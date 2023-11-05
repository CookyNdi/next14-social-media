import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return <Image src={'/logo.svg'} height={32} width={32} alt='logo' />;
};

export default Logo;
