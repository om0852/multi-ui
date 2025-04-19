"use client";

import React from 'react';
import Carousel from '../tsx/Carousel_6';

const Example_6 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Scale Effect Carousel</h2>
      <div className="w-[500px]">
        <Carousel autoPlay interval={4000}>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-rose-500 to-pink-500 text-white p-6 text-center rounded-lg shadow-xl">
            <h3 className="text-2xl mb-2">Scale Transitions</h3>
            <p className="text-lg opacity-90">Watch elements scale beautifully</p>
          </div>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-pink-500 to-rose-500 text-white p-6 text-center rounded-lg shadow-xl">
            <h3 className="text-2xl mb-2">Smooth Scaling</h3>
            <p className="text-lg opacity-90">Experience fluid size transitions</p>
          </div>
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white p-6 text-center rounded-lg shadow-xl">
            <h3 className="text-2xl mb-2">Dynamic Content</h3>
            <p className="text-lg opacity-90">Engage with scaling animations</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Example_6; 