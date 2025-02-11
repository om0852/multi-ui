import React, { useState } from 'react';
import Link from 'next/link';

const WindNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Breeze', 'Gust', 'Storm', 'Flow'];

  return (
    <nav className="bg-sky-100 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sky-800 font-bold text-xl">Wind</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-sky-800"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-px bg-gradient-to-r from-sky-400/0 via-sky-400/30 to-sky-400/0 
                        animate-[windGust_1s_ease-out_forwards]"
                      style={{
                        top: `${(i + 1) * 8}%`,
                        left: '-50%',
                        right: '-50%',
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/10 to-sky-400/0 
                    animate-[windFlow_2s_ease-in-out_infinite]" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default WindNavbar; 