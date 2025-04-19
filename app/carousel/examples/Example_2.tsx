"use client";

import React from 'react';
import Carousel from '../tsx/Carousel_2';

const Example_2 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Drag & Auto-Play Carousel</h2>
      <div className="w-[500px]">
        <Carousel autoPlay interval={5000}>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 text-center rounded-lg">
            <h3 className="text-2xl mb-2">Welcome to Carousel 2</h3>
            <p className="text-lg opacity-90">Experience smooth transitions and beautiful animations</p>
          </div>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-green-500 to-green-600 text-white p-6 text-center rounded-lg">
            <h3 className="text-2xl mb-2">Interactive Design</h3>
            <p className="text-lg opacity-90">Enjoy seamless navigation and elegant effects</p>
          </div>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 text-center rounded-lg">
            <h3 className="text-2xl mb-2">Customizable Content</h3>
            <p className="text-lg opacity-90">Add your own images and content with ease</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Example_2; 