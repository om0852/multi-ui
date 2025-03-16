'use client';
import React from 'react';
import Typewriter_12 from '../_components/Typewriter_12';

const Typewriter12Example = () => {
  const text = "Particles form into letters";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-black rounded-lg">
      <h3 className="text-lg font-semibold text-purple-300 mb-4">Particle Typewriter</h3>
      <Typewriter_12 
        text={text} 
        className="text-2xl text-purple-400"
      />
      <div className="mt-4 text-sm text-purple-300">
        Letters form from floating particles
      </div>
    </div>
  );
};

export default Typewriter12Example;