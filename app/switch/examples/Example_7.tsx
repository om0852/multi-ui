"use client";

import React, { useState } from "react";
import DarkModeSwitch from "../_components/Switch_7";

const SwitchExample7 = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [nightLightEnabled, setNightLightEnabled] = useState(true);
  const [autoThemeEnabled, setAutoThemeEnabled] = useState(false);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Theme Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Specialized switches for toggling between light and dark modes with themed icons.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Theme Settings</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Dark Mode
            </label>
            <DarkModeSwitch
              value={darkModeEnabled}
              onChange={setDarkModeEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Night Light
            </label>
            <DarkModeSwitch
              value={nightLightEnabled}
              onChange={setNightLightEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Auto Theme
            </label>
            <DarkModeSwitch
              value={autoThemeEnabled}
              onChange={setAutoThemeEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {darkModeEnabled ? "Dark mode on" : "Dark mode off"}, 
              {nightLightEnabled ? " Night light on" : " Night light off"}, 
              {autoThemeEnabled ? " Auto theme on" : " Auto theme off"}
            </span>
          </p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-lg font-medium text-white">Disabled States</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Enabled Switch
            </label>
            <DarkModeSwitch
              value={darkModeEnabled}
              onChange={setDarkModeEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (On)
            </label>
            <DarkModeSwitch
              value={true}
              onChange={() => {}}
              disabled={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (Off)
            </label>
            <DarkModeSwitch
              value={false}
              onChange={() => {}}
              disabled={true}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-800 p-4">
          <p className="text-sm text-gray-300">
            These switches are specifically designed for theme toggling with sun and moon icons.
            The background color changes based on the state to provide visual context.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample7; 