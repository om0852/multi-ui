import React, { useState } from 'react';
import Link from 'next/link';

const FractalNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Branch', 'Split', 'Grow', 'Form'];

  return (
    <nav className="bg-lime-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lime-400 font-bold text-xl">Fractal</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-lime-400"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  {[...Array(4)].map((_, level) => (
                    <div key={level} className="absolute inset-0">
                      {[...Array(Math.pow(2, level))].map((_, i) => (
                        <div
                          key={i}
                          className="absolute bg-lime-400/20 
                            animate-[fractalGrow_0.5s_ease-out_forwards]"
                          style={{
                            left: `${(i / Math.pow(2, level)) * 100}%`,
                            width: `${100 / Math.pow(2, level)}%`,
                            height: '25%',
                            top: `${level * 25}%`,
                            animationDelay: `${level * 0.1 + (i * 0.1)}s`,
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default FractalNavbar; 