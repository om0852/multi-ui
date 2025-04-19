"use client";

import React from 'react';
import Card25 from '../tsx/Card_25';

const Example_25 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-fuchsia-900 to-purple-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Gallery Cards - Variation 5
      </h2>
      <div className="max-w-7xl mx-auto">
        {/* Featured Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card25
           
          />
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Card25
                key={item}
                
              />
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <Card25
              key={item}
             
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_25; 