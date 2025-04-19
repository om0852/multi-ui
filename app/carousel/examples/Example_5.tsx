"use client";

import React from 'react';
import Carousel from '../tsx/Carousel_5';

const Example_5 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Fade Effect Carousel</h2>
      <div className="w-[500px]">
        <Carousel autoPlay interval={5000}>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-6 text-center rounded-lg shadow-xl">
            <h3 className="text-2xl mb-2">Smooth Fading</h3>
            <p className="text-lg opacity-90">Experience elegant fade transitions</p>
          </div>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-teal-500 to-green-500 text-white p-6 text-center rounded-lg shadow-xl">
            <h3 className="text-2xl mb-2">Seamless Flow</h3>
            <p className="text-lg opacity-90">Watch content blend smoothly</p>
          </div>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 text-center rounded-lg shadow-xl">
            <h3 className="text-2xl mb-2">Elegant Design</h3>
            <p className="text-lg opacity-90">Enjoy polished transitions</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Example_5; 