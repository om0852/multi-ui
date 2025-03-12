"use client"

import React from 'react';
import Counter_59 from '../_components/Counter_59';

const Example_59: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-emerald-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-emerald-800">Map Zoom</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-emerald-800">Zoom Level</h2>
            <Counter_59 
              initialValue={12}
              min={1}
              max={20}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Adjust map zoom level.</p>
            <p>From world view to street level detail.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_59;
