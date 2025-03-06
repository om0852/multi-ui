"use client";

import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  CarouselNext,
  CarouselPrevious,
} from '../_components/Carousel_1';

const Example_8 = () => {
  const [transitionEffect, setTransitionEffect] = useState(1);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="mb-4">
        <label className="mr-2">Select Transition Effect:</label>
        <select
          value={transitionEffect}
          onChange={(e) => setTransitionEffect(Number(e.target.value))}
        >
          <option value={1}>Effect 1</option>
          <option value={2}>Effect 2</option>
          <option value={3}>Effect 3</option>
          <option value={4}>Effect 4</option>
          <option value={5}>Effect 5</option>
        </select>
      </div>
      <Carousel className="w-[500px] h-[300px] bg-white shadow-lg rounded-lg relative">
        <CarouselContent transitionEffect={transitionEffect}>
          <CarouselItem>
            <div className="flex flex-col items-center justify-center h-full bg-blue-500 text-white text-xl font-bold">
              Slide 1: Welcome to Carousel 8
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col items-center justify-center h-full bg-green-500 text-white text-xl font-bold">
              Slide 2: Enjoy the smooth transitions!
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col items-center justify-center h-full bg-purple-500 text-white text-xl font-bold">
              Slide 3: Add your own images!
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="text-white bg-black px-4 py-2 rounded">
          &lt;
        </CarouselPrevious>
        <CarouselNext className="text-white bg-black px-4 py-2 rounded">
          &gt;
        </CarouselNext>
        <CarouselDots className="absolute bottom-4 left-1/2 transform -translate-x-1/2" />
      </Carousel>
    </div>
  );
};

export default Example_8; 