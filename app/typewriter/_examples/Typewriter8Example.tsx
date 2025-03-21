'use client';
import React from 'react';
import Typewriter_8 from '../_components/Typewriter_8';

const Typewriter8Example = () => {
  const neonText = ["Bright Ideas Come to Life"];
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-900 rounded-lg">
      <h3 className="text-lg font-semibold text-pink-400 mb-4">Neon Typewriter</h3>
      <Typewriter_8 
        messages={neonText} 
        className="text-2xl"
        glowColor="rgba(255, 0, 255, 0.5)"
      />
      <div className="mt-4 text-sm text-pink-400">
        Neon glow effect with typing animation
      </div>
    </div>
  );
};

export default Typewriter8Example;