'use client';
import React from 'react';
import Typewriter_7 from '../_components/Typewriter_7';

const Typewriter7Example = () => {
  const paragraphs = [
    "First line of the story...",
    "Second line appears after...",
    "And finally, the conclusion."
  ];
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg">
      <h3 className="text-lg font-semibold text-indigo-200 mb-4">Multi-line Typewriter</h3>
      <Typewriter_7 
        messages={paragraphs} 
        className="text-xl text-white space-y-4"
      />
      <div className="mt-4 text-sm text-indigo-200">
        Types multiple lines with customizable delays
      </div>
    </div>
  );
};

export default Typewriter7Example;