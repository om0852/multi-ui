"use client";

import React, { useState } from "react";
import SwitchOne from "../_components/Switch_14";

const SwitchExample14 = () => {
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [dataRoaming, setDataRoaming] = useState(true);
  const [hotspot, setHotspot] = useState(false);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Circular Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Large circular switches with radial gradients and smooth animations.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Mobile Settings</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Airplane Mode
            </label>
            <SwitchOne
              value={airplaneMode}
              onChange={setAirplaneMode}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Data Roaming
            </label>
            <SwitchOne
              value={dataRoaming}
              onChange={setDataRoaming}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Personal Hotspot
            </label>
            <SwitchOne
              value={hotspot}
              onChange={setHotspot}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {airplaneMode ? "Airplane mode on" : "Airplane mode off"}, 
              {dataRoaming ? " Data roaming on" : " Data roaming off"}, 
              {hotspot ? " Hotspot on" : " Hotspot off"}
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
            <SwitchOne
              value={dataRoaming}
              onChange={setDataRoaming}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (On)
            </label>
            <SwitchOne
              value={true}
              onChange={() => {}}
              disabled={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (Off)
            </label>
            <SwitchOne
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
              <li>Large circular design for better visibility</li>
              <li>Radial gradient backgrounds that change with state</li>
              <li>Smooth spring animations for the knob movement</li>
              <li>Unique knob positioning that extends beyond the switch body</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample14; 