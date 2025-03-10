"use client"

import React, { useState } from 'react';
import Collapsible_24 from '../_components/Collapsible_24';
import { FaHouse, FaLightbulb, FaTemperatureHalf, FaBolt, FaLock, FaWifi, FaCarBattery } from 'react-icons/fa6';

const Example_24: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const homeSections = [
    {
      title: "Room Controls",
      icon: <FaHouse className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          {[
            { name: "Living Room", temp: "72&deg;F", lights: true, devices: 5 },
            { name: "Kitchen", temp: "70&deg;F", lights: false, devices: 3 },
            { name: "Bedroom", temp: "68&deg;F", lights: true, devices: 4 }
          ].map((room, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium">{room.name}</h4>
                <span className="text-sm text-gray-500">{room.devices} devices</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaTemperatureHalf className="text-blue-500" />
                      <span className="text-sm text-gray-500">Temperature</span>
                    </div>
                    <span className="font-medium">{room.temp}</span>
                  </div>
                  <input
                    type="range"
                    className="w-full mt-2"
                    min="60"
                    max="80"
                    value={parseInt(room.temp)}
                  />
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaLightbulb className={room.lights ? "text-yellow-500" : "text-gray-400"} />
                      <span className="text-sm text-gray-500">Lights</span>
                    </div>
                    <div className="relative inline-block w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700">
                      <div className={`absolute ${room.lights ? 'right-1' : 'left-1'} top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all`}></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    {room.lights ? 'On' : 'Off'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Device Status",
      icon: <FaWifi className="text-green-500" />,
      content: (
        <div className="space-y-3">
          {[
            { name: "Smart TV", status: "Online", lastActive: "Now", battery: null },
            { name: "Security Camera", status: "Online", lastActive: "Now", battery: "85%" },
            { name: "Smart Lock", status: "Online", lastActive: "5m ago", battery: "90%" },
            { name: "Thermostat", status: "Online", lastActive: "Now", battery: null }
          ].map((device, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white">
                  {device.name === "Smart Lock" ? (
                    <FaLock />
                  ) : device.name === "Thermostat" ? (
                    <FaTemperatureHalf />
                  ) : (
                    <FaWifi />
                  )}
                </div>
                <div>
                  <h4 className="font-medium">{device.name}</h4>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">{device.status}</span>
                    <span className="text-gray-400">&bull;</span>
                    <span className="text-gray-500">{device.lastActive}</span>
                  </div>
                </div>
              </div>
              {device.battery && (
                <div className="text-sm text-gray-500">
                  <FaCarBattery className="inline-block mr-1" /> {device.battery}
                </div>
              )}
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Energy Usage",
      icon: <FaBolt className="text-yellow-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">Today&apos;s Usage</h4>
              <span className="text-sm text-gray-500">12.5 kWh</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div className="bg-yellow-500 h-full" style={{ width: '65%' }}></div>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              25% less than yesterday
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="text-green-500 text-2xl font-bold">85%</div>
              <div className="text-sm text-gray-500">Energy Efficiency</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="text-blue-500 text-2xl font-bold">$45</div>
              <div className="text-sm text-gray-500">Estimated Bill</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Energy Tips</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>&bull; Turn off unused lights</li>
              <li>&bull; Optimize thermostat schedule</li>
              <li>&bull; Check for energy leaks</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <FaHouse className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Smart Home Control
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
          {homeSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_24
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_24>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_24; 