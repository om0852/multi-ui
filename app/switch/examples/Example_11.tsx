"use client";

import React, { useState } from "react";
import SmoothSwitch from "../_components/Switch_11";

const SwitchExample11 = () => {
  const [flameEffectEnabled, setFlameEffectEnabled] = useState(true);
  const [frostEffectEnabled, setFrostEffectEnabled] = useState(false);
  const [weatherEffectsEnabled, setWeatherEffectsEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Animated Icon Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Switches with animated emoji indicators and square knob design.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Effect Settings</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Flame Effects
            </label>
            <SmoothSwitch
              value={flameEffectEnabled}
              onChange={setFlameEffectEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Frost Effects
            </label>
            <SmoothSwitch
              value={frostEffectEnabled}
              onChange={setFrostEffectEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Weather Effects
            </label>
            <SmoothSwitch
              value={weatherEffectsEnabled}
              onChange={setWeatherEffectsEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {flameEffectEnabled ? "Flame effects on" : "Flame effects off"}, 
              {frostEffectEnabled ? " Frost effects on" : " Frost effects off"}, 
              {weatherEffectsEnabled ? " Weather effects on" : " Weather effects off"}
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
              value={flameEffectEnabled}
              onChange={setFlameEffectEnabled}
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
              <li>Animated emoji indicators (fire and ice)</li>
              <li>Square knob design for a modern look</li>
              <li>Gradient backgrounds that change with state</li>
              <li>Hover scale effect for better interactivity</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample11; 