'use client'

import React from 'react';
import Link from 'next/link'; 
import { Home, Briefcase, Wallet, User, Mail as InboxIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

// Helper Component for Navigation Items
const NavItem = ({ icon: Icon, label, isActive, linkTo }) => (
  <Link 
    href={linkTo} // Next.js handles the navigation based on this href
    className={`flex flex-col items-center justify-center p-2 transition duration-200 w-1/5 ${
      isActive ? 'text-indigo-600' : 'text-gray-400 hover:text-indigo-400'
    }`}
  >
    <Icon className="h-6 w-6" />
    <span className="text-xs mt-1 font-medium">{label}</span>
  </Link>
);


export default function Footer() {

const currentPath = usePathname();

  return (
    <footer className="sticky bottom-0 w-full max-w-xl mx-auto bg-white border-t border-gray-200 shadow-2xl z-20">
      <nav className="flex justify-around items-center h-16">
        
        {/* Correctly passing the string path to linkTo */}
        <NavItem 
          icon={Home} 
          label="Home" 
          linkTo="/" 
          isActive={currentPath === '/'} 
        />
        
        {/* Use absolute path "/invest" */}
        <NavItem 
          icon={Briefcase} 
          label="Invest" 
          linkTo="/invest" 
          isActive={currentPath === '/invest'} 
        />
        
        {/* Correctly passing the string path for Portfolio */}
        <NavItem 
          icon={Wallet} 
          label="Portfolio" 
          linkTo="/portfolio" 
          isActive={currentPath === '/portfolio'} 
        />
        
        {/* Correctly passing the string path for Inbox */}
        <NavItem 
          icon={InboxIcon} 
          label="Inbox" 
          linkTo="/inbox" 
          isActive={currentPath === '/inbox'} 
        />
        
        {/* Correctly passing the string path for Profile */}
        <NavItem 
          icon={User} 
          label="Profile" 
          linkTo="/profile" 
          isActive={currentPath === '/profile'} 
        />

      </nav>
    </footer>
  );
}