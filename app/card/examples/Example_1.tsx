"use client";

import React from 'react';
import Card1 from '../_components/Card_1';

const Example_1 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Basic Hover Card
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card1
            key={item}
            title={`Beautiful Card ${item}`}
            description="Hover over me to see a smooth animation effect. This card demonstrates a clean design with an image overlay."
            link="/card1"
            imageUrl={`https://picsum.photos/seed/${item}/500/300`}
            btnText="Learn More"
          />
        ))}
      </div>
    </div>
  );
};

export default Example_1; 