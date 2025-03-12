"use client"

import React, { useState } from 'react';
import Counter_3 from '../_components/Counter_3';

const Example_3: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Bouncy Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Download Progress</h2>
            <Counter_3 
              from={0}
              to={100}
              duration={3.5}
              easing="easeOut"
              formatter={(value) => `${value.toFixed(0)}%`}
              className="mx-auto"
              onStart={() => console.log('Animation started')}
              onEnd={() => setIsComplete(true)}
              onComplete={(finalValue) => console.log(`Reached ${finalValue}%`)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            {isComplete ? (
              <p className="text-green-600 font-medium">Download complete!</p>
            ) : (
              <p>Downloading... Please wait while the counter reaches 100%.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_3; 