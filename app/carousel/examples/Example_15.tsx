"use client";

import React from 'react';
import Carousel from '../_components/Carousel_15';
import Image from 'next/image';

const Example_15 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">3D Float Carousel</h2>
      <Carousel autoPlay interval={4800} spread={400} tilt={45}>
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <Image
              src={`https://picsum.photos/seed/${1500 + item}/800/500`}
              alt={`Slide ${item}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item === 1 && "3D Float Effect"}
                  {item === 2 && "Depth Perception"}
                  {item === 3 && "Smooth Motion"}
                  {item === 4 && "Dynamic Flow"}
                  {item === 5 && "Spatial Design"}
                </h3>
                <p className="text-lg text-gray-200">
                  {item === 1 && "Experience stunning 3D floating transitions"}
                  {item === 2 && "Watch content move with depth perception"}
                  {item === 3 && "Enjoy smooth motion effects"}
                  {item === 4 && "Dynamic content flow with perspective"}
                  {item === 5 && "Spatial design with 3D transformations"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Example_15; 