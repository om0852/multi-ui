"use client";

import React from 'react';
import Carousel from '../_components/Carousel_13';
import Image from 'next/image';

const Example_13 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Slide Effect Carousel</h2>
      <Carousel autoPlay interval={4700}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative w-full h-full">
            <div className="absolute inset-0">
              <Image
                src={`https://picsum.photos/seed/${1300 + item}/800/500`}
                alt={`Slide ${item}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item === 1 && "Smooth Sliding"}
                  {item === 2 && "Fluid Motion"}
                  {item === 3 && "Dynamic Flow"}
                  {item === 4 && "Seamless Transition"}
                </h3>
                <p className="text-lg text-gray-200">
                  {item === 1 && "Experience smooth sliding transitions"}
                  {item === 2 && "Watch content flow with precision"}
                  {item === 3 && "Enjoy dynamic sliding animations"}
                  {item === 4 && "Seamless content transitions"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Example_13; 