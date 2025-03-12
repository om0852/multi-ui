"use client"

import React from 'react';
import Counter_43 from '../_components/Counter_43';

const Example_43: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-blue-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-800">Serving Size</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Servings</h2>
            <Counter_43 
              initialValue={4}
              min={1}
              max={20}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Adjust recipe serving size.</p>
            <p>Scale recipes from 1 to 20 servings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_43;
