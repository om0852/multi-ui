'use client';
import React from 'react';
import Typewriter_4 from '../_components/Typewriter_4';

const Typewriter4Example = () => {
  const commands = [
    "npm install @multiui/components",
    "Loading dependencies...",
    "Setup complete! Ready to code..."
  ];
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-black rounded-lg">
      <h3 className="text-lg font-semibold text-green-400 mb-4">Terminal Typewriter</h3>
      <Typewriter_4 
        commands={commands} 
        messages={commands} 
        className="font-mono text-green-500"
      />
      <div className="mt-4 text-sm text-green-400">
        Simulates terminal commands typing
      </div>
    </div>
  );
};

export default Typewriter4Example;