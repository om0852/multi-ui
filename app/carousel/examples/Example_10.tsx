"use client";

import React from 'react';
import Carousel from '../_components/Carousel_10';
import Image from 'next/image';

const Example_10 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 to-violet-50 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Cube Effect Carousel</h2>
      <Carousel autoPlay interval={5000}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative w-full h-full">
            <div className="absolute inset-0">
              <Image
                src={`https://picsum.photos/seed/${1000 + item}/800/500`}
                alt={`Slide ${item}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item === 1 && "Cube Rotation"}
                  {item === 2 && "3D Transform"}
                  {item === 3 && "Spatial Effects"}
                  {item === 4 && "Dynamic Movement"}
                </h3>
                <p className="text-lg text-gray-200">
                  {item === 1 && "Experience stunning cube rotation transitions"}
                  {item === 2 && "Watch content transform in 3D space"}
                  {item === 3 && "Enjoy immersive spatial animations"}
                  {item === 4 && "Dynamic movement with depth perception"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Example_10; 