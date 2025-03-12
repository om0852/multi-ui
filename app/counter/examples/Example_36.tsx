"use client"

import React from 'react';
import Counter_36 from '../_components/Counter_36';

const Example_36: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-sky-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-sky-800">Quantity Selector</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-sky-800">Order Quantity</h2>
            <Counter_36 
              initialValue={1}
              min={1}
              max={50}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Select quantity for your order.</p>
            <p>Order up to 50 items at once.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_36;
