"use client";

import React, { useState } from "react";
import SwitchThree from "../_components/Switch_16";

const SwitchExample16 = () => {
  const [ecoModeEnabled, setEcoModeEnabled] = useState(true);
  const [energySaverEnabled, setEnergySaverEnabled] = useState(false);
  const [sustainabilityEnabled, setSustainabilityEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Green Flip Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Eco-themed circular switches with 3D flip animations and green gradients.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Eco Settings</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Eco Mode
            </label>
            <SwitchThree
              value={ecoModeEnabled}
              onChange={setEcoModeEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Energy Saver
            </label>
            <SwitchThree
              value={energySaverEnabled}
              onChange={setEnergySaverEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Sustainability Features
            </label>
            <SwitchThree
              value={sustainabilityEnabled}
              onChange={setSustainabilityEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {ecoModeEnabled ? "Eco mode on" : "Eco mode off"}, 
              {energySaverEnabled ? " Energy saver on" : " Energy saver off"}, 
              {sustainabilityEnabled ? " Sustainability features on" : " Sustainability features off"}
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
            <SwitchThree
              value={ecoModeEnabled}
              onChange={setEcoModeEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (On)
            </label>
            <SwitchThree
              value={true}
              onChange={() => {}}
              disabled={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (Off)
            </label>
            <SwitchThree
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
              <li>Green gradient background representing eco-friendliness</li>
              <li>3D flip animation (rotateY) for the knob when toggled</li>
              <li>Opacity changes to enhance the visual feedback</li>
              <li>Circular design with partial knob movement</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample16; 