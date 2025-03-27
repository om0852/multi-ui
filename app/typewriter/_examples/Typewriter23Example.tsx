'use client';
import React from 'react';
import Typewriter_23 from '../_components/Typewriter_23';

const Typewriter23Example = () => {
  const text = "Letters fade into existence";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-emerald-900 to-teal-900 rounded-lg">
      <h3 className="text-lg font-semibold text-emerald-200 mb-4">Gradient Fade Typewriter</h3>
      <Typewriter_23 
        text={text} 
        className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200" 
      />
      <div className="mt-4 text-sm text-emerald-200">
        Gradient text with fade-in animation
      </div>
    </div>
  );
};

export default Typewriter23Example;