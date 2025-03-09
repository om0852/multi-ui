"use client"

import React, { useState } from 'react';
import Collapsible_40 from '../_components/Collapsible_40';
import { FaLocationDot, FaCloudSun, FaCloudRain, FaSnowflake, FaWind, FaCalendar } from 'react-icons/fa6';

const Example_40: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const weatherForecasts = [
    {
      title: "Today's Forecast",
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-light">San Francisco, CA</h3>
              <p className="text-sm opacity-80">Monday, June 12</p>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-blue-400" />
              <span className="text-sm">Update Location</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="text-5xl">☀️</div>
              <div>
                <div className="text-4xl font-light">24°C</div>
                <div className="text-sm opacity-80">Feels like 26°C</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm">Sunny</div>
              <div className="text-sm">Humidity: 45%</div>
              <div className="text-sm">Wind: 8 km/h</div>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-2 pt-4 border-t border-blue-200 border-opacity-30">
            <div className="text-center">
              <div className="text-sm">Now</div>
              <div className="text-xl">☀️</div>
              <div className="text-sm font-medium">24°C</div>
            </div>
            <div className="text-center">
              <div className="text-sm">12 PM</div>
              <div className="text-xl">☀️</div>
              <div className="text-sm font-medium">26°C</div>
            </div>
            <div className="text-center">
              <div className="text-sm">3 PM</div>
              <div className="text-xl">⛅</div>
              <div className="text-sm font-medium">25°C</div>
            </div>
            <div className="text-center">
              <div className="text-sm">6 PM</div>
              <div className="text-xl">⛅</div>
              <div className="text-sm font-medium">22°C</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "5-Day Forecast",
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-blue-200 border-opacity-30">
              <div className="flex items-center gap-3">
                <div className="w-10 text-center">Tue</div>
                <div className="text-xl">☀️</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm opacity-80">0% chance of rain</div>
                <div className="flex items-center gap-2">
                  <span>18°C</span>
                  <div className="w-16 h-1.5 rounded-full bg-blue-200 bg-opacity-30">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: '70%' }}></div>
                  </div>
                  <span className="font-medium">27°C</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-blue-200 border-opacity-30">
              <div className="flex items-center gap-3">
                <div className="w-10 text-center">Wed</div>
                <div className="text-xl">⛅</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm opacity-80">10% chance of rain</div>
                <div className="flex items-center gap-2">
                  <span>17°C</span>
                  <div className="w-16 h-1.5 rounded-full bg-blue-200 bg-opacity-30">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: '65%' }}></div>
                  </div>
                  <span className="font-medium">25°C</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-blue-200 border-opacity-30">
              <div className="flex items-center gap-3">
                <div className="w-10 text-center">Thu</div>
                <div className="text-xl">🌧️</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm opacity-80">70% chance of rain</div>
                <div className="flex items-center gap-2">
                  <span>16°C</span>
                  <div className="w-16 h-1.5 rounded-full bg-blue-200 bg-opacity-30">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: '55%' }}></div>
                  </div>
                  <span className="font-medium">22°C</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-blue-200 border-opacity-30">
              <div className="flex items-center gap-3">
                <div className="w-10 text-center">Fri</div>
                <div className="text-xl">🌧️</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm opacity-80">60% chance of rain</div>
                <div className="flex items-center gap-2">
                  <span>15°C</span>
                  <div className="w-16 h-1.5 rounded-full bg-blue-200 bg-opacity-30">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: '50%' }}></div>
                  </div>
                  <span className="font-medium">20°C</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-3">
                <div className="w-10 text-center">Sat</div>
                <div className="text-xl">⛅</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm opacity-80">20% chance of rain</div>
                <div className="flex items-center gap-2">
                  <span>16°C</span>
                  <div className="w-16 h-1.5 rounded-full bg-blue-200 bg-opacity-30">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: '60%' }}></div>
                  </div>
                  <span className="font-medium">23°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Precipitation",
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-light">Chance of Rain</h3>
            <div className="text-sm opacity-80">Next 24 hours</div>
          </div>
          
          <div className="h-32 relative">
            <div className="absolute inset-0 flex items-end">
              <div className="w-1/12 h-5% bg-blue-500 rounded-t"></div>
              <div className="w-1/12 h-5% bg-blue-500 rounded-t"></div>
              <div className="w-1/12 h-10% bg-blue-500 rounded-t"></div>
              <div className="w-1/12 h-5% bg-blue-500 rounded-t"></div>
              <div className="w-1/12 h-0% bg-blue-500 rounded-t"></div>
              <div className="w-1/12 h-0% bg-blue-500 rounded-t"></div>
              <div className="w-1/12 h-5% bg-blue-500 rounded-t"></div>
              <div className="w-1/12 h-15% bg-blue-500 rounded-t"></div>
              <div className="w-1/12 h-30% bg-blue-500 rounded-t"></div>
              <div className="w-1/12 h-60% bg-blue-500 rounded-t"></div>
              <div className="w-1/12 h-70% bg-blue-500 rounded-t"></div>
              <div className="w-1/12 h-40% bg-blue-500 rounded-t"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs opacity-80 border-t border-blue-200 border-opacity-30 pt-1">
              <div>Now</div>
              <div>3PM</div>
              <div>6PM</div>
              <div>9PM</div>
              <div>12AM</div>
              <div>3AM</div>
              <div>6AM</div>
              <div>9AM</div>
              <div>12PM</div>
            </div>
            
            <div className="absolute top-0 right-0 text-xs opacity-80">
              <div>100%</div>
              <div className="mt-6">75%</div>
              <div className="mt-6">50%</div>
              <div className="mt-6">25%</div>
              <div className="mt-6">0%</div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-blue-200 border-opacity-30">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaCloudRain className="text-blue-500" />
                <span>Total Precipitation</span>
              </div>
              <div className="font-medium">12 mm expected</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Wind & Pressure",
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-light">Wind Conditions</h3>
            <div className="text-sm opacity-80">Current: 8 km/h NW</div>
          </div>
          
          <div className="relative h-48 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-2 border-blue-200 border-opacity-50 flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-xs opacity-70">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">N</div>
                  <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2">E</div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">S</div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2">W</div>
                </div>
              </div>
              
              <div className="w-24 h-24 rounded-full border-2 border-blue-200 border-opacity-30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center">
                  <div className="transform -rotate-45">
                    <FaWind className="text-blue-500 text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-200 border-opacity-30">
            <div>
              <div className="text-sm opacity-80">Pressure</div>
              <div className="font-medium">1012 hPa</div>
              <div className="text-xs opacity-70">Rising</div>
            </div>
            <div>
              <div className="text-sm opacity-80">Visibility</div>
              <div className="font-medium">16 km</div>
              <div className="text-xs opacity-70">Clear conditions</div>
            </div>
            <div>
              <div className="text-sm opacity-80">Humidity</div>
              <div className="font-medium">45%</div>
              <div className="text-xs opacity-70">Comfortable</div>
            </div>
            <div>
              <div className="text-sm opacity-80">UV Index</div>
              <div className="font-medium">7</div>
              <div className="text-xs opacity-70">High</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-sky-50 text-gray-800'}`} style={{ 
      background: darkMode ? 'linear-gradient(135deg, #0f172a, #1e293b)' : 'linear-gradient(135deg, #e0f2fe, #bae6fd)'
    }}>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-light flex items-center gap-3">
            <FaCloudSun className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
            Weather Forecast
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode ? 'bg-blue-900 text-blue-400' : 'bg-white text-blue-500'
            } shadow`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="space-y-6">
          {weatherForecasts.map((forecast, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {index === 0 && <FaCloudSun className={darkMode ? 'text-blue-400' : 'text-blue-500'} />}
                {index === 1 && <FaCalendar className={darkMode ? 'text-blue-400' : 'text-blue-500'} />}
                {index === 2 && <FaCloudRain className={darkMode ? 'text-blue-400' : 'text-blue-500'} />}
                {index === 3 && <FaWind className={darkMode ? 'text-blue-400' : 'text-blue-500'} />}
              </div>
              <div className="flex-1">
                <Collapsible_40
                  title={forecast.title}
                  defaultOpen={index === 0}
                >
                  {forecast.content}
                </Collapsible_40>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_40; 