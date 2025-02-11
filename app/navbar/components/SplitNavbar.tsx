import React from 'react';
import Link from 'next/link';

const SplitNavbar = () => {
  const menuItems = ['Gallery', 'Projects', 'About', 'Contact'];

  return (
    <nav className="bg-black p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Split</div>
        <div className="flex gap-8">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              className="group relative text-white overflow-hidden px-3 py-2"
            >
              <span className="relative block transition-transform duration-300 
                group-hover:-translate-y-full">
                {item}
              </span>
              <span className="absolute top-full left-0 block transition-transform 
                duration-300 group-hover:-translate-y-full text-yellow-400">
                {item}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SplitNavbar; 