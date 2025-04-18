"use client"

import React, { useState } from 'react';
import Counter_7 from '../_components/Counter_7';

const Example_7: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Rating System</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Customer Satisfaction</h2>
            <Counter_7 
              from={0}
              to={5}
              duration={3}
              interval={0.3}
              formatter={(value) => `${value} ★`}
              className="text-4xl font-bold text-yellow-500"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter displays a 5-star rating animation.</p>
            <p>Watch as the rating increases from 0 to 5 stars.</p>
            {isComplete && (
              <p className="text-green-500 font-medium mt-2">Perfect 5-star rating achieved!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_7; 