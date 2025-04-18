"use client";

import React from 'react';
import Card8 from '../_components/Card_8';

const Example_8 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-black">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Floating Gradient Cards
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card8
            key={item}
            title={`Gradient Card ${item}`}
            description="Hover to see the beautiful floating animation with gradient borders and smooth transitions."
            link="/card8"
            imageUrl={`https://picsum.photos/seed/${item + 70}/500/300`}
            btnText="Read More"
          />
        ))}
      </div>
    </div>
  );
};

export default Example_8; 