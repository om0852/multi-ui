"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_66";

const SwitchExample66 = () => {
  const [autoSave, setAutoSave] = useState(true);
  const [inGameChat, setInGameChat] = useState(true);
  const [performanceMode, setPerformanceMode] = useState(false);
  const [crossPlatform, setCrossPlatform] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Gaming Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your gaming experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Save */}
          <div className="rounded-lg border-2 border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Save
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {autoSave
                    ? "Automatic game saving"
                    : "Manual saving only"}
                </p>
              </div>
              <Switch
                checked={autoSave}
                onChange={setAutoSave}
              />
            </div>
            {autoSave && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Game progress saved every 5 minutes
              </div>
            )}
          </div>

          {/* In-Game Chat */}
          <div className="rounded-lg border-2 border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  In-Game Chat
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {inGameChat
                    ? "Chat with other players"
                    : "Chat disabled"}
                </p>
              </div>
              <Switch
                checked={inGameChat}
                onChange={setInGameChat}
              />
            </div>
            {inGameChat && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Communicate with team members
              </div>
            )}
          </div>

          {/* Performance Mode */}
          <div className="rounded-lg border-2 border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Performance Mode
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {performanceMode
                    ? "Optimized for speed"
                    : "High quality graphics"}
                </p>
              </div>
              <Switch
                checked={performanceMode}
                onChange={setPerformanceMode}
              />
            </div>
            {performanceMode && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Reduced graphics for better FPS
              </div>
            )}
          </div>

          {/* Cross-Platform */}
          <div className="rounded-lg border-2 border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Cross-Platform
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {crossPlatform
                    ? "Play with all platforms"
                    : "Platform-specific only"}
                </p>
              </div>
              <Switch
                checked={crossPlatform}
                onChange={setCrossPlatform}
              />
            </div>
            {crossPlatform && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Match with players on any device
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="mb-3 text-sm font-medium text-purple-900 dark:text-purple-100">
              Gaming Preferences
            </h4>
            <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
              <p>• {autoSave ? "Auto save enabled" : "Manual saving"}</p>
              <p>• {inGameChat ? "Chat enabled" : "Chat disabled"}</p>
              <p>• {performanceMode ? "Performance mode on" : "High quality mode"}</p>
              <p>• {crossPlatform ? "Cross-platform enabled" : "Platform-specific"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample66; 