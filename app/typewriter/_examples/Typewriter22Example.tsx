'use client';
import React from 'react';
import Typewriter_22 from '../_components/Typewriter_22';

const Typewriter22Example = () => {
  const text = "Ink flows like water";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Ink Flow Typewriter</h3>
      <Typewriter_22 
        text={text} 
        className="text-2xl text-gray-900 font-serif" 
      />
      <div className="mt-4 text-sm text-gray-600">
        Letters appear with ink flow animation
      </div>
    </div>
  );
};

export default Typewriter22Example;