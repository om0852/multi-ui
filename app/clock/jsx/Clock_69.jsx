'use client';
import React, { useEffect, useState } from 'react';

// Animated airplane that flies across the clock
const Airplane = ({ isFlying }) => {
  return (
    <div 
      className={`absolute transition-all duration-[4000ms] ease-in-out z-10 ${
        isFlying ? 'left-full -translate-x-full rotate-0' : '-left-16 rotate-12'
      }`}
      style={{ top: '40%' }}
    >
      <div className="relative w-12 h-8">
        {/* Airplane body */}
        <div className="absolute top-2 left-3 w-8 h-3 bg-white rounded-full"></div>
        
        {/* Airplane nose */}
        <div className="absolute top-2 left-10 w-2 h-3 bg-white rounded-r-full"></div>
        
        {/* Airplane tail */}
        <div className="absolute top-0 left-1 w-2 h-5 bg-white rounded-t-sm"></div>
        
        {/* Airplane wings */}
        <div className="absolute top-3 left-4 w-6 h-1.5 bg-white -skew-x-12"></div>
        <div className="absolute top-2.5 left-4 w-6 h-1.5 bg-white skew-x-12"></div>
        
        {/* Airplane windows */}
        <div className="absolute top-2.5 left-5 w-0.5 h-0.5 bg-blue-500 rounded-full"></div>
        <div className="absolute top-2.5 left-6.5 w-0.5 h-0.5 bg-blue-500 rounded-full"></div>
        <div className="absolute top-2.5 left-8 w-0.5 h-0.5 bg-blue-500 rounded-full"></div>
        
        {/* Airplane trail */}
        <div className="absolute top-3 -left-12 w-12 h-1 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
};

// Travel destination card for each digit
const DestinationDigit = ({ digit, city, code }) => {
  return (
    <div className="relative w-16 h-24 bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
      {/* Top color bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-blue-500"></div>
      
      {/* Boarding pass look */}
      <div className="absolute top-3 inset-x-0 h-5 flex items-center justify-center bg-blue-50 border-y border-dashed border-blue-200">
        <div className="text-xs font-mono text-blue-600">{code}</div>
      </div>
      
      {/* Main digit */}
      <div className="absolute top-8 inset-x-0 h-10 flex items-center justify-center">
        <div className="text-3xl font-bold text-gray-800">{digit}</div>
      </div>
      
      {/* City name */}
      <div className="absolute bottom-0 inset-x-0 h-6 bg-blue-50 border-t border-blue-200 flex items-center justify-center">
        <div className="text-[8px] font-medium text-gray-600 uppercase tracking-wider">{city}</div>
      </div>
      
      {/* Decorative corner cuts */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-gray-100 rounded-br-full"></div>
      <div className="absolute top-0 right-0 w-2 h-2 bg-gray-100 rounded-bl-full"></div>
    </div>
  );
};

// World clock with multi-timezone display
const Clock_69 = () => {
  const [time, setTime] = useState(new Date());
  const [isFlying, setIsFlying] = useState(false);
  
  // Cities and their airport codes for each digit position
  const cities = [
    { name: "New York", code: "JFK" },
    { name: "London", code: "LHR" },
    { name: "Tokyo", code: "HND" },
    { name: "Paris", code: "CDG" },
    { name: "Dubai", code: "DXB" },
    { name: "Sydney", code: "SYD" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    // Trigger airplane animation periodically
    const flightTimer = setInterval(() => {
      setIsFlying(true);
      setTimeout(() => setIsFlying(false), 4000);
    }, 20000);
    
    // Initial flight
    setTimeout(() => {
      setIsFlying(true);
      setTimeout(() => setIsFlying(false), 4000);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(flightTimer);
    };
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-8 rounded-xl shadow-xl border border-blue-200 relative overflow-hidden">
      {/* World map background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cpath fill='%233b82f6' d='M143.5,15.5c-26.8,2.5-44.9,7.8-44.9,14c0,4.9,10.5,9.3,27.5,12.4c-13.1,1.3-24.3,3.4-32.5,6.2c-5.5,1.9-9.9,4-12.8,6.5 c-1.2-2.9-1.8-6-1.8-9.1c0-13.7,11-24.7,24.7-24.7c10.9,0,20.1,7,23.4,16.7c0.7-0.9,1.8-1.6,3.3-2.1c3.2-1.1,7.8-1.7,13-1.7 c0-6,0.5-11.7,1.5-16.8c-0.6,0.1-1.3,0.1-1.9,0.1C147.1,16.8,145.2,16.3,143.5,15.5z M324.5,42.2c0-0.5,0-0.9,0-1.4 c-2.4-0.4-6.6-0.7-11.1-0.7c0.4,1,0.6,1.9,0.6,2.9c0,4.9-8.1,14.9-42.7,14.9c-12.3,0-22.8-0.4-30.7-1.1c-0.6,3.3-0.9,6.8-0.9,10.3 c1.6,0.1,3.3,0.1,5,0.1c36.4,0,63.2-2.2,68.1-14.8c2.2-5.6,5.1-10.7,8.5-15.2C323.7,39.2,324.5,40.8,324.5,42.2z M285.4,21.4 c0.7-0.1,1.4-0.2,2.2-0.2c-7.8-1.1-16-1.7-24.5-1.7c-9.8,0-19.2,0.8-28,2.3c-1.7,1.7-3.2,3.5-4.6,5.4c15.2-2.4,31.9-3.7,49.3-3.7 c4.1,0,8.2,0.1,12.2,0.2C289.2,22.6,287.2,21.9,285.4,21.4z M81.7,102.5c-5.7,0-11.1,0.1-16.2,0.4c-1.5,3.4-2.9,6.9-4.3,10.5 c-1.4,3.6-2.7,7.2-3.9,10.8c8.3-0.2,17.4-0.3,27.2-0.3c9.2,0,18,0.1,26.1,0.2c-0.3-7.3-0.5-14.9-0.5-22.6c0-3.1,0-6.1,0.1-9.1 C100.1,96.4,89.8,99.5,81.7,102.5z M28.5,65.1c-9.3,2.3-17.4,4.7-24.1,7.2c-2.3,14.8-3.7,30-3.7,45.7c0,10.1,0.5,20,1.5,29.7 c10.3-3.7,24.1-6.9,40.5-9.4c-1.9-11.1-3-22.9-3-35c0-13.2,1.1-25.9,3.3-37.9C37.5,65.3,32.6,65.2,28.5,65.1z M91.8,46.8 c2.5-4.7,4.6-8.9,6.2-12.5c-7.4-1.6-10.3-4.1-10.3-6.3c0-3.3,6.8-6.7,19.8-9.1c-9.2-5.3-19.9-8.3-31.2-8.3 c-31.3,0-57.1,22.8-62.1,52.7c20.9-6.8,56-13.1,96.7-16.8C104.7,46.7,98.3,46.8,91.8,46.8z'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      ></div>
      
      {/* Horizontal line representing flight path */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200"></div>
      
      {/* Animated airplane */}
      <Airplane isFlying={isFlying} />
      
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-blue-900 font-medium">WORLD TRAVEL CLOCK</h2>
        <div className="text-xs text-blue-500">Universal Time Coordinated</div>
      </div>
      
      {/* Clock Display */}
      <div className="flex items-center justify-center space-x-4">
        {/* Hours */}
        <div className="flex space-x-2">
          <DestinationDigit digit={hours[0]} city={cities[0].name} code={cities[0].code} />
          <DestinationDigit digit={hours[1]} city={cities[1].name} code={cities[1].code} />
        </div>
        
        {/* Separator */}
        <div className="text-blue-800 text-2xl font-mono">:</div>
        
        {/* Minutes */}
        <div className="flex space-x-2">
          <DestinationDigit digit={minutes[0]} city={cities[2].name} code={cities[2].code} />
          <DestinationDigit digit={minutes[1]} city={cities[3].name} code={cities[3].code} />
        </div>
        
        {/* Separator */}
        <div className="text-blue-800 text-2xl font-mono">:</div>
        
        {/* Seconds */}
        <div className="flex space-x-2">
          <DestinationDigit digit={seconds[0]} city={cities[4].name} code={cities[4].code} />
          <DestinationDigit digit={seconds[1]} city={cities[5].name} code={cities[5].code} />
        </div>
      </div>
      
      {/* Flight information panel */}
      <div className="mt-6 flex justify-center">
        <div className="bg-blue-600 px-4 py-1 rounded-lg shadow text-xs text-white font-mono flex items-center">
          <div className="mr-2 h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
          FLIGHT STATUS: ON TIME
        </div>
      </div>
    </div>
  );
};

export default Clock_69; 