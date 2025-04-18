"use client";

import React, { useState } from "react";
import SmoothSwitch from "../_components/Switch_10";

const SwitchExample10 = () => {
  const [heatingEnabled, setHeatingEnabled] = useState(true);
  const [coolingEnabled, setCoolingEnabled] = useState(false);
  const [autoModeEnabled, setAutoModeEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Fire & Ice Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Themed switches with fire and ice gradients, emoji indicators, and pulsating glow effects.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Temperature Controls</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Heating
            </label>
            <SmoothSwitch
              value={heatingEnabled}
              onChange={setHeatingEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Cooling
            </label>
            <SmoothSwitch
              value={coolingEnabled}
              onChange={setCoolingEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Auto Mode
            </label>
            <SmoothSwitch
              value={autoModeEnabled}
              onChange={setAutoModeEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {heatingEnabled ? "Heating on 🔥" : "Heating off ❄️"}, 
              {coolingEnabled ? " Cooling on 🔥" : " Cooling off ❄️"}, 
              {autoModeEnabled ? " Auto mode on 🔥" : " Auto mode off ❄️"}
            </span>
          </p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-lg font-medium text-white">Interactive Demo</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Active Switch
            </label>
            <SmoothSwitch
              value={heatingEnabled}
              onChange={setHeatingEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (On)
            </label>
            <SmoothSwitch
              value={true}
              onChange={() => {}}
              disabled={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (Off)
            </label>
            <SmoothSwitch
              value={false}
              onChange={() => {}}
              disabled={true}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-800 p-4">
          <p className="text-sm text-gray-300">
            These switches feature a fire and ice theme with:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Fire gradient (red/orange) when on, ice gradient (blue) when off</li>
              <li>Fire (🔥) and ice (❄️) emoji indicators</li>
              <li>Pulsating glow effect matching the current state</li>
              <li>Colored shadow around the knob</li>
              <li>Hover scale effect for better interactivity</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample10; 