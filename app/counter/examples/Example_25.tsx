"use client"

import React from 'react';
import Counter_25 from '../_components/Counter_25';

const Example_25: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-purple-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-purple-800">Volume Control</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-purple-800">Audio Level</h2>
            <Counter_25 
              initialValue={50}
              min={0}
              max={100}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Adjust the audio volume level from 0 to 100.</p>
            <p>Fine-tune your listening experience with precise control.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_25;
