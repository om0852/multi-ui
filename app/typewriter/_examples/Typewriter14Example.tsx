'use client';
import React from 'react';
import Typewriter_14 from '../_components/Typewriter_14';

const Typewriter14Example = () => {
  const text = "Holographic projection active";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-cyan-900 to-blue-900 rounded-lg">
      <h3 className="text-lg font-semibold text-cyan-200 mb-4">Holographic Typewriter</h3>
      <Typewriter_14 
        text={text} 
        className="text-2xl"
      />
      <div className="mt-4 text-sm text-cyan-200">
        Holographic projection with light refraction
      </div>
    </div>
  );
};

export default Typewriter14Example;