"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_8";

const SwitchExample8 = () => {
  const [privacyEnabled, setPrivacyEnabled] = useState(true);
  const [trackingEnabled, setTrackingEnabled] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Simple Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Clean and minimal switches with smooth spring animations.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Privacy Settings</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Enhanced Privacy
            </label>
            <Switch
              checked={privacyEnabled}
              onChange={setPrivacyEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Allow Tracking
            </label>
            <Switch
              checked={trackingEnabled}
              onChange={setTrackingEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Usage Analytics
            </label>
            <Switch
              checked={analyticsEnabled}
              onChange={setAnalyticsEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {privacyEnabled ? "Enhanced privacy on" : "Enhanced privacy off"}, 
              {trackingEnabled ? " Tracking allowed" : " Tracking blocked"}, 
              {analyticsEnabled ? " Analytics enabled" : " Analytics disabled"}
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
              checked={privacyEnabled}
              onChange={setPrivacyEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (On)
            </label>
            <Switch
              checked={true}
              onChange={() => {}}
              disabled={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (Off)
            </label>
            <Switch
              checked={false}
              onChange={() => {}}
              disabled={true}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-800 p-4">
          <p className="text-sm text-gray-300">
            These switches use a clean, minimal design with a blue accent color when active.
            The toggle animation uses a spring effect for a natural feel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample8; 