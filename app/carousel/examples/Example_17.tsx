"use client";

import React, { useState } from 'react';
import Carousel from '../tsx/Carousel_17';

const Example_17 = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [interval, setInterval] = useState(5000);
  const [floatAmplitude, setFloatAmplitude] = useState(20);

  const slides = [
    <div key="1" className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Floating Carousel</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Interactive floating animation with mouse movement</p>
      </div>
    </div>,
    <div key="2" className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Particle Effects</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Beautiful floating particles in the background</p>
      </div>
    </div>,
    <div key="3" className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-emerald-500 to-lime-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Adjustable Float</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Control the floating amplitude</p>
      </div>
    </div>,
    <div key="4" className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Smooth Transitions</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Elegant slide transitions with depth</p>
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
              className="w-4 h-4 accent-teal-500"
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
              className="w-24 px-2 py-1 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-teal-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white text-sm sm:text-base">Float Amplitude:</label>
            <input
              type="number"
              value={floatAmplitude}
              onChange={(e) => setFloatAmplitude(Number(e.target.value))}
              min={5}
              max={50}
              step={5}
              className="w-20 px-2 py-1 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-teal-500"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[1000px] mx-auto">
        <Carousel
          autoPlay={autoPlay}
          interval={interval}
          floatAmplitude={floatAmplitude}
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
};

export default Example_17; 