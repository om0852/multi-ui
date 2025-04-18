"use client";

import React from 'react';
import Carousel from '../_components/Carousel_9';
import Image from 'next/image';

const Example_9 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Perspective Stack Carousel</h2>
      <Carousel autoPlay interval={4500} stackCount={3}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative w-full h-full">
            <div className="absolute inset-0">
              <Image
                src={`https://picsum.photos/seed/${900 + item}/800/500`}
                alt={`Slide ${item}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item === 1 && "Perspective Shift"}
                  {item === 2 && "3D Rotation"}
                  {item === 3 && "Spatial Movement"}
                  {item === 4 && "Depth Effects"}
                </h3>
                <p className="text-lg text-gray-200">
                  {item === 1 && "Experience dynamic perspective transitions"}
                  {item === 2 && "Watch content rotate in three dimensions"}
                  {item === 3 && "Enjoy depth-based slide transitions"}
                  {item === 4 && "Immersive carousel with perspective depth"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Example_9; 