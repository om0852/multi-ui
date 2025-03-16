'use client';
import React from 'react';
import Typewriter_11 from '../_components/Typewriter_11';

const Typewriter11Example = () => {
  const text = "Explore the third dimension";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg">
      <h3 className="text-lg font-semibold text-slate-200 mb-4">3D Perspective Typewriter</h3>
      <div className="perspective-[1000px]">
        <Typewriter_11 
          text={text} 
          className="text-2xl text-white"
        />
      </div>
      <div className="mt-4 text-sm text-slate-300">
        Letters appear with 3D perspective animation
      </div>
    </div>
  );
};

export default Typewriter11Example;