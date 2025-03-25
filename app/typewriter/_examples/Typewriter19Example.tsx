'use client';
import React from 'react';
import Typewriter_19 from '../_components/Typewriter_19';

const Typewriter19Example = () => {
  const text = "Waves of typography in motion";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-sky-900 to-indigo-900 rounded-lg">
      <h3 className="text-lg font-semibold text-sky-200 mb-4">Wave Distortion</h3>
      <Typewriter_19 
        text={text} 
        className="text-2xl text-white"
      />
      <div className="mt-4 text-sm text-sky-200">
        Characters flow with wave distortion
      </div>
    </div>
  );
};

export default Typewriter19Example;