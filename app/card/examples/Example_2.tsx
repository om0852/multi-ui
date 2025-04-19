"use client";

import React from 'react';
import Card2 from '../tsx/Card_2';

const Example_2 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Flip Cards
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card2
            key={item}
            title={`Flip Card ${item}`}
            description="Hover over me to see a cool flip effect! The card rotates to reveal more information on the back."
            link="/card2"
            imageUrl={`https://picsum.photos/seed/${item + 10}/500/300`}
            btnText="Explore"
          />
        ))}
      </div>
    </div>
  );
};

export default Example_2; 