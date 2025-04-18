"use client";

import React, { useState } from "react";
import { Switch } from "../_components/Switch_1";

const SwitchExample1 = () => {
  const [featureEnabled, setFeatureEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleFeature = () => setFeatureEnabled(prev => !prev);
  const toggleDarkMode = () => setDarkModeEnabled(prev => !prev);
  const toggleNotifications = () => setNotificationsEnabled(prev => !prev);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Basic Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Simple toggle switches with spring animations.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Default Style</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Enable feature
            </label>
            <Switch
              isOn={featureEnabled}
              onToggle={toggleFeature}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Dark mode
            </label>
            <Switch
              isOn={darkModeEnabled}
              onToggle={toggleDarkMode}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Notifications
            </label>
            <Switch
              isOn={notificationsEnabled}
              onToggle={toggleNotifications}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current state: 
            <span className="ml-1 font-semibold">
              {featureEnabled ? "Feature enabled" : "Feature disabled"}, 
              {darkModeEnabled ? " Dark mode on" : " Dark mode off"}, 
              {notificationsEnabled ? " Notifications on" : " Notifications off"}
            </span>
          </p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-lg font-medium text-white">Dark Background</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Enable feature
            </label>
            <Switch
              isOn={featureEnabled}
              onToggle={toggleFeature}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Dark mode
            </label>
            <Switch
              isOn={darkModeEnabled}
              onToggle={toggleDarkMode}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Notifications
            </label>
            <Switch
              isOn={notificationsEnabled}
              onToggle={toggleNotifications}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-800 p-4">
          <p className="text-sm text-gray-300">
            Current state: 
            <span className="ml-1 font-semibold">
              {featureEnabled ? "Feature enabled" : "Feature disabled"}, 
              {darkModeEnabled ? " Dark mode on" : " Dark mode off"}, 
              {notificationsEnabled ? " Notifications on" : " Notifications off"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample1; 