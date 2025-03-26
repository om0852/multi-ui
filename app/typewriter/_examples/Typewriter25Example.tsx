'use client';
import React from 'react';
import Typewriter_25 from '../_components/Typewriter_25';

const Typewriter25Example = () => {
  const text = "Typing in the rain";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-950 to-slate-900 rounded-lg">
      <h3 className="text-lg font-semibold text-blue-200 mb-4">Rain Drop Typewriter</h3>
      <Typewriter_25 
        text={text} 
        className="text-2xl text-white" 
      />
      <div className="mt-4 text-sm text-blue-200">
        Letters appear with rain drop effect
      </div>
    </div>
  );
};

export default Typewriter25Example;