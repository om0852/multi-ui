"use client"

import React from 'react';
import Counter_68 from '../_components/Counter_68';

const Example_68: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-blue-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-800">Rotation Angle</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Angle (degrees)</h2>
            <Counter_68 
              initialValue={0}
              min={0}
              max={360}
              step={15}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set rotation angle in degrees.</p>
            <p>Adjust from 0° to 360° in 15° steps.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_68;
