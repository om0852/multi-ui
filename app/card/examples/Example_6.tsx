"use client";

import React from 'react';
import Card6 from '../_components/Card_6';

const Example_6 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Glowing Border Cards
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card6
            key={item}
            title={`Glowing Card ${item}`}
            description="Hover to see the magical glowing border effect. Perfect for highlighting important content."
            link="/card6"
            imageUrl={`https://picsum.photos/seed/${item + 50}/500/300`}
            btnText="Learn More"
          />
        ))}
      </div>
    </div>
  );
};

export default Example_6; 