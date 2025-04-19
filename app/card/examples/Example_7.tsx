"use client";

import React from 'react';
import Card7 from '../tsx/Card_7';

const Example_7 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-400 via-pink-500 to-red-500">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Glass Morphism Cards
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card7
            key={item}
            title={`Glass Card ${item}`}
            description="Experience the modern glass morphism effect with smooth animations and beautiful blur effects."
            link="/card7"
            imageUrl={`https://picsum.photos/seed/${item + 60}/500/300`}
            btnText="View Details"
          />
        ))}
      </div>
    </div>
  );
};

export default Example_7; 