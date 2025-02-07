import React, { useState } from 'react';
import Link from 'next/link';

const PortalNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Warp', 'Portal', 'Jump', 'Travel'];

  return (
    <nav className="bg-violet-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-violet-400 font-bold text-xl">Portal</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-violet-400"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/50 to-fuchsia-600/50 
                    animate-[portal_1s_ease-out_infinite] blur-md" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 
                    animate-[portal_1s_ease-out_infinite] animate-delay-100 blur-md" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 
                    animate-[portal_1s_ease-out_infinite] animate-delay-200 blur-md" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default PortalNavbar; 