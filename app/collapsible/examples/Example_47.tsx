"use client"

import React, { useState } from 'react';
import Collapsible_47 from '../_components/Collapsible_47';
import { FaHouse, FaLightbulb, FaTemperatureHalf, FaLock, FaCamera, FaWifi } from 'react-icons/fa6';

const Example_47: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const smartHomeControls = [
    {
      title: "Lighting Control",
      icon: <FaLightbulb className="text-amber-500" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium">Living Room</h4>
                <div className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </div>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                defaultValue="80"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs mt-1">
                <span>0%</span>
                <span>80%</span>
                <span>100%</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium">Kitchen</h4>
                <div className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </div>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                defaultValue="0"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs mt-1">
                <span>0%</span>
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Automation Schedule</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span>Sunrise: Auto On (7:00 AM)</span>
                <div className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunset: Dim (6:30 PM)</span>
                <div className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Night: Auto Off (11:00 PM)</span>
                <div className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Temperature Control",
      icon: <FaTemperatureHalf className="text-red-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="font-medium">Current Temperature</h4>
                <p className="text-3xl font-bold text-red-500">72&deg;F</p>
              </div>
              <div>
                <h4 className="font-medium">Target Temperature</h4>
                <p className="text-3xl font-bold text-blue-500">70&deg;F</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <input 
                type="range" 
                min="60" 
                max="85" 
                defaultValue="70"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs">
                <span>60&deg;F</span>
                <span>70&deg;F</span>
                <span>85&deg;F</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Mode</h4>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">Cool</button>
                <button className="bg-white text-gray-700 py-2 px-4 rounded-lg text-sm border">Heat</button>
                <button className="bg-white text-gray-700 py-2 px-4 rounded-lg text-sm border">Auto</button>
                <button className="bg-white text-gray-700 py-2 px-4 rounded-lg text-sm border">Fan</button>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Fan Speed</h4>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">Low</button>
                <button className="bg-white text-gray-700 py-2 px-4 rounded-lg text-sm border">Med</button>
                <button className="bg-white text-gray-700 py-2 px-4 rounded-lg text-sm border">High</button>
                <button className="bg-white text-gray-700 py-2 px-4 rounded-lg text-sm border">Auto</button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Security System",
      icon: <FaLock className="text-green-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="font-medium">System Status</h4>
                <p className="text-lg font-bold text-green-500">Armed (Away Mode)</p>
              </div>
              <button className="bg-red-500 text-white py-2 px-6 rounded-lg">
                Disarm
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">
                <FaLock className="mx-auto text-green-500 mb-1" />
                <p className="text-sm">Front Door</p>
                <p className="text-xs text-green-500">Locked</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">
                <FaLock className="mx-auto text-green-500 mb-1" />
                <p className="text-sm">Back Door</p>
                <p className="text-xs text-green-500">Locked</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">
                <FaLock className="mx-auto text-green-500 mb-1" />
                <p className="text-sm">Garage</p>
                <p className="text-xs text-green-500">Locked</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">
                <FaLock className="mx-auto text-red-500 mb-1" />
                <p className="text-sm">Patio</p>
                <p className="text-xs text-red-500">Unlocked</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Cameras</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <FaCamera className="text-blue-500" />
                    Front Door
                  </span>
                  <span className="text-green-500 text-sm">Live</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <FaCamera className="text-blue-500" />
                    Back Yard
                  </span>
                  <span className="text-green-500 text-sm">Live</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Recent Activity</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Front Door Opened</span>
                  <span className="text-gray-500">2m ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Motion Detected (Back Yard)</span>
                  <span className="text-gray-500">15m ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>System Armed</span>
                  <span className="text-gray-500">1h ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Network Status",
      icon: <FaWifi className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="font-medium">Internet Connection</h4>
                <p className="text-lg font-bold text-green-500">Connected (1 Gbps)</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Network Name</p>
                <p className="font-medium">SmartHome_5G</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span>Download Speed</span>
                  <span className="font-medium">940 Mbps</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span>Upload Speed</span>
                  <span className="font-medium">920 Mbps</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Connected Devices</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Smart TV</span>
                  <span className="text-green-500">Connected</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Thermostat</span>
                  <span className="text-green-500">Connected</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Security Camera</span>
                  <span className="text-green-500">Connected</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Smart Speaker</span>
                  <span className="text-red-500">Offline</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Network Security</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Firewall</span>
                  <span className="text-green-500">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>VPN</span>
                  <span className="text-gray-500">Disabled</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Guest Network</span>
                  <span className="text-gray-500">Disabled</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Last Security Scan</span>
                  <span>2h ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
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
          {smartHomeControls.map((control, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {control.icon}
              </div>
              <div className="flex-1">
                <Collapsible_47
                  title={control.title}
                  defaultOpen={index === 0}
                >
                  {control.content}
                </Collapsible_47>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_47; 