'use client';
import React from 'react';
import Typewriter_1 from '../_components/Typewriter_1';

const Typewriter1Example = () => {
  const text = "Welcome to the future of web development";
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-200 mb-4">Basic Typewriter</h3>
      <Typewriter_1 
        message={text} 
        className="text-2xl text-white" 
        cursorColor="#ffffff"
      />
      <div className="mt-4 text-sm text-gray-400">
        Simple typewriter effect with cursor animation
      </div>
    </div>
  );
};

export default Typewriter1Example;