"use client"

import React, { useState } from 'react';
import Collapsible_37 from '../_components/Collapsible_37';
import { FaLightbulb, FaUser, FaGear, FaBell, FaCircleInfo } from 'react-icons/fa6';

const Example_37: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const settingsSections = [
    {
      title: "Account Settings",
      content: (
        <div className="space-y-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-gray-700 font-medium">Username</label>
              <div className="relative">
                <input 
                  type="text" 
                  value="johndoe123" 
                  className="bg-gray-100 border-none rounded-lg py-2 px-4 text-gray-700 shadow-inner"
                  readOnly
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 text-sm">
                  Edit
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-gray-700 font-medium">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  value="john.doe@example.com" 
                  className="bg-gray-100 border-none rounded-lg py-2 px-4 text-gray-700 shadow-inner"
                  readOnly
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 text-sm">
                  Edit
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-gray-700 font-medium">Password</label>
              <button className="bg-blue-500 text-white rounded-lg py-2 px-4 text-sm shadow-[3px_3px_6px_#b8b9be,_-3px_-3px_6px_#ffffff]">
                Change Password
              </button>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <button className="bg-red-500 text-white rounded-lg py-2 px-4 text-sm shadow-[3px_3px_6px_#b8b9be,_-3px_-3px_6px_#ffffff]">
              Delete Account
            </button>
            <p className="text-gray-500 text-xs mt-2">
              This action cannot be undone. All your data will be permanently deleted.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Appearance",
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium">Theme</label>
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-white border-2 border-blue-500 shadow-[3px_3px_6px_#b8b9be,_-3px_-3px_6px_#ffffff]"></button>
              <button className="w-10 h-10 rounded-full bg-gray-800 shadow-[3px_3px_6px_#b8b9be,_-3px_-3px_6px_#ffffff]"></button>
              <button className="w-10 h-10 rounded-full bg-blue-500 shadow-[3px_3px_6px_#b8b9be,_-3px_-3px_6px_#ffffff]"></button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium">Font Size</label>
            <div className="w-48">
              <input 
                type="range" 
                min="1" 
                max="3" 
                step="1" 
                defaultValue="2"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Small</span>
                <span>Medium</span>
                <span>Large</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium">Animations</label>
            <div className="relative inline-block w-12 h-6 rounded-full shadow-inner bg-gray-200">
              <input type="checkbox" className="sr-only" defaultChecked />
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow-md transform translate-x-6"></span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Notifications",
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-gray-700 font-medium">Email Notifications</h4>
              <p className="text-gray-500 text-sm">Receive updates via email</p>
            </div>
            <div className="relative inline-block w-12 h-6 rounded-full shadow-inner bg-gray-200">
              <input type="checkbox" className="sr-only" defaultChecked />
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow-md transform translate-x-6"></span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-gray-700 font-medium">Push Notifications</h4>
              <p className="text-gray-500 text-sm">Receive notifications on your device</p>
            </div>
            <div className="relative inline-block w-12 h-6 rounded-full shadow-inner bg-gray-200">
              <input type="checkbox" className="sr-only" defaultChecked />
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow-md transform translate-x-6"></span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-gray-700 font-medium">Marketing Emails</h4>
              <p className="text-gray-500 text-sm">Receive promotional content</p>
            </div>
            <div className="relative inline-block w-12 h-6 rounded-full shadow-inner bg-gray-200">
              <input type="checkbox" className="sr-only" />
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow-md"></span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "About",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h4 className="text-gray-700 font-medium mb-2">App Version</h4>
            <p className="text-gray-600">v2.4.1 (Build 2023.06.15)</p>
          </div>
          
          <div>
            <h4 className="text-gray-700 font-medium mb-2">Legal Information</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                <a href="#" className="text-blue-500">Terms of Service</a>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                <a href="#" className="text-blue-500">Privacy Policy</a>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                <a href="#" className="text-blue-500">Licenses</a>
              </li>
            </ul>
          </div>
          
          <div>
            <button className="w-full bg-blue-500 text-white rounded-lg py-2 px-4 text-sm shadow-[3px_3px_6px_#b8b9be,_-3px_-3px_6px_#ffffff]">
              Check for Updates
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`} style={{
      background: darkMode ? '#2d3748' : '#e0e5ec'
    }}>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-3" style={{
            color: darkMode ? '#fff' : '#2d4059'
          }}>
            <FaGear className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
            Settings
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full"
            style={{
              background: darkMode ? '#374151' : '#e0e5ec',
              boxShadow: darkMode 
                ? 'inset 5px 5px 10px #202836, inset -5px -5px 10px #4a5c76'
                : '5px 5px 10px #b8b9be, -5px -5px 10px #ffffff'
            }}
          >
            <FaLightbulb className={darkMode ? 'text-yellow-300' : 'text-gray-400'} />
          </button>
        </div>

        <div className="space-y-6">
          {settingsSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-3">
                {index === 0 && <FaUser className={darkMode ? 'text-blue-400' : 'text-blue-500'} />}
                {index === 1 && <FaLightbulb className={darkMode ? 'text-blue-400' : 'text-blue-500'} />}
                {index === 2 && <FaBell className={darkMode ? 'text-blue-400' : 'text-blue-500'} />}
                {index === 3 && <FaCircleInfo className={darkMode ? 'text-blue-400' : 'text-blue-500'} />}
              </div>
              <div className="flex-1">
                <Collapsible_37
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_37>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_37; 