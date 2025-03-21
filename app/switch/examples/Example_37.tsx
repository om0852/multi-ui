"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_37";

const SwitchExample37 = () => {
  const [focusMode, setFocusMode] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Productivity Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Optimize your work environment
          </p>
        </div>

        <div className="space-y-6">
          {/* Focus Mode */}
          <div className="rounded-lg border-2 border-green-100 bg-green-50 p-4 dark:border-green-900 dark:bg-green-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Focus Mode
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {focusMode
                    ? "Minimize distractions"
                    : "All features enabled"}
                </p>
              </div>
              <Switch
                value={focusMode}
                onChange={setFocusMode}
              />
            </div>
            {focusMode && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Notifications silenced for 25 minutes
              </div>
            )}
          </div>

          {/* Dark Mode */}
          <div className="rounded-lg border-2 border-green-100 bg-green-50 p-4 dark:border-green-900 dark:bg-green-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Dark Mode
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {darkMode
                    ? "Dark theme active"
                    : "Light theme active"}
                </p>
              </div>
              <Switch
                value={darkMode}
                onChange={setDarkMode}
              />
            </div>
            {darkMode && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Easier on your eyes at night
              </div>
            )}
          </div>

          {/* Auto Save */}
          <div className="rounded-lg border-2 border-green-100 bg-green-50 p-4 dark:border-green-900 dark:bg-green-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Save
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {autoSave
                    ? "Save changes automatically"
                    : "Manual save required"}
                </p>
              </div>
              <Switch
                value={autoSave}
                onChange={setAutoSave}
              />
            </div>
            {autoSave && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Changes saved every 30 seconds
              </div>
            )}
          </div>

          {/* Desktop Notifications */}
          <div className="rounded-lg border-2 border-green-100 bg-green-50 p-4 dark:border-green-900 dark:bg-green-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Desktop Notifications
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {notifications
                    ? "Get important updates"
                    : "Notifications off"}
                </p>
              </div>
              <Switch
                value={notifications}
                onChange={setNotifications}
              />
            </div>
            {notifications && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Task reminders and updates
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20">
            <h4 className="mb-3 text-sm font-medium text-emerald-900 dark:text-emerald-100">
              Current Setup
            </h4>
            <div className="space-y-2 text-sm text-emerald-700 dark:text-emerald-300">
              <p>• {focusMode ? "Focus mode active" : "Standard mode"}</p>
              <p>• {darkMode ? "Dark theme" : "Light theme"}</p>
              <p>• {autoSave ? "Auto-saving enabled" : "Manual saving"}</p>
              <p>• {notifications ? "Notifications on" : "Notifications off"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample37; 