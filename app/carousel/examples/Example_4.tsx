"use client";

import React from 'react';
import Carousel from '../_components/Carousel_4';

const Example_4 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">3D Effect Carousel</h2>
      <div className="w-[500px]">
        <Carousel autoPlay interval={4500}>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 text-center rounded-lg shadow-xl">
            <h3 className="text-2xl mb-2">3D Transitions</h3>
            <p className="text-lg opacity-90">Experience stunning 3D carousel effects</p>
          </div>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-cyan-500 to-teal-500 text-white p-6 text-center rounded-lg shadow-xl">
            <h3 className="text-2xl mb-2">Dynamic Animations</h3>
            <p className="text-lg opacity-90">Watch content transform in 3D space</p>
          </div>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-teal-500 to-emerald-500 text-white p-6 text-center rounded-lg shadow-xl">
            <h3 className="text-2xl mb-2">Interactive Design</h3>
            <p className="text-lg opacity-90">Engage with immersive transitions</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Example_4; 