import Link from 'next/link';
import { SiBurgerking } from 'react-icons/si';
import Navigation from './Navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Burgers', href: '/burgers' },
];

const Header = () => {
  return (
    <header>
      <SiBurgerking />
      <Navigation navLinks={navItems} />
    </header>
  );
};

export default Header;
