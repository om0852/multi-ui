'use client';
import React from 'react';
import Typewriter_9 from '../_components/Typewriter_9';

const Typewriter9Example = () => {
  const vintageText =[ "A message from the past..."];
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-amber-50 rounded-lg border-2 border-amber-900/20">
      <h3 className="text-lg font-semibold text-amber-900 mb-4">Vintage Typewriter</h3>
      <Typewriter_9 
        messages={vintageText} 
        className="text-2xl font-mono text-amber-800"
      />
      <div className="mt-4 text-sm text-amber-700">
        Vintage typewriter with mechanical sound effects
      </div>
    </div>
  );
};

export default Typewriter9Example;