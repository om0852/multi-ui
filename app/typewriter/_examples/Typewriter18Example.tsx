'use client';
import React from 'react';
import Typewriter_18 from '../_components/Typewriter_18';

const Typewriter18Example = () => {
  const text = "Pixels form into clarity";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-violet-900 to-fuchsia-900 rounded-lg">
      <h3 className="text-lg font-semibold text-violet-200 mb-4">Pixel Formation</h3>
      <Typewriter_18 
        text={text} 
        className="text-2xl text-white"
      />
      <div className="mt-4 text-sm text-violet-200">
        Letters materialize from pixels
      </div>
    </div>
  );
};

export default Typewriter18Example;