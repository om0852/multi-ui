"use client";

import React from 'react';
import Card4 from '../tsx/Card_4';

const Example_14 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-cyan-900 to-blue-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Zoom Effect Cards - Variation 2
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card4
            key={item}
            title={`Dynamic Card ${item}`}
            description="Experience the stunning zoom effect with smooth transitions and elegant content reveal."
            link="/card14"
            imageUrl={`https://picsum.photos/seed/${item + 130}/500/300`}
            btnText="View More"
          />
        ))}
      </div>
    </div>
  );
};

export default Example_14; 