'use client';
import React from 'react';
import Typewriter_24 from '../_components/Typewriter_24';

const Typewriter24Example = () => {
  const text = "Letters bounce into place";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-amber-900 to-orange-900 rounded-lg">
      <h3 className="text-lg font-semibold text-amber-200 mb-4">Bouncing Typewriter</h3>
      <Typewriter_24 
        text={text} 
        className="text-2xl text-white" 
      />
      <div className="mt-4 text-sm text-amber-200">
        Characters appear with bounce animation
      </div>
    </div>
  );
};

export default Typewriter24Example;