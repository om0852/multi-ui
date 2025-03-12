"use client"

import React, { useState } from 'react';
import Counter_5 from '../_components/Counter_5';

const Example_5: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Animated Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Visitor Count</h2>
            <Counter_5 
              from={0}
              to={1250}
              duration={6}
              interval={0.3}
              formatter={(value) => `${value.toLocaleString()} visitors`}
              className="text-3xl font-bold text-blue-600"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter displays the total number of website visitors.</p>
            <p>The animation runs for 6 seconds with smooth increments.</p>
            {isComplete && (
              <p className="text-green-500 font-medium mt-2">Counter animation complete!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_5; 