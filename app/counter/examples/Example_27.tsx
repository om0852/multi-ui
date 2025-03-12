"use client"

import React from 'react';
import Counter_27 from '../_components/Counter_27';

const Example_27: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-indigo-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-indigo-800">Page Navigator</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">Page Number</h2>
            <Counter_27 
              initialValue={1}
              min={1}
              max={999}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Navigate through book pages with ease.</p>
            <p>Quickly jump to any page from 1 to 999.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_27;
