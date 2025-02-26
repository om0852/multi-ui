'use client';
import React, { useEffect, useState } from 'react';

const CubeDigit = ({ value, prevValue }: { value: string; prevValue: string }) => {
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsRotating(true);
      const timer = setTimeout(() => setIsRotating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <div className="relative w-16 h-24 perspective-[1000px]">
      <div
        className={`relative w-full h-full transition-transform duration-600 transform-style-3d ${
          isRotating ? 'rotate-x-90' : ''
        }`}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-indigo-600 rounded-lg transform-style-3d backface-hidden"
          style={{
            transform: 'translateZ(30px)',
            boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          <span className="text-4xl font-bold text-white">{prevValue}</span>
        </div>

        {/* Top face */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-indigo-700 rounded-lg transform-style-3d backface-hidden origin-bottom"
          style={{
            transform: 'rotateX(-90deg) translateY(-30px) translateZ(30px)',
            boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          <span className="text-4xl font-bold text-white">{value}</span>
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-indigo-800 rounded-lg transform-style-3d backface-hidden"
          style={{
            transform: 'rotateX(180deg) translateZ(30px)',
            boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          <span className="text-4xl font-bold text-white transform rotate-180">{prevValue}</span>
        </div>

        {/* Bottom face */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-indigo-700 rounded-lg transform-style-3d backface-hidden origin-top"
          style={{
            transform: 'rotateX(90deg) translateY(30px) translateZ(30px)',
            boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          <span className="text-4xl font-bold text-white">{value}</span>
        </div>

        {/* Left face */}
        <div
          className="absolute inset-0 w-[30px] left-0 bg-indigo-700 transform-style-3d origin-right"
          style={{
            transform: 'rotateY(-90deg)',
            boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.2)',
          }}
        />

        {/* Right face */}
        <div
          className="absolute inset-0 w-[30px] right-0 bg-indigo-700 transform-style-3d origin-left"
          style={{
            transform: 'rotateY(90deg)',
            boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>

      {/* Reflection overlay */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%)',
        }}
      />
    </div>
  );
};

const Clock_56 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 to-purple-900 p-12 rounded-xl shadow-2xl overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        }}
      />

      <div className="relative flex items-center space-x-6">
        <div className="flex space-x-2">
          <CubeDigit value={hours[0]} prevValue={prevHours[0]} />
          <CubeDigit value={hours[1]} prevValue={prevHours[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
        </div>

        <div className="flex space-x-2">
          <CubeDigit value={minutes[0]} prevValue={prevMinutes[0]} />
          <CubeDigit value={minutes[1]} prevValue={prevMinutes[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
        </div>

        <div className="flex space-x-2">
          <CubeDigit value={seconds[0]} prevValue={prevSeconds[0]} />
          <CubeDigit value={seconds[1]} prevValue={prevSeconds[1]} />
        </div>
      </div>

      {/* Ambient light effect */}
      <div
        className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default Clock_56; 