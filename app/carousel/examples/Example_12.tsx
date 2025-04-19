"use client";

import React from 'react';
import Carousel from '../tsx/Carousel_12';
import Image from 'next/image';

const Example_12 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Zoom Effect Carousel</h2>
      <Carousel autoPlay interval={4600}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative w-full h-full">
            <div className="absolute inset-0">
              <Image
                src={`https://picsum.photos/seed/${1200 + item}/800/500`}
                alt={`Slide ${item}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item === 1 && "Zoom Transition"}
                  {item === 2 && "Scale Effect"}
                  {item === 3 && "Dynamic Scaling"}
                  {item === 4 && "Smooth Zoom"}
                </h3>
                <p className="text-lg text-gray-200">
                  {item === 1 && "Experience smooth zoom transitions"}
                  {item === 2 && "Watch content scale with precision"}
                  {item === 3 && "Enjoy dynamic scaling animations"}
                  {item === 4 && "Seamless zoom effects"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Example_12; 