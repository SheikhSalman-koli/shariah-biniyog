import React from 'react'
import { User, Briefcase, Home, Wallet, InboxIcon,  } from 'lucide-react';

export default function Footer() {
  return (
     <footer className="sticky bottom-0 w-full max-w-xl mx-auto bg-white border-t border-gray-200 shadow-2xl">
        <nav className="flex justify-around items-center h-16">
          <NavItem icon={Home} label="Home" active />
          <NavItem icon={Briefcase} label="Invest" />
          <NavItem icon={Wallet} label="Portfolio" />
          <NavItem icon={InboxIcon} label="Inbox" />
          <NavItem icon={User} label="Profile" />
        </nav>
      </footer>

      
  )
}

const NavItem = ({ icon: Icon, label, active }) => (
  <button className={`flex flex-col items-center justify-center p-2 transition duration-200 ${
    active ? 'text-indigo-600' : 'text-gray-400 hover:text-indigo-400'
  }`}>
    <Icon className="h-6 w-6" />
    <span className="text-xs mt-1 font-medium">{label}</span>
  </button>
);

