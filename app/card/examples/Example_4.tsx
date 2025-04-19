"use client";

import React from 'react';
import Card4 from '../tsx/Card_4';

const Example_4 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Zoom Effect Cards
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card4
            key={item}
            title={`Dynamic Card ${item}`}
            description="Watch the image zoom in smoothly on hover while content fades in elegantly. A modern take on card design."
            link="/card4"
            imageUrl={`https://picsum.photos/seed/${item + 30}/500/300`}
            btnText="Discover"
          />
        ))}
      </div>
    </div>
  );
};

export default Example_4; 