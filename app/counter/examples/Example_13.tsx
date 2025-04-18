"use client"

import React, { useState } from 'react';
import Counter_13 from '../_components/Counter_13';

const Example_13: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Scale Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Heart Rate Monitor</h2>
            <Counter_13 
              from={60}
              to={180}
              duration={5}
              interval={0.2}
              formatter={(value) => `${value} bpm`}
              className="mx-auto"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter simulates increasing heart rate from 60 to 180 bpm.</p>
            <p>The animation uses a scale effect with smooth transitions.</p>
            {isComplete && (
              <p className="text-red-500 font-medium mt-2">Maximum heart rate reached!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_13; 