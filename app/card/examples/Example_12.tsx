"use client";

import React from 'react';
import Card2 from '../_components/Card_2';

const Example_12 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-green-800 to-emerald-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        3D Flip Cards - Variation 2
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <Card2
            key={item}
            title={`Flip Card ${item}`}
            description="Experience our interactive 3D flip animation with seamless transitions and engaging content."
            link="/card12"
            imageUrl={`https://picsum.photos/seed/${item + 110}/500/300`}
            btnText="Learn More"
          />
        ))}
      </div>
    </div>
  );
};

export default Example_12; 