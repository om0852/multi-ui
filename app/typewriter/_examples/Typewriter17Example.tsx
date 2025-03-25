'use client';
import React from 'react';
import Typewriter_17 from '../_components/Typewriter_17';

const Typewriter17Example = () => {
  const text = "Letters attract and align";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-teal-900 to-emerald-900 rounded-lg">
      <h3 className="text-lg font-semibold text-teal-200 mb-4">Magnetic Typewriter</h3>
      <Typewriter_17 
        text={text} 
        className="text-2xl text-teal-300"
      />
      <div className="mt-4 text-sm text-teal-200">
        Magnetic attraction between characters
      </div>
    </div>
  );
};

export default Typewriter17Example;