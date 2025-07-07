"use client";

import React, { useState } from "react";
import SmoothSwitch from "../tsx/Switch_13";

const SwitchExample13 = () => {
  const [bluetoothEnabled, setBluetoothEnabled] = useState(true);
  const [wifiEnabled, setWifiEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Rotating Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Elegant switches with purple-blue gradients and rotation animations.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Connection Settings</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Bluetooth
            </label>
            <SmoothSwitch
              value={bluetoothEnabled}
              onChange={setBluetoothEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Wi-Fi
            </label>
            <SmoothSwitch
              value={wifiEnabled}
              onChange={setWifiEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Location Services
            </label>
            <SmoothSwitch
              value={locationEnabled}
              onChange={setLocationEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {bluetoothEnabled ? "Bluetooth on" : "Bluetooth off"}, 
              {wifiEnabled ? " Wi-Fi on" : " Wi-Fi off"}, 
              {locationEnabled ? " Location on" : " Location off"}
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
              value={bluetoothEnabled}
              onChange={setBluetoothEnabled}
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
              <li>Purple-blue gradient background when active</li>
              <li>360-degree rotation animation when toggled</li>
              <li>Subtle scaling effect for the knob</li>
              <li>Clean, minimalist design with smooth transitions</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample13; 