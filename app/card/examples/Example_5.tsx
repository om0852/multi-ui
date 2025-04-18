"use client";

import React from 'react';
import Card5 from '../_components/Card_5';

const Example_5 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-emerald-900 to-teal-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        3D Tilt Cards
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card5
            key={item}
            title={`Interactive Card ${item}`}
            description="Move your mouse over the card to experience a smooth 3D tilt effect with dynamic lighting."
            link="/card5"
            imageUrl={`https://picsum.photos/seed/${item + 40}/500/300`}
            btnText="Explore"
          />
        ))}
      </div>
    </div>
  );
};

export default Example_5; 