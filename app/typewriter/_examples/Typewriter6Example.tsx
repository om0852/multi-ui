'use client';
import React from 'react';
import Typewriter_6 from '../_components/Typewriter_6';

const Typewriter6Example = () => {
  const hackerText = "Accessing mainframe... Decrypting data... Access granted.";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-black rounded-lg border border-green-500/20">
      <h3 className="text-lg font-semibold text-green-400 mb-4">Matrix Typewriter</h3>
      <Typewriter_6 
        text={hackerText} 
        className="text-2xl font-mono text-green-500"
        speed={50}
      />
      <div className="mt-4 text-sm text-green-400">
        Matrix-style typewriter with character scramble effect
      </div>
    </div>
  );
};

export default Typewriter6Example;