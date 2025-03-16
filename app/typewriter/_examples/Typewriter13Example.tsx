'use client';
import React from 'react';
import Typewriter_13 from '../_components/Typewriter_13';

const Typewriter13Example = () => {
  const text = "Handwritten with care";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-cream-50 rounded-lg border border-amber-200">
      <h3 className="text-lg font-semibold text-amber-800 mb-4">Handwriting Effect</h3>
      <Typewriter_13 
        text={text} 
        className="text-2xl text-amber-900 font-handwriting"
      />
      <div className="mt-4 text-sm text-amber-700">
        Simulates natural handwriting flow
      </div>
    </div>
  );
};

export default Typewriter13Example;