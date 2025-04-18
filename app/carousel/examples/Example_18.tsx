"use client";

import React, { useState } from 'react';
import Carousel from '../_components/Carousel_18';

const Example_18 = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [interval, setInterval] = useState(5000);
  const [spiralRadius, setSpiralRadius] = useState(300);
  const [spiralTurns, setSpiralTurns] = useState(1.5);

  const slides = [
    <div key="1" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Spiral Carousel</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Unique spiral animation effect</p>
      </div>
    </div>,
    <div key="2" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Adjustable Spiral</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Control radius and turns</p>
      </div>
    </div>,
    <div key="3" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Glass Effect</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Beautiful glass morphism design</p>
      </div>
    </div>,
    <div key="4" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Spiral Trail</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Dynamic spiral trail effects</p>
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
              className="w-4 h-4 accent-violet-500"
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
              className="w-24 px-2 py-1 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-violet-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white text-sm sm:text-base">Spiral Radius:</label>
            <input
              type="number"
              value={spiralRadius}
              onChange={(e) => setSpiralRadius(Number(e.target.value))}
              min={200}
              max={500}
              step={50}
              className="w-20 px-2 py-1 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-violet-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white text-sm sm:text-base">Spiral Turns:</label>
            <input
              type="number"
              value={spiralTurns}
              onChange={(e) => setSpiralTurns(Number(e.target.value))}
              min={0.5}
              max={3}
              step={0.5}
              className="w-20 px-2 py-1 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-violet-500"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[1000px] mx-auto">
        <Carousel
          autoPlay={autoPlay}
          interval={interval}
          spiralRadius={spiralRadius}
          spiralTurns={spiralTurns}
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
};

export default Example_18; 