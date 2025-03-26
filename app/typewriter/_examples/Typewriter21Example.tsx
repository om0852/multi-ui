'use client';
import React from 'react';
import Typewriter_21 from '../_components/Typewriter_21';

const Typewriter21Example = () => {
  const text = "Each letter spins into place";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-indigo-950 to-violet-950 rounded-lg">
      <h3 className="text-lg font-semibold text-indigo-200 mb-4">3D Rotation Typewriter</h3>
      <Typewriter_21 
        text={text} 
        className="text-2xl text-white perspective-[1000px]" 
      />
      <div className="mt-4 text-sm text-indigo-200">
        Letters rotate in 3D space while typing
      </div>
    </div>
  );
};

export default Typewriter21Example;