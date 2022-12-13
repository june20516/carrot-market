import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { klassName } from '../libs/utils';

interface FloatingButtonProps {
  children: React.ReactNode;
  href: string;
  [key: string]: any;
}

const FloatingButton = ({ children, href, ...rest }: FloatingButtonProps) => {
  return (
    <Link
      className="w-12 aspect-square flex justify-center items-center fixed bottom-16 right-5 z-10 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-xl"
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default FloatingButton;
