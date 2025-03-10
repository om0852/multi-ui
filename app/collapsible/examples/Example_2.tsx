"use client"

import React, { useState } from 'react';
import Collapsible_2 from '../_components/Collapsible_2';
import { FaSun, FaCloud, FaWind, FaDroplet, FaLocationDot } from 'react-icons/fa6';

const Example_2: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const weatherSections = [
    {
      title: "Current Weather",
      icon: <FaSun className="text-yellow-500" />,
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-4xl font-bold">72&deg;F</h3>
              <p className="text-gray-500 dark:text-gray-400">Sunny</p>
            </div>
            <FaSun className="text-yellow-500 text-5xl" />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <FaDroplet className="inline text-blue-500 mb-1" />
              <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
              <p className="font-bold">45%</p>
            </div>
            <div>
              <FaWind className="inline text-blue-500 mb-1" />
              <p className="text-sm text-gray-500 dark:text-gray-400">Wind</p>
              <p className="font-bold">8 mph</p>
            </div>
            <div>
              <FaCloud className="inline text-blue-500 mb-1" />
              <p className="text-sm text-gray-500 dark:text-gray-400">Cloud Cover</p>
              <p className="font-bold">10%</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Hourly Forecast",
      icon: <FaCloud className="text-blue-500" />,
      content: (
        <div className="space-y-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                {i % 2 === 0 ? <FaSun className="text-yellow-500" /> : <FaCloud className="text-gray-400" />}
                <div>
                  <p className="font-medium">{`${(i + 1)}:00 PM`}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{`${70 + i}&deg;F`}</p>
                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{`${40 + i}%`}</div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Location Details",
      icon: <FaLocationDot className="text-red-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h4 className="font-medium flex items-center gap-2">
              <FaLocationDot className="text-red-500" />
              San Francisco, CA
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Latitude: 37.7749&deg; N
              <br />
              Longitude: 122.4194&deg; W
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium">Local Time</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">2:30 PM PST</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-sky-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <FaSun className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} />
            Weather Widget
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200'
            } shadow-sm`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-4">
          {weatherSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_2
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_2; 