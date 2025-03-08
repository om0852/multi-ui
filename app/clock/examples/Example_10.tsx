"use client"

import React, { useState } from 'react';
import AnalogClock from '../_components/Clock_10';
import { FaToggleOn, FaToggleOff, FaClock } from 'react-icons/fa6';

const Example_10: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 bg-transparent border-none cursor-pointer"
          >
            {darkMode ? (
              <FaToggleOn className="text-2xl text-blue-400" />
            ) : (
              <FaToggleOff className="text-2xl text-gray-400" />
            )}
            <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-teal-500" />
            Elegant Analog Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Classic Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Classic Style</h2>
            <div className="flex justify-center items-center py-4">
              <AnalogClock 
                size={200}
                hourHandColor="#334155"
                minuteHandColor="#475569"
                secondHandColor="#ef4444"
                markerColor="#1e293b"
              />
            </div>
          </div>

          {/* Modern Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Modern Style</h2>
            <div className="flex justify-center items-center py-4">
              <AnalogClock 
                size={200}
                hourHandColor="#3b82f6"
                minuteHandColor="#60a5fa"
                secondHandColor="#f97316"
                markerColor="#1d4ed8"
                backgroundColor="#eff6ff"
              />
            </div>
          </div>

          {/* Dark Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Dark Style</h2>
            <div className="flex justify-center items-center py-4">
              <AnalogClock 
                size={200}
                hourHandColor="#e2e8f0"
                minuteHandColor="#cbd5e1"
                secondHandColor="#f43f5e"
                markerColor="#f8fafc"
                backgroundColor="#0f172a"
              />
            </div>
          </div>

          {/* Colorful Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Colorful Style</h2>
            <div className="flex justify-center items-center py-4">
              <AnalogClock 
                size={200}
                hourHandColor="#8b5cf6"
                minuteHandColor="#a78bfa"
                secondHandColor="#ec4899"
                markerColor="#7c3aed"
                backgroundColor="#f5f3ff"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_10; 