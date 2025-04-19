"use client";

import React from 'react';
import Card28 from '../_components/Card_28';

const Example_28 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Team Member Cards - Variation 8
      </h2>
      <div className="max-w-7xl mx-auto">
        {/* Leadership Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((item) => (
            <Card28
              key={item}
              title={`Leadership Member ${item}`}
              description="Experienced professional with a proven track record of success and innovation in the industry."
              link="/card28"
              imageUrl={`https://picsum.photos/seed/${item + 280}/400/400`}
              btnText="View Profile"
            />
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Example_28; 