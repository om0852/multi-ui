'use client';
import React from 'react';
import Typewriter_10 from '../_components/Typewriter_10';

const Typewriter10Example = () => {
  const liquidText = ["Flow like water..."];
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
      <h3 className="text-lg font-semibold text-blue-100 mb-4">Liquid Typewriter</h3>
      <Typewriter_10 
        messages={liquidText} 
        className="text-2xl text-white"
      />
      <div className="mt-4 text-sm text-blue-100">
        Liquid droplet effect while typing
      </div>
    </div>
  );
};

export default Typewriter10Example;