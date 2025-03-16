'use client';
import React from 'react';
import Typewriter_5 from '../_components/Typewriter_5';

const Typewriter5Example = () => {
  const text = "System malfunction detected";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-red-900 to-purple-900 rounded-lg">
      <h3 className="text-lg font-semibold text-red-200 mb-4">Glitch Typewriter</h3>
      <Typewriter_5 
        message={text}
        glitchInterval={2000}
      />
      <div className="mt-4 text-sm text-red-200">
        Text appears with glitch animation effects
      </div>
    </div>
  );
};

export default Typewriter5Example;