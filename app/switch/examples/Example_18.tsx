"use client";

import React, { useState } from "react";
import SwitchFive from "../tsx/Switch_18";

const SwitchExample18 = () => {
  const [lightingEnabled, setLightingEnabled] = useState(true);
  const [brightnessEnabled, setBrightnessEnabled] = useState(false);
  const [autoAdjustEnabled, setAutoAdjustEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Sunshine Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Bright yellow switches with scaling backgrounds and smooth rotation animations.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Lighting Controls</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Smart Lighting
            </label>
            <SwitchFive
              value={lightingEnabled}
              onChange={setLightingEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              High Brightness
            </label>
            <SwitchFive
              value={brightnessEnabled}
              onChange={setBrightnessEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Auto-Adjust
            </label>
            <SwitchFive
              value={autoAdjustEnabled}
              onChange={setAutoAdjustEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {lightingEnabled ? "Smart lighting on" : "Smart lighting off"}, 
              {brightnessEnabled ? " High brightness on" : " High brightness off"}, 
              {autoAdjustEnabled ? " Auto-adjust on" : " Auto-adjust off"}
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
            <SwitchFive
              value={lightingEnabled}
              onChange={setLightingEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (On)
            </label>
            <SwitchFive
              value={true}
              onChange={() => {}}
              disabled={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (Off)
            </label>
            <SwitchFive
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
              <li>Bright yellow gradient background representing sunshine/light</li>
              <li>Background scaling effect when activated</li>
              <li>Full 360-degree rotation of the knob using tween animation</li>
              <li>Circular design for a sun-like appearance</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample18; 