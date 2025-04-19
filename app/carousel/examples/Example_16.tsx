"use client";

import React, { useState } from 'react';
import Carousel from '../tsx/Carousel_16';

const Example_16 = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [interval, setInterval] = useState(5000);
  const [rotationAxis, setRotationAxis] = useState<"X" | "Y" | "Z">("Y");

  const slides = [
    <div key="1" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Welcome to 3D Carousel</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Experience smooth 3D transitions</p>
      </div>
    </div>,
    <div key="2" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Customizable Rotation</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Try different rotation axes!</p>
      </div>
    </div>,
    <div key="3" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-500 to-orange-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Interactive Controls</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Adjust speed and perspective</p>
      </div>
    </div>,
    <div key="4" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Responsive Design</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Looks great on all devices</p>
      </div>
    </div>
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-lg mx-auto mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center gap-2">
            <label className="text-white text-sm sm:text-base">Auto Play:</label>
            <input
              type="checkbox"
              checked={autoPlay}
              onChange={(e) => setAutoPlay(e.target.checked)}
              className="w-4 h-4 accent-purple-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white text-sm sm:text-base">Interval (ms):</label>
            <input
              type="number"
              value={interval}
              onChange={(e) => setInterval(Number(e.target.value))}
              min={1000}
              step={500}
              className="w-24 px-2 py-1 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white text-sm sm:text-base">Rotation Axis:</label>
            <select
              value={rotationAxis}
              onChange={(e) => setRotationAxis(e.target.value as "X" | "Y" | "Z")}
              className="px-2 py-1 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-purple-500"
            >
              <option value="X">X</option>
              <option value="Y">Y</option>
              <option value="Z">Z</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[1000px] mx-auto">
        <Carousel
          autoPlay={autoPlay}
          interval={interval}
          rotationAxis={rotationAxis}
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
};

export default Example_16; 