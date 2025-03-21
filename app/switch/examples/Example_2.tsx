"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_2";

const SwitchExample2 = () => {
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Smooth Spring Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Toggle switches with smooth spring animations and disabled states.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Connection Settings</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Wi-Fi
            </label>
            <Switch
              value={wifiEnabled}
              onChange={setWifiEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Bluetooth
            </label>
            <Switch
              value={bluetoothEnabled}
              onChange={setBluetoothEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Location Services
            </label>
            <Switch
              value={locationEnabled}
              onChange={setLocationEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {wifiEnabled ? "Wi-Fi on" : "Wi-Fi off"}, 
              {bluetoothEnabled ? " Bluetooth on" : " Bluetooth off"}, 
              {locationEnabled ? " Location on" : " Location off"}
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
            <Switch
              value={wifiEnabled}
              onChange={setWifiEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (On)
            </label>
            <Switch
              value={true}
              onChange={() => {}}
              disabled={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (Off)
            </label>
            <Switch
              value={false}
              onChange={() => {}}
              disabled={true}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-800 p-4">
          <p className="text-sm text-gray-300">
            These switches feature smooth spring animations for a polished user experience.
            Disabled switches maintain their visual state but cannot be interacted with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample2; 