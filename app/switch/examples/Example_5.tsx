"use client";

import React, { useState } from "react";
import Switch from "../tsx/Switch_5";

const SwitchExample5 = () => {
  const [privacyEnabled, setPrivacyEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const [newsletterEnabled, setNewsletterEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Animated Gradient Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Smooth animated switches with gradient backgrounds and glow effects.
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
              value={privacyEnabled}
              onChange={setPrivacyEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Marketing Communications
            </label>
            <Switch
              value={marketingEnabled}
              onChange={setMarketingEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Newsletter Subscription
            </label>
            <Switch
              value={newsletterEnabled}
              onChange={setNewsletterEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {privacyEnabled ? "Enhanced privacy on" : "Enhanced privacy off"}, 
              {marketingEnabled ? " Marketing on" : " Marketing off"}, 
              {newsletterEnabled ? " Newsletter on" : " Newsletter off"}
            </span>
          </p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-lg font-medium text-white">Disabled State Examples</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Enabled Switch
            </label>
            <Switch
              value={privacyEnabled}
              onChange={setPrivacyEnabled}
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
            The switches feature smooth animations, gradient backgrounds, and a glow effect when active.
            Disabled switches maintain their visual state but cannot be interacted with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample5; 