'use client';
import React, { useEffect, useState } from 'react';

const Cloud = ({ scale = 1, speed = 20, delay = 0 }: { scale?: number; speed?: number; delay?: number }) => (
  <div
    className="absolute"
    style={{
      animation: `float ${speed}s linear infinite`,
      animationDelay: `${delay}s`,
      transform: `scale(${scale})`,
    }}
  >
    <div className="relative w-16 h-8">
      <div className="absolute bottom-0 left-4 w-8 h-4 bg-white rounded-full" />
      <div className="absolute bottom-2 left-2 w-6 h-4 bg-white rounded-full" />
      <div className="absolute bottom-2 left-8 w-6 h-4 bg-white rounded-full" />
      <div className="absolute bottom-4 left-4 w-8 h-4 bg-white rounded-full" />
    </div>
  </div>
);

const WeatherDigit = ({ value }: { value: string }) => {
  const [isThundering, setIsThundering] = useState(false);

  useEffect(() => {
    const thunderInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setIsThundering(true);
        setTimeout(() => setIsThundering(false), 200);
      }
    }, 3000);

    return () => clearInterval(thunderInterval);
  }, []);

  return (
    <div className="relative w-16 h-24">
      {/* Sky background */}
      <div
        className="absolute inset-0 rounded-lg overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #1e40af, #3b82f6)',
          boxShadow: isThundering
            ? '0 0 20px rgba(255, 255, 255, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.8)'
            : 'none',
          transition: 'box-shadow 0.2s ease',
        }}
      >
        {/* Clouds */}
        <Cloud scale={0.6} speed={15} delay={0} />
        <Cloud scale={0.5} speed={20} delay={5} />
        <Cloud scale={0.4} speed={25} delay={10} />

        {/* Rain drops */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-2 bg-blue-200 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `rain ${1 + Math.random()}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Lightning effect */}
        {isThundering && (
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.8) 45%, transparent 50%)',
              animation: 'lightning 0.2s ease',
            }}
          />
        )}
      </div>

      {/* Number display */}
      <div
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold"
        style={{
          color: isThundering ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
          textShadow: isThundering
            ? '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)'
            : '0 2px 4px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.2s ease',
        }}
      >
        {value}
      </div>

      {/* Glass effect overlay */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%)',
          boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
  );
};

const Clock_63 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 p-12 rounded-xl shadow-2xl overflow-hidden">
      {/* Background clouds */}
      <div className="absolute inset-0 opacity-20">
        <Cloud scale={1.5} speed={30} delay={0} />
        <Cloud scale={1.2} speed={25} delay={10} />
        <Cloud scale={1.3} speed={35} delay={20} />
      </div>

      <div className="relative flex items-center space-x-4">
        <div className="flex space-x-2">
          <WeatherDigit value={hours[0]} />
          <WeatherDigit value={hours[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse opacity-80" />
          <div className="w-2 h-2 rounded-full bg-white animate-pulse opacity-80" />
        </div>

        <div className="flex space-x-2">
          <WeatherDigit value={minutes[0]} />
          <WeatherDigit value={minutes[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse opacity-80" />
          <div className="w-2 h-2 rounded-full bg-white animate-pulse opacity-80" />
        </div>

        <div className="flex space-x-2">
          <WeatherDigit value={seconds[0]} />
          <WeatherDigit value={seconds[1]} />
        </div>
      </div>

      {/* Rain overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-4 bg-blue-200 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `rain ${1 + Math.random()}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Clock_63; 