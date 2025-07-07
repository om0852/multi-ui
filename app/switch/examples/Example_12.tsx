"use client";

import React, { useState } from "react";
import SmoothSwitch from "../tsx/Switch_12";

const SwitchExample12 = () => {
  const [heatModeEnabled, setHeatModeEnabled] = useState(true);
  const [coolModeEnabled, setCoolModeEnabled] = useState(false);
  const [fanModeEnabled, setFanModeEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Rotating Knob Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Advanced switches with rotating knobs and 3D flipping emoji indicators.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Climate Control</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Heat Mode
            </label>
            <SmoothSwitch
              value={heatModeEnabled}
              onChange={setHeatModeEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Cool Mode
            </label>
            <SmoothSwitch
              value={coolModeEnabled}
              onChange={setCoolModeEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Fan Mode
            </label>
            <SmoothSwitch
              value={fanModeEnabled}
              onChange={setFanModeEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {heatModeEnabled ? "Heat mode on" : "Heat mode off"}, 
              {coolModeEnabled ? " Cool mode on" : " Cool mode off"}, 
              {fanModeEnabled ? " Fan mode on" : " Fan mode off"}
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
              value={heatModeEnabled}
              onChange={setHeatModeEnabled}
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
            These switches feature:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Rotating knob with emoji indicator that changes with state</li>
              <li>3D flipping animations for the background indicators</li>
              <li>Gradient backgrounds that transition between fire and ice themes</li>
              <li>Hover scale effect for enhanced interactivity</li>
              <li>Larger size for more prominent display</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample12; 