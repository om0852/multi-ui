"use client";

import React from 'react';
import Card5 from '../tsx/Card_5';

const Example_15 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-pink-900 to-rose-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        3D Tilt Cards - Variation 2
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {[1, 2].map((item) => (
          <div key={item} className="flex flex-col gap-12">
            {[0, 1].map((subItem) => (
              <Card5
                key={`${item}-${subItem}`}
                title={`Interactive Card ${item * 2 - 1 + subItem}`}
                description="Move your cursor to experience the mesmerizing 3D tilt effect with dynamic lighting."
                link="/card15"
                imageUrl={`https://picsum.photos/seed/${item * 2 - 1 + subItem + 140}/500/300`}
                btnText="Discover"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Example_15; 