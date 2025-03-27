'use client';
import React from 'react';
import Typewriter_16 from '../_components/Typewriter_16';

const Typewriter16Example = () => {
  const text = "Shadows dance with every letter";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg">
      <h3 className="text-lg font-semibold text-zinc-200 mb-4">Shadow Cast Typewriter</h3>
      <Typewriter_16 
        text={text} 
        className="text-2xl text-white"
      />
      <div className="mt-4 text-sm text-zinc-300">
        Dynamic shadow casting while typing
      </div>
    </div>
  );
};

export default Typewriter16Example;