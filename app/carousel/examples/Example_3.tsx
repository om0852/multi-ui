"use client";

import React from 'react';
import Carousel from '../_components/Carousel_3';

const Example_3 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Infinite Loop Carousel</h2>
      <div className="w-[500px]">
        <Carousel autoPlay interval={4000}>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6 text-center rounded-lg">
            <h3 className="text-2xl mb-2">Welcome to Carousel 3</h3>
            <p className="text-lg opacity-90">Experience infinite loop transitions</p>
          </div>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-violet-500 to-violet-600 text-white p-6 text-center rounded-lg">
            <h3 className="text-2xl mb-2">Smooth Animations</h3>
            <p className="text-lg opacity-90">Enjoy seamless content rotation</p>
          </div>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 text-center rounded-lg">
            <h3 className="text-2xl mb-2">Interactive Controls</h3>
            <p className="text-lg opacity-90">Navigate with intuitive controls</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Example_3; 