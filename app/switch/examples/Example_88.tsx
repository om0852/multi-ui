"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_88";

const SwitchExample88 = () => {
  const [inGameChat, setInGameChat] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [achievementTracking, setAchievementTracking] = useState(true);
  const [crossPlatform, setCrossPlatform] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 p-1">
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
          {/* In-Game Chat */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  In-Game Chat
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {inGameChat
                    ? "Enable voice and text chat"
                    : "Disable all chat features"}
                </p>
              </div>
              <Switch
                checked={inGameChat}
                onChange={setInGameChat}
              />
            </div>
            {inGameChat && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Communicate with other players
              </div>
            )}
          </div>

          {/* Auto Save */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Save
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {autoSave
                    ? "Automatic game saving"
                    : "Manual save only"}
                </p>
              </div>
              <Switch
                checked={autoSave}
                onChange={setAutoSave}
              />
            </div>
            {autoSave && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Save progress automatically
              </div>
            )}
          </div>

          {/* Achievement Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Achievement Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {achievementTracking
                    ? "Track game achievements"
                    : "Disable achievement tracking"}
                </p>
              </div>
              <Switch
                checked={achievementTracking}
                onChange={setAchievementTracking}
              />
            </div>
            {achievementTracking && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Monitor your gaming progress
              </div>
            )}
          </div>

          {/* Cross-Platform */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Cross-Platform
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {crossPlatform
                    ? "Enable cross-platform play"
                    : "Platform-specific play only"}
                </p>
              </div>
              <Switch
                checked={crossPlatform}
                onChange={setCrossPlatform}
              />
            </div>
            {crossPlatform && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Play with users on other platforms
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Gaming Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {inGameChat ? "Chat enabled" : "Chat disabled"}</p>
              <p>• {autoSave ? "Auto save on" : "Manual save only"}</p>
              <p>• {achievementTracking ? "Achievement tracking on" : "Achievement tracking off"}</p>
              <p>• {crossPlatform ? "Cross-platform enabled" : "Platform-specific only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample88; 