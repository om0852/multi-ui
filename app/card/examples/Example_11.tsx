"use client";

import React from 'react';
import Card1 from '../_components/Card_1';

const Example_11 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Hover Cards - Variation 2
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <Card1
            key={item}
            title={`Feature Card ${item}`}
            description="Discover our innovative solutions with smooth hover animations and elegant design elements."
            link="/card11"
            imageUrl={`https://picsum.photos/seed/${item + 100}/500/300`}
            btnText="Get Started"
          />
        ))}
      </div>
    </div>
  );
};

export default Example_11; 