"use client"

import React from 'react';
import Counter_55 from '../_components/Counter_55';

const Example_55: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-lime-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-lime-800">Distance Goal</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-lime-800">Target (miles)</h2>
            <Counter_55 
              initialValue={5}
              min={0.5}
              max={26.2}
              step={0.5}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set running distance goals in miles.</p>
            <p>From quick jogs to marathon distance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_55;
