"use client";

import React, { useState } from "react";
import UniqueSwitch from "../tsx/Switch_9";

const SwitchExample9 = () => {
  const [powerSavingEnabled, setPowerSavingEnabled] = useState(true);
  const [highPerformanceEnabled, setHighPerformanceEnabled] = useState(false);
  const [silentModeEnabled, setSilentModeEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Advanced Effect Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Switches with multiple visual effects including ripple, glow, and wobble animations.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Performance Settings</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Power Saving Mode
            </label>
            <UniqueSwitch
              value={powerSavingEnabled}
              onChange={setPowerSavingEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              High Performance
            </label>
            <UniqueSwitch
              value={highPerformanceEnabled}
              onChange={setHighPerformanceEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Silent Mode
            </label>
            <UniqueSwitch
              value={silentModeEnabled}
              onChange={setSilentModeEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {powerSavingEnabled ? "Power saving on" : "Power saving off"}, 
              {highPerformanceEnabled ? " High performance on" : " High performance off"}, 
              {silentModeEnabled ? " Silent mode on" : " Silent mode off"}
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
            <UniqueSwitch
              value={powerSavingEnabled}
              onChange={setPowerSavingEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (On)
            </label>
            <UniqueSwitch
              value={true}
              onChange={() => {}}
              disabled={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (Off)
            </label>
            <UniqueSwitch
              value={false}
              onChange={() => {}}
              disabled={true}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-800 p-4">
          <p className="text-sm text-gray-300">
            These switches feature multiple visual effects:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Ripple effect when activated</li>
              <li>Glow effect in the active state</li>
              <li>Subtle wobble animation on state change</li>
              <li>Knob rotation when toggled</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample9; 