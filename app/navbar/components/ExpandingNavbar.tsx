import React, { useState } from 'react';
import Link from 'next/link';

const ExpandingNavbar = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Brand</div>
        
        <div className="flex items-center gap-6">
          <div className={`transition-all duration-300 ${isSearchExpanded ? 'w-64' : 'w-12'}`}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className={`w-full bg-white/10 text-white placeholder-white/60 rounded-full py-2 px-4
                focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300
                ${isSearchExpanded ? 'opacity-100' : 'opacity-0'}`}
                onBlur={() => setIsSearchExpanded(false)}
              />
              <button
                className="absolute right-2 top-2.5 text-white"
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              >
                🔍
              </button>
            </div>
          </div>
          
          {['Home', 'Products', 'About', 'Contact'].map((item) => (
            <Link
              href="#"
              key={item}
              className="text-white hover:bg-white/20 px-3 py-2 rounded-lg transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ExpandingNavbar; 