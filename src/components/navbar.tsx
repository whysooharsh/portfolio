import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/button';

interface NavbarProps {
  className?: string;
}

interface NavItem {
  name: string;
  url: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const navLinks: NavItem[] = [
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/#projects' },
  { name: 'Skills', url: '/#skills' },
  { name: 'Contact', url: '/#contact-me' },
  { name: 'Blogs', url: '/blogs' }
];

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/whysooharsh',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/harsharma45',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/whysooharsh',
    icon: 'twitter'
  }
];

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  return (
    <header className={`sticky top-0 z-50 w-full border-b border-purple-500/20 bg-neutral-900/50 backdrop-blur-lg ${className}`}>
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 hidden md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((item: NavItem) => (
              <Link
                key={item.name}
                to={item.url}
                className="text-purple-300 transition-colors hover:text-purple-400"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center space-x-2">
            {socialLinks.map((social: SocialLink) => (
              <Button
                key={social.name}
                variant="ghost"
                size="sm"
                className="w-9 px-0"
                onClick={() => window.open(social.url, '_blank')}
              >
                <span className="sr-only">{social.name}</span>
                <i className={`fab fa-${social.icon}`} />
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
  