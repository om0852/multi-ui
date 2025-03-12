"use client"

import React from 'react';
import Counter_54 from '../_components/Counter_54';

const Example_54: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-slate-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Pressure Gauge</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Pressure (PSI)</h2>
            <Counter_54 
              initialValue={30}
              min={0}
              max={100}
              step={0.5}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Monitor pressure levels with 0.5 PSI precision.</p>
            <p>Track pressure from 0 to 100 PSI.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_54;
