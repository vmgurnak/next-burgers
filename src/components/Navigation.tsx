'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FC } from 'react';

import styles from './Navigation.module.css';

type NavigationProps = {
  navLinks: { label: string; href: string }[];
};

const Navigation: FC<NavigationProps> = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <nav>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? styles.active : ''}
          >
            {link.label}
          </Link>
        );
      })}
      {/* <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/reviews">Reviews</Link>
      <Link href="/burgers">Burgers</Link> */}
    </nav>
  );
};

export default Navigation;
