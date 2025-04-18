"use client"

import React, { useState } from 'react';
import Counter_16 from '../_components/Counter_16';

const Example_16: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Spring Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Altitude Meter</h2>
            <Counter_16 
              from={0}
              to={30000}
              duration={6}
              interval={0.2}
              formatter={(value) => `${value.toLocaleString()} ft`}
              className="mx-auto"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter displays aircraft altitude from 0 to 30,000 feet.</p>
            <p>The animation uses a spring effect for dynamic movement.</p>
            {isComplete && (
              <p className="text-blue-500 font-medium mt-2">Cruising altitude reached!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_16; 