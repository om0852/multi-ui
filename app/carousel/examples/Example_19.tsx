"use client";

import React, { useState } from 'react';
import Carousel from '../tsx/Carousel_19';

const Example_19 = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [interval, setInterval] = useState(5000);
  const [waveAmplitude, setWaveAmplitude] = useState(100);
  const [waveFrequency, setWaveFrequency] = useState(2);

  const slides = [
    <div key="1" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Wave Carousel</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Smooth wave animation effect</p>
      </div>
    </div>,
    <div key="2" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Adjustable Waves</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Control amplitude and frequency</p>
      </div>
    </div>,
    <div key="3" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ripple Effects</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Dynamic ripple animations</p>
      </div>
    </div>,
    <div key="4" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Wave Overlay</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">Beautiful wave overlay effects</p>
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
              className="w-4 h-4 accent-cyan-500"
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
              className="w-24 px-2 py-1 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white text-sm sm:text-base">Wave Amplitude:</label>
            <input
              type="number"
              value={waveAmplitude}
              onChange={(e) => setWaveAmplitude(Number(e.target.value))}
              min={50}
              max={150}
              step={10}
              className="w-20 px-2 py-1 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white text-sm sm:text-base">Wave Frequency:</label>
            <input
              type="number"
              value={waveFrequency}
              onChange={(e) => setWaveFrequency(Number(e.target.value))}
              min={0.5}
              max={4}
              step={0.5}
              className="w-20 px-2 py-1 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[1000px] mx-auto">
        <Carousel
          autoPlay={autoPlay}
          interval={interval}
          waveAmplitude={waveAmplitude}
          waveFrequency={waveFrequency}
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
};

export default Example_19; 