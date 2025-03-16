'use client';
import React from 'react';
import Typewriter_2 from '../_components/Typewriter_2';

const Typewriter2Example = () => {
  const words = [
    "Creative",
    "Dynamic",
    "Interactive",
    "Engaging",
    "Innovative"
  ];
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg">
      <h3 className="text-lg font-semibold text-blue-200 mb-4">Multi-Word Typewriter</h3>
      <div className="flex items-center text-2xl text-white">
        <span className="mr-2">We are</span>
        <Typewriter_2 message={words.join(' ')} className="text-blue-300" />
      </div>
      <div className="mt-4 text-sm text-blue-200">
        Cycles through multiple words with fade effect
      </div>
    </div>
  );
};

export default Typewriter2Example;