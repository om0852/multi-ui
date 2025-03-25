'use client';
import React from 'react';
import Typewriter_20 from '../_components/Typewriter_20';

const Typewriter20Example = () => {
  const text = "Reflecting on each word";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-neutral-900 to-stone-900 rounded-lg">
      <h3 className="text-lg font-semibold text-neutral-200 mb-4">Mirror Reflection</h3>
      <Typewriter_20 
        text={text} 
        className="text-2xl text-white"
      />
      <div className="mt-4 text-sm text-neutral-200">
        Text with mirror reflection effect
      </div>
    </div>
  );
};

export default Typewriter20Example;