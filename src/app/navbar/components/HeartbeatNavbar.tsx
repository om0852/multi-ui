import React, { useState } from 'react';
import Link from 'next/link';

const HeartbeatNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuItems = ['Pulse', 'Beat', 'Life', 'Heart'];

  return (
    <nav className="bg-rose-950 p-4 rounded-lg mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-rose-500 font-bold text-xl">Pulse</div>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative px-4 py-2 text-rose-500"
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <>
                  <div className="absolute inset-0 bg-rose-500/20 rounded-lg animate-[heartbeat_1s_ease-in-out_infinite]" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/0 via-rose-500/30 to-rose-500/0 
                    rounded-lg blur animate-[heartglow_1s_ease-in-out_infinite]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1 h-1 bg-rose-500 rounded-full animate-[heartpulse_1s_ease-in-out_infinite]" />
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default HeartbeatNavbar; 