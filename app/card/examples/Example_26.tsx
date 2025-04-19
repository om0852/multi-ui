"use client";

import React from 'react';
import Card26 from '../_components/Card_26';

const Example_26 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-slate-800 to-slate-950">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Blog Cards - Variation 6
      </h2>
      <div className="max-w-7xl mx-auto">
        {/* Featured Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-8">
            <Card26
          
            />
          </div>
          <div className="lg:col-span-4 grid grid-cols-1 gap-8">
            {[1, 2].map((item) => (
              <Card26
                key={item}
              
              />
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card26
              key={item}
            
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_26; 