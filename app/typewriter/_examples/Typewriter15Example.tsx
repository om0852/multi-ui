'use client';
import React from 'react';
import Typewriter_15 from '../_components/Typewriter_15';

const Typewriter15Example = () => {
  const text = "Words ignite with passion";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-orange-900 to-red-900 rounded-lg">
      <h3 className="text-lg font-semibold text-orange-200 mb-4">Burning Text Effect</h3>
      <Typewriter_15 
        text={text} 
        className="text-2xl text-orange-500"
      />
      <div className="mt-4 text-sm text-orange-200">
        Letters appear with flame animation
      </div>
    </div>
  );
};

export default Typewriter15Example;