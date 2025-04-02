'use client';
import React, { useEffect, useState } from 'react';

const PaperDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 500);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-16 h-24 bg-white rounded-md shadow-md overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
           }}>
      </div>
      
      {/* Main digit cutout */}
      <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500"
           style={{ transform: isChanging ? 'translateY(-100%)' : 'translateY(0)' }}>
        <div className="relative text-5xl font-light text-transparent">
          {digit}
          {/* Shadow behind the cutout */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gray-100">
            <div className="text-5xl font-light text-transparent" 
                 style={{ 
                   WebkitTextStroke: '1px rgba(0,0,0,0.07)',
                   textShadow: 'inset 1px 1px 1px rgba(0,0,0,0.2)'
                 }}>
              {digit}
            </div>
          </div>
        </div>
      </div>
      
      {/* Previous digit sliding out */}
      <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500"
           style={{ transform: isChanging ? 'translateY(100%)' : 'translateY(0)' }}>
        <div className="relative text-5xl font-light text-transparent">
          {prevDigit}
          {/* Shadow behind the cutout */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gray-100">
            <div className="text-5xl font-light text-transparent" 
                 style={{ 
                   WebkitTextStroke: '1px rgba(0,0,0,0.07)',
                   textShadow: 'inset 1px 1px 1px rgba(0,0,0,0.2)'
                 }}>
              {prevDigit}
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle paper edge highlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-white"></div>
        <div className="absolute inset-y-0 left-0 w-px bg-white"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-200"></div>
        <div className="absolute inset-y-0 right-0 w-px bg-gray-200"></div>
      </div>
    </div>
  );
};

const Clock_59 = () => {
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
    <div className="bg-gray-50 p-10 rounded-xl shadow-lg relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-40 rounded-xl overflow-hidden pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23bbb' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>
      
      <div className="flex items-center space-x-5 justify-center">
        <div className="flex space-x-2">
          <PaperDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <PaperDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="flex flex-col space-y-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
        
        <div className="flex space-x-2">
          <PaperDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <PaperDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="flex flex-col space-y-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
        
        <div className="flex space-x-2">
          <PaperDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <PaperDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
      
      {/* Subtle drop shadow underneath */}
      <div className="absolute -bottom-6 inset-x-12 h-14 bg-black/5 blur-xl rounded-full -z-10"></div>
    </div>
  );
};

export default Clock_59; 