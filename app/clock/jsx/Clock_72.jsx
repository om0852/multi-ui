'use client';
import React, { useEffect, useState } from 'react';

// Digit component with clean Scandinavian styling
const ScandinavianDigit = ({ digit, label }) => {
  return (
    <div className="relative">
      {/* Label (hours/minutes/seconds) */}
      {label && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-light text-gray-400 uppercase tracking-widest">
          {label}
        </div>
      )}
      
      {/* Digit display */}
      <div className="w-20 h-32 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center relative overflow-hidden">
        {/* Background texture (subtle wood grain) */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h35v35H0V0zm5 5h25v25H5V5zm5 5h15v15H10V10zm5 5h5v5h-5v-5zM40 5h25v25H40V5zm5 5h15v15H45V10zm5 5h5v5h-5v-5zM70 35H35v35h35V35zm-5 5H40v25h25V40zm-5 5H45v15h15V45zm-5 5h-5v5h5v-5zM30 40H5v25h25V40zm-5 5H10v15h15V45zm-5 5h-5v5h5v-5z'/%3E%3C/g%3E%3C/svg%3E')"
          }}
        ></div>
        
        {/* Actual digit */}
        <span className="text-5xl font-light text-gray-800">
          {digit}
        </span>
      </div>
    </div>
  );
};

// Small decorative dot separator
const Dot = ({ color = "bg-blue-200" }) => (
  <div className={`w-2 h-2 rounded-full ${color}`}></div>
);

const Clock_72 = () => {
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

  // Determine time of day to adjust color accents
  const isPastNoon = time.getHours() >= 12;
  const accentColor = !isPastNoon ? "bg-blue-200" : "bg-amber-200";
  
  return (
    <div className="bg-gray-50 p-14 rounded-xl shadow-sm relative overflow-hidden">
      {/* Top decorative bar */}
      <div className={`absolute top-0 inset-x-0 h-1.5 ${accentColor}`}></div>
      
      {/* Clock title */}
      <div className="mb-10 text-center">
        <h2 className="text-lg text-gray-400 font-light tracking-widest uppercase">
          {isPastNoon ? 'Afternoon' : 'Morning'}
        </h2>
      </div>
      
      {/* Clock display */}
      <div className="flex flex-col space-y-8">
        {/* Time display */}
        <div className="flex items-end justify-center space-x-6">
          {/* Hours */}
          <div className="flex space-x-2">
            <ScandinavianDigit digit={hours[0]} label="hour" />
            <ScandinavianDigit digit={hours[1]} />
          </div>
          
          {/* Separator */}
          <div className="flex flex-col space-y-2 mb-6">
            <Dot color={accentColor} />
            <Dot color={accentColor} />
          </div>
          
          {/* Minutes */}
          <div className="flex space-x-2">
            <ScandinavianDigit digit={minutes[0]} label="min" />
            <ScandinavianDigit digit={minutes[1]} />
          </div>
          
          {/* Separator */}
          <div className="flex flex-col space-y-2 mb-6">
            <Dot color={accentColor} />
            <Dot color={accentColor} />
          </div>
          
          {/* Seconds */}
          <div className="flex space-x-2">
            <ScandinavianDigit digit={seconds[0]} label="sec" />
            <ScandinavianDigit digit={seconds[1]} />
          </div>
        </div>
        
        {/* Date display */}
        <div className="flex justify-center mt-5">
          <div className="text-sm text-gray-400 font-light tracking-wider">
            {time.toLocaleDateString('en-US', { 
              weekday: 'long',
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom decorative elements */}
      <div className="flex justify-between mt-12">
        <div className={`w-20 h-0.5 ${accentColor} rounded-full`}></div>
        <div className={`w-10 h-0.5 bg-gray-200 rounded-full`}></div>
        <div className={`w-20 h-0.5 ${accentColor} rounded-full`}></div>
      </div>
    </div>
  );
};

export default Clock_72; 