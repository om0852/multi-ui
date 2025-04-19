"use client";

import React from 'react';
import Card10 from '../_components/Card_10';

const Example_10 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Minimalist Cards
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card10
            key={item}
         
          />
        ))}
      </div>
    </div>
  );
};

export default Example_10; 