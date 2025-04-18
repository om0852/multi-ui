"use client";

import React from 'react';
import Card9 from '../_components/Card_9';

const Example_9 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gray-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mb-6 text-center">
        Neon Effect Cards
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card9
            key={item}
            title={`Neon Card ${item}`}
            description="Experience the cyberpunk aesthetic with glowing neon borders and dynamic hover effects."
            link="/card9"
            imageUrl={`https://picsum.photos/seed/${item + 80}/500/300`}
            btnText="Explore"
          />
        ))}
      </div>
    </div>
  );
};

export default Example_9; 