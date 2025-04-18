"use client";

import React from 'react';
import Carousel from '../_components/Carousel_11';
import Image from 'next/image';

const Example_11 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-fuchsia-50 to-pink-50 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Flip Effect Carousel</h2>
      <Carousel autoPlay interval={4800}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative w-full h-full">
            <div className="absolute inset-0">
              <Image
                src={`https://picsum.photos/seed/${1100 + item}/800/500`}
                alt={`Slide ${item}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item === 1 && "Card Flip"}
                  {item === 2 && "Smooth Rotation"}
                  {item === 3 && "Dynamic Flipping"}
                  {item === 4 && "3D Transform"}
                </h3>
                <p className="text-lg text-gray-200">
                  {item === 1 && "Experience smooth card flip transitions"}
                  {item === 2 && "Watch content rotate with precision"}
                  {item === 3 && "Enjoy dynamic flipping animations"}
                  {item === 4 && "Transform content in 3D space"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Example_11; 