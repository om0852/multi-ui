"use client";

import React from 'react';
import Carousel from '../tsx/Carousel_7';

const Example_7 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Parallax Effect Carousel</h2>
      <div className="w-[500px]">
        <Carousel autoPlay interval={4500}>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-violet-500 to-purple-500 text-white p-6 text-center rounded-lg shadow-xl">
            <h3 className="text-2xl mb-2">Parallax Motion</h3>
            <p className="text-lg opacity-90">Experience depth with parallax effects</p>
          </div>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white p-6 text-center rounded-lg shadow-xl">
            <h3 className="text-2xl mb-2">Layered Animation</h3>
            <p className="text-lg opacity-90">Watch elements move independently</p>
          </div>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white p-6 text-center rounded-lg shadow-xl">
            <h3 className="text-2xl mb-2">Dynamic Movement</h3>
            <p className="text-lg opacity-90">Enjoy multi-layered transitions</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Example_7; 