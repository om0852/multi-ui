"use client";

import React, { useState } from "react";
import SmoothSwitch from "../tsx/Switch_4";

const SwitchExample4 = () => {
  const [autoUpdateEnabled, setAutoUpdateEnabled] = useState(true);
  const [syncEnabled, setSyncEnabled] = useState(false);
  const [backupEnabled, setBackupEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Gradient Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Smooth switches with gradient backgrounds and spring animations.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">System Settings</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Auto Updates
            </label>
            <SmoothSwitch
              value={autoUpdateEnabled}
              onChange={setAutoUpdateEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Cloud Sync
            </label>
            <SmoothSwitch
              value={syncEnabled}
              onChange={setSyncEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Automatic Backup
            </label>
            <SmoothSwitch
              value={backupEnabled}
              onChange={setBackupEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {autoUpdateEnabled ? "Auto updates on" : "Auto updates off"}, 
              {syncEnabled ? " Cloud sync on" : " Cloud sync off"}, 
              {backupEnabled ? " Automatic backup on" : " Automatic backup off"}
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
            <SmoothSwitch
              value={autoUpdateEnabled}
              onChange={setAutoUpdateEnabled}
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
            These switches feature smooth gradient backgrounds and scaling animations.
            The knob scales up when active for a more engaging user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample4; 