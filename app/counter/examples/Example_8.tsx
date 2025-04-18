"use client"

import React, { useState } from 'react';
import Counter_8 from '../_components/Counter_8';

const Example_8: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Font Size Adjuster</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Text Scaling</h2>
            <Counter_8 
              from={12}
              to={24}
              duration={4}
              interval={0.25}
              formatter={(value) => `${value}px`}
              className="text-3xl font-bold text-purple-600"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter demonstrates font size scaling from 12px to 24px.</p>
            <p>The animation runs for 4 seconds with smooth transitions.</p>
            {isComplete && (
              <p className="text-green-500 font-medium mt-2">Font size animation complete!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_8; 