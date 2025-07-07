"use client";

import React, { useState } from "react";
import Switch from "../tsx/Switch_25";

const SwitchExample25 = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [livePreview, setLivePreview] = useState(true);
  const [formatOnSave, setFormatOnSave] = useState(false);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Header Section */}
      <div className="rounded-lg bg-rose-50 p-4 dark:bg-rose-900/20">
        <h2 className="mb-4 text-lg font-semibold text-rose-700 dark:text-rose-400">
          Workspace Settings
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Customize your development environment preferences.
        </p>
      </div>

      {/* Main Settings */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Editor Settings */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-6 text-lg font-medium text-rose-600 dark:text-rose-400">
            Editor Preferences
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Dark Mode
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enable dark theme
                </p>
              </div>
              <Switch
                value={darkMode}
                onChange={setDarkMode}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Auto Save
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Save changes automatically
                </p>
              </div>
              <Switch
                value={autoSave}
                onChange={setAutoSave}
              />
            </div>
          </div>
        </div>

        {/* Preview Settings */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-6 text-lg font-medium text-rose-600 dark:text-rose-400">
            Preview Options
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Live Preview
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Real-time preview updates
                </p>
              </div>
              <Switch
                value={livePreview}
                onChange={setLivePreview}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Format on Save
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Auto-format code when saving
                </p>
              </div>
              <Switch
                value={formatOnSave}
                onChange={setFormatOnSave}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Active Features */}
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <h4 className="mb-4 text-sm font-medium text-rose-600 dark:text-rose-400">
          Active Features
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { label: "Theme", value: darkMode ? "Dark" : "Light" },
            { label: "Auto Save", value: autoSave ? "Enabled" : "Disabled" },
            { label: "Preview Mode", value: livePreview ? "Live" : "Manual" },
            { label: "Code Formatting", value: formatOnSave ? "On Save" : "Manual" }
          ].map((feature, index) => (
            <div key={index} className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">{feature.label}:</span>
                <span className="ml-2">{feature.value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h4 className="mb-4 text-sm font-medium text-rose-600 dark:text-rose-400">
          Keyboard Shortcuts
        </h4>
        <div className="grid gap-4 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center justify-between">
            <span>Toggle Theme</span>
            <kbd className="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-700">
              Ctrl + Shift + T
            </kbd>
          </div>
          <div className="flex items-center justify-between">
            <span>Save File</span>
            <kbd className="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-700">
              Ctrl + S
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample25; 