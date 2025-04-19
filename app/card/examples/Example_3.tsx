"use client";

import React from 'react';
import Card3 from '../tsx/Card_3';

const Example_3 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Slide-Up Cards
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card3
            key={item}
            title={`Elegant Card ${item}`}
            description="Hover to reveal more details with a smooth slide-up animation. Perfect for showcasing content elegantly."
            link="/card3"
            imageUrl={`https://picsum.photos/seed/${item + 20}/500/300`}
            btnText="View More"
          />
        ))}
      </div>
    </div>
  );
};

export default Example_3; 