"use client";

import React from 'react';
import Card3 from '../_components/Card_3';

const Example_13 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-orange-900 to-red-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Slide-Up Cards - Variation 2
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <Card3
            key={item}
            title={`Elegant Card ${item}`}
            description="Discover the beauty of smooth slide-up animations with our elegantly designed cards."
            link="/card13"
            imageUrl={`https://picsum.photos/seed/${item + 120}/500/300`}
            btnText="Explore Now"
          />
        ))}
      </div>
    </div>
  );
};

export default Example_13; 