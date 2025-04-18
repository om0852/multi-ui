"use client";

import React, { useState } from 'react';
import Carousel from '../_components/Carousel_20';

const Example_20 = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [interval, setInterval] = useState(5000);
  const [segments, setSegments] = useState(8);
  const [rotationSpeed, setRotationSpeed] = useState(2);

  const slides = [
    <div key="1" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Kaleidoscope Carousel</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Mesmerizing kaleidoscope animation</p>
      </div>
    </div>,
    <div key="2" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Adjustable Segments</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Control the kaleidoscope pattern</p>
      </div>
    </div>,
    <div key="3" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Mirror Effects</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Beautiful reflections and glass effects</p>
      </div>
    </div>,
    <div key="4" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Dynamic Rotation</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Adjustable rotation speed</p>
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
              className="w-4 h-4 accent-fuchsia-500"
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
              className="w-24 px-2 py-1 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-fuchsia-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white text-sm sm:text-base">Segments:</label>
            <input
              type="number"
              value={segments}
              onChange={(e) => setSegments(Number(e.target.value))}
              min={4}
              max={16}
              step={2}
              className="w-20 px-2 py-1 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-fuchsia-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white text-sm sm:text-base">Speed:</label>
            <input
              type="number"
              value={rotationSpeed}
              onChange={(e) => setRotationSpeed(Number(e.target.value))}
              min={0.5}
              max={5}
              step={0.5}
              className="w-20 px-2 py-1 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-fuchsia-500"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[1000px] mx-auto">
        <Carousel
          autoPlay={autoPlay}
          interval={interval}
          segments={segments}
          rotationSpeed={rotationSpeed}
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
};

export default Example_20; 