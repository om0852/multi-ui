'use client';
import React, { useEffect, useState } from 'react';

// SVG elements for weather display
const WeatherElements = {
  Cloud: ({ className = "", style = {} }) => (
    <div 
      className={`absolute ${className}`}
      style={{
        width: '50px',
        height: '20px',
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.7)',
        boxShadow: '0 8px 5px rgba(0, 0, 0, 0.1)',
        ...style
      }}
    >
      <div 
        style={{
          width: '20px',
          height: '20px',
          position: 'absolute',
          top: '-10px',
          left: '10px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.7)'
        }}
      />
      <div 
        style={{
          width: '25px',
          height: '25px',
          position: 'absolute',
          top: '-15px',
          right: '10px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.7)'
        }}
      />
    </div>
  ),
  
  Sun: ({ className = "" }) => (
    <div className={`${className} absolute`}>
      <div className="w-16 h-16 bg-yellow-300 rounded-full shadow-lg animate-pulse"
           style={{ boxShadow: '0 0 20px rgba(253, 224, 71, 0.7)' }}>
      </div>
      {/* Sun rays */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="absolute bg-yellow-300 w-1 h-5 left-1/2 -translate-x-1/2 animate-pulse"
          style={{ 
            transformOrigin: 'bottom center', 
            transform: `translateY(-18px) rotate(${i * 45}deg)`,
            boxShadow: '0 0 5px rgba(253, 224, 71, 0.7)'
          }}
        />
      ))}
    </div>
  ),
  
  Moon: ({ className = "" }) => (
    <div className={`${className} absolute w-12 h-12 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 shadow-inner`}
         style={{ boxShadow: 'inset -3px -3px 5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(255, 255, 255, 0.5)' }}>
      {/* Crater details */}
      <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-gray-300 opacity-70"></div>
      <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-gray-300 opacity-70"></div>
      <div className="absolute top-7 right-2 w-1.5 h-1.5 rounded-full bg-gray-300 opacity-70"></div>
    </div>
  ),
  
  Rain: ({ count = 10, className = "" }) => (
    <div className={`absolute ${className}`}>
      {[...Array(count)].map((_, i) => (
        <div 
          key={i}
          className="absolute bg-blue-300 rounded-full opacity-70"
          style={{
            width: '2px',
            height: `${5 + Math.random() * 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `rainFall ${0.5 + Math.random() * 0.7}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  ),
  
  Stars: ({ count = 20, className = "" }) => (
    <div className={`absolute ${className}`}>
      {[...Array(count)].map((_, i) => (
        <div 
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            opacity: 0.7 + Math.random() * 0.3,
            animation: `twinkle ${1 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  )
};

const WeatherDigit = ({ digit }) => {
  return (
    <div className="relative w-16 h-24 bg-sky-100/70 rounded-lg backdrop-blur-sm overflow-hidden shadow-lg border border-white/30">
      {/* Glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
      
      {/* Digit */}
      <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-sky-900">
        {digit}
      </div>
    </div>
  );
};

const Clock_63 = () => {
  const [time, setTime] = useState(new Date());
  const [weatherState, setWeatherState] = useState('day'); // day, sunset, night, rain
  
  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = new Date();
      setTime(newTime);
      
      // Change weather state based on hour
      const hour = newTime.getHours();
      if (hour >= 6 && hour < 17) {
        setWeatherState('day');
      } else if (hour >= 17 && hour < 19) {
        setWeatherState('sunset');
      } else {
        setWeatherState('night');
      }
      
      // Random rain every few minutes, using seconds as a random seed
      if (newTime.getSeconds() === 30) {
        setWeatherState(prev => prev === 'rain' ? 'day' : 'rain');
      }
      
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  // Determine background color based on weather state
  const getBgGradient = () => {
    switch (weatherState) {
      case 'day':
        return 'from-sky-400 to-blue-500';
      case 'sunset':
        return 'from-orange-400 via-pink-500 to-purple-600';
      case 'night':
        return 'from-indigo-900 via-blue-900 to-black';
      case 'rain':
        return 'from-gray-400 to-gray-600';
      default:
        return 'from-sky-400 to-blue-500';
    }
  };

  return (
    <div className={`bg-gradient-to-b ${getBgGradient()} p-8 rounded-xl shadow-2xl overflow-hidden relative min-h-[160px]`}>
      {/* Weather elements based on state */}
      {weatherState === 'day' && (
        <>
          <WeatherElements.Sun className="right-8 top-8" />
          <WeatherElements.Cloud className="left-12 top-10" style={{ transform: 'scale(0.8)' }} />
          <WeatherElements.Cloud className="right-20 bottom-12" style={{ transform: 'scale(0.6)' }} />
        </>
      )}
      
      {weatherState === 'sunset' && (
        <>
          <WeatherElements.Sun className="right-8 bottom-2" />
          <WeatherElements.Cloud className="left-12 top-6" style={{ background: 'rgba(251, 191, 36, 0.7)' }} />
          <WeatherElements.Cloud className="right-16 top-10" style={{ background: 'rgba(251, 146, 60, 0.7)' }} />
        </>
      )}
      
      {weatherState === 'night' && (
        <>
          <WeatherElements.Moon className="right-8 top-8" />
          <WeatherElements.Stars count={30} className="inset-0" />
          <WeatherElements.Cloud className="left-12 top-10" style={{ 
            background: 'rgba(30, 41, 59, 0.7)', 
            boxShadow: '0 8px 5px rgba(0, 0, 0, 0.2)' 
          }} />
        </>
      )}
      
      {weatherState === 'rain' && (
        <>
          <WeatherElements.Cloud className="left-6 top-6" style={{ transform: 'scale(1.2)' }} />
          <WeatherElements.Cloud className="right-10 top-8" style={{ transform: 'scale(0.9)' }} />
          <WeatherElements.Cloud className="left-24 top-12" style={{ transform: 'scale(0.8)' }} />
          <WeatherElements.Rain count={30} className="inset-x-0 top-16 bottom-0" />
        </>
      )}
      
      {/* Time display */}
      <div className="relative z-10 flex items-center justify-center space-x-3 mt-6">
        <div className="flex space-x-2">
          <WeatherDigit digit={hours[0]} />
          <WeatherDigit digit={hours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-white">:</div>
        
        <div className="flex space-x-2">
          <WeatherDigit digit={minutes[0]} />
          <WeatherDigit digit={minutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-white">:</div>
        
        <div className="flex space-x-2">
          <WeatherDigit digit={seconds[0]} />
          <WeatherDigit digit={seconds[1]} />
        </div>
      </div>
      
      {/* Weather indicator */}
      <div className="absolute bottom-2 left-0 right-0 text-center text-white text-xs font-medium">
        {weatherState === 'day' && '☀️ Clear Day'}
        {weatherState === 'sunset' && '🌇 Sunset'}
        {weatherState === 'night' && '🌙 Clear Night'}
        {weatherState === 'rain' && '🌧️ Rain Showers'}
      </div>
    </div>
  );
};

export default Clock_63;

// Add to globals.css:
/*
@keyframes rainFall {
  0% { transform: translateY(0); }
  100% { transform: translateY(100px); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
*/ 