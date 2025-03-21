"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_3";

const SwitchExample3 = () => {
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const [cloudSyncEnabled, setCloudSyncEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Animated Diagonal Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Circular switches with diagonal movement and rotation animations.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Application Settings</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Auto-save
            </label>
            <Switch
              value={autoSaveEnabled}
              onChange={setAutoSaveEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Cloud Sync
            </label>
            <Switch
              value={cloudSyncEnabled}
              onChange={setCloudSyncEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Notifications
            </label>
            <Switch
              value={notificationsEnabled}
              onChange={setNotificationsEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {autoSaveEnabled ? "Auto-save on" : "Auto-save off"}, 
              {cloudSyncEnabled ? " Cloud sync on" : " Cloud sync off"}, 
              {notificationsEnabled ? " Notifications on" : " Notifications off"}
            </span>
          </p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-lg font-medium text-white">Color Variations</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Enabled Switch
            </label>
            <Switch
              value={autoSaveEnabled}
              onChange={setAutoSaveEnabled}
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
            These switches feature diagonal movement and rotation animations when toggled.
            The circular design and gradient backgrounds create a modern, polished look.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample3; 