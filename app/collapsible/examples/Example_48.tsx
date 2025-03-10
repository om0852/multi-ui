"use client"

import React, { useState } from 'react';
import Collapsible_48 from '../_components/Collapsible_48';
import { FaCloud, FaSun, FaWind, FaDroplet, FaLocationDot, FaTemperatureHalf, FaClock, FaCalendarDays, FaBell, FaTriangleExclamation, FaInfo, FaCloudRain } from 'react-icons/fa6';

const Example_48: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const weatherSections = [
    {
      title: "Current Conditions",
      icon: <FaSun className="text-yellow-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-4xl font-bold">72&deg;F</h3>
                <p className="text-blue-100">Partly Cloudy</p>
              </div>
              <FaSun className="text-yellow-300 text-5xl" />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <FaDroplet className="inline text-blue-200 mb-1" />
                <p className="text-sm text-blue-100">Humidity</p>
                <p className="font-bold">45%</p>
              </div>
              <div>
                <FaWind className="inline text-blue-200 mb-1" />
                <p className="text-sm text-blue-100">Wind</p>
                <p className="font-bold">8 mph</p>
              </div>
              <div>
                <FaTemperatureHalf className="inline text-blue-200 mb-1" />
                <p className="text-sm text-blue-100">Feels Like</p>
                <p className="font-bold">75&deg;F</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <h4 className="text-gray-500 dark:text-gray-400 mb-2">Sunrise</h4>
              <div className="flex items-center gap-2">
                <FaSun className="text-yellow-500" />
                <span className="text-xl font-bold">6:45 AM</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <h4 className="text-gray-500 dark:text-gray-400 mb-2">Sunset</h4>
              <div className="flex items-center gap-2">
                <FaSun className="text-orange-500" />
                <span className="text-xl font-bold">8:15 PM</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Hourly Forecast",
      icon: <FaClock className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <div className="inline-flex gap-4 min-w-full pb-4">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center min-w-[100px]">
                  <p className="text-gray-500 dark:text-gray-400 mb-2">{`${(i + 1) % 12 || 12}:00 ${i < 12 ? 'AM' : 'PM'}`}</p>
                  <FaCloud className={`mx-auto mb-2 ${i < 12 ? 'text-gray-400' : 'text-yellow-500'}`} />
                  <p className="font-bold">{`${70 + Math.sin(i) * 5}&deg;F`}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{`${40 + Math.cos(i) * 10}%`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "5-Day Forecast",
      icon: <FaCalendarDays className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-24">
                    <p className="font-medium">{day}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Nov {14 + i}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {i === 0 && <FaSun className="text-yellow-500" />}
                    {i === 1 && <FaCloud className="text-gray-400" />}
                    {i === 2 && <FaCloudRain className="text-blue-500" />}
                    {i === 3 && <FaCloud className="text-gray-400" />}
                    {i === 4 && <FaSun className="text-yellow-500" />}
                    <span className="text-sm">{i === 2 ? 'Rain' : 'Partly Cloudy'}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 dark:text-gray-400">{`${60 + i * 2}&deg;F`}</span>
                  <span className="font-bold">{`${72 + i}&deg;F`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Weather Alerts",
      icon: <FaBell className="text-red-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <FaTriangleExclamation className="text-yellow-500 mt-1" />
              <div>
                <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Heat Advisory</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">High temperatures expected between 2 PM and 6 PM. Stay hydrated and avoid prolonged outdoor activities.</p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">Effective until: 6:00 PM Today</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <FaInfo className="text-blue-500 mt-1" />
              <div>
                <h4 className="font-medium text-blue-800 dark:text-blue-200">Air Quality Alert</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Moderate air quality conditions. Sensitive groups should reduce outdoor exposure.</p>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">AQI: 75 (Moderate)</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-sky-50 text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <FaCloud className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              Weather Dashboard
            </h1>
            <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
              <FaLocationDot />
              New York City, NY
            </p>
          </div>
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
                <Collapsible_48
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_48>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_48; 