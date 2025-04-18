"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_24";

const SwitchExample24 = () => {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [nightMode, setNightMode] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Header Section */}
      <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <h2 className="mb-4 text-lg font-semibold text-indigo-700 dark:text-indigo-400">
          Notification Preferences
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Customize how and when you receive notifications and alerts.
        </p>
      </div>

      {/* Notification Types */}
      <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="mb-6 text-lg font-medium text-indigo-600 dark:text-indigo-400">
          Alert Settings
        </h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200">
                Push Notifications
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive instant alerts on your device
              </p>
            </div>
            <Switch
              value={pushNotifications}
              onChange={setPushNotifications}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200">
                Email Alerts
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get important updates via email
              </p>
            </div>
            <Switch
              value={emailAlerts}
              onChange={setEmailAlerts}
            />
          </div>
        </div>

        <div className="my-8 border-t border-gray-200 dark:border-gray-700"></div>

        <h3 className="mb-6 text-lg font-medium text-indigo-600 dark:text-indigo-400">
          Sound & Schedule
        </h3>

        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200">
                Sound Effects
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Play sounds for notifications
              </p>
            </div>
            <Switch
              value={soundEnabled}
              onChange={setSoundEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200">
                Night Mode
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Mute notifications during night hours
              </p>
            </div>
            <Switch
              value={nightMode}
              onChange={setNightMode}
            />
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <h4 className="mb-4 text-sm font-medium text-indigo-600 dark:text-indigo-400">
          Current Configuration
        </h4>
        <div className="space-y-3">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Active Channels:</span>
            <span className="ml-2">
              {[
                pushNotifications && "Push",
                emailAlerts && "Email"
              ].filter(Boolean).join(", ")}
            </span>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Sound:</span>
            <span className="ml-2">{soundEnabled ? "Enabled" : "Disabled"}</span>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Night Mode:</span>
            <span className="ml-2">{nightMode ? "Active (10 PM - 7 AM)" : "Inactive"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample24; 