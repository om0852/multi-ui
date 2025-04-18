"use client";

import React, { useState } from "react";
import SwitchSix from "../_components/Switch_19";

const SwitchExample19 = () => {
  const [waterSavingEnabled, setWaterSavingEnabled] = useState(true);
  const [ecoModeEnabled, setEcoModeEnabled] = useState(false);
  const [smartIrrigationEnabled, setSmartIrrigationEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Teal Water Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Water-themed switches with teal gradients, scaling effects, and smooth animations.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Water Conservation</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Water Saving Mode
            </label>
            <SwitchSix
              value={waterSavingEnabled}
              onChange={setWaterSavingEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Eco Shower
            </label>
            <SwitchSix
              value={ecoModeEnabled}
              onChange={setEcoModeEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Smart Irrigation
            </label>
            <SwitchSix
              value={smartIrrigationEnabled}
              onChange={setSmartIrrigationEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {waterSavingEnabled ? "Water saving on" : "Water saving off"}, 
              {ecoModeEnabled ? " Eco shower on" : " Eco shower off"}, 
              {smartIrrigationEnabled ? " Smart irrigation on" : " Smart irrigation off"}
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
            <SwitchSix
              value={waterSavingEnabled}
              onChange={setWaterSavingEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (On)
            </label>
            <SwitchSix
              value={true}
              onChange={() => {}}
              disabled={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (Off)
            </label>
            <SwitchSix
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
              <li>Teal gradient background representing water/conservation</li>
              <li>Background scaling and opacity changes for visual feedback</li>
              <li>Knob scaling effect when activated</li>
              <li>Spring animation for a fluid, water-like movement</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample19; 