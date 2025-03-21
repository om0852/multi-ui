'use client';
import React from 'react';
import Typewriter_3 from '../_components/Typewriter_3';

const Typewriter3Example = () => {
  const text = "Colors bring life to typography";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Rainbow Typewriter</h3>
      <Typewriter_3 messages={[text]} className="text-2xl" typingSpeed={50} />
      <div className="mt-4 text-sm text-gray-600">
        Rainbow gradient animation while typing
      </div>
    </div>
  );
};

export default Typewriter3Example;