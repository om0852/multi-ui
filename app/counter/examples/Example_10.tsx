"use client"

import React, { useState } from 'react';
import Counter_10 from '../_components/Counter_10';

const Example_10: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Zoom Control</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Image Magnification</h2>
            <Counter_10 
              from={50}
              to={200}
              duration={7}
              interval={0.2}
              formatter={(value) => `${value}%`}
              className="text-3xl font-bold text-teal-600"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter demonstrates zoom level adjustment from 50% to 200%.</p>
            <p>The animation runs for 7 seconds with smooth transitions.</p>
            {isComplete && (
              <p className="text-green-500 font-medium mt-2">Maximum zoom level reached!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_10; 