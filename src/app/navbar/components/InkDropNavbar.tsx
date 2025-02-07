import React, { useState } from 'react';
import Link from 'next/link';

const InkDropNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Write', 'Draw', 'Paint', 'Create'];

  return (
    <nav className="bg-slate-100 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-slate-800 font-bold text-xl">Ink</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-slate-800"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 bg-slate-800/10 rounded-full 
                        animate-[inkDrop_0.5s_ease-out_forwards]"
                      style={{
                        transformOrigin: `${50 + (i - 1.5) * 20}% 50%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-800/5 to-transparent 
                    animate-[inkFade_0.5s_ease-out_forwards]" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default InkDropNavbar; 