"use client"

import React from 'react';
import Counter_2 from '../_components/Counter_2';

const Example_2: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Animated Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Sales Growth</h2>
            <Counter_2 
              from={0}
              to={5000}
              duration={3}
              easing="easeInOut"
              formatter={(value) => `$${value.toFixed(0)}`}
              className="text-4xl font-bold text-green-600"
              onComplete={(finalValue) => console.log(`Counter reached ${finalValue}`)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter animates from 0 to 5,000 over 3 seconds.</p>
            <p>Uses easeInOut animation with dollar formatting.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_2; 