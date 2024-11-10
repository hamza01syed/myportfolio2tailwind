// components/Navbar.tsx
"use client"

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <Link href="/">MyPortfolio</Link>
      </div>
      <div className="md:hidden flex flex-col cursor-pointer" onClick={toggleMenu}>
        <span className={`h-0.5 w-6 bg-white mb-1 transition-transform ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`h-0.5 w-6 bg-white mb-1 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`h-0.5 w-6 bg-white transition-transform ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
      </div>
      <div className={`md:flex md:items-center md:gap-6 ${isOpen ? 'flex flex-col absolute top-16 right-0 bg-gray-800 w-full text-right p-4' : 'hidden'}`}>
        <Link href="/" className="text-lg hover:text-yellow-500">Home</Link>
        <Link href="#projects" className="text-lg hover:text-yellow-500">Projects</Link>
        <Link href="#skills" className="text-lg hover:text-yellow-500">Skills</Link>
        <Link href="#contact" className="text-lg hover:text-yellow-500">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
