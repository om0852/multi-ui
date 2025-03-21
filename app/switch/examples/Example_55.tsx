"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_55";

const SwitchExample55 = () => {
  const [autoDownload, setAutoDownload] = useState(true);
  const [sleepTimer, setSleepTimer] = useState(false);
  const [speedControl, setSpeedControl] = useState(true);
  const [offlineMode, setOfflineMode] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Podcast Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your podcast listening experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Download */}
          <div className="rounded-lg border-2 border-yellow-100 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Download
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {autoDownload
                    ? "Download new episodes automatically"
                    : "Manual downloads only"}
                </p>
              </div>
              <Switch
                checked={autoDownload}
                onChange={setAutoDownload}
              />
            </div>
            {autoDownload && (
              <div className="mt-4 text-sm text-yellow-600 dark:text-yellow-400">
                • Download over WiFi only
              </div>
            )}
          </div>

          {/* Sleep Timer */}
          <div className="rounded-lg border-2 border-yellow-100 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Sleep Timer
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {sleepTimer
                    ? "Auto-stop after set time"
                    : "Continuous playback"}
                </p>
              </div>
              <Switch
                checked={sleepTimer}
                onChange={setSleepTimer}
              />
            </div>
            {sleepTimer && (
              <div className="mt-4 text-sm text-yellow-600 dark:text-yellow-400">
                • Stop after 30 minutes
              </div>
            )}
          </div>

          {/* Speed Control */}
          <div className="rounded-lg border-2 border-yellow-100 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Speed Control
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {speedControl
                    ? "Adjust playback speed"
                    : "Normal speed only"}
                </p>
              </div>
              <Switch
                checked={speedControl}
                onChange={setSpeedControl}
              />
            </div>
            {speedControl && (
              <div className="mt-4 text-sm text-yellow-600 dark:text-yellow-400">
                • 0.5x to 2x speed options
              </div>
            )}
          </div>

          {/* Offline Mode */}
          <div className="rounded-lg border-2 border-yellow-100 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Offline Mode
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {offlineMode
                    ? "Listen without internet"
                    : "Streaming only"}
                </p>
              </div>
              <Switch
                checked={offlineMode}
                onChange={setOfflineMode}
              />
            </div>
            {offlineMode && (
              <div className="mt-4 text-sm text-yellow-600 dark:text-yellow-400">
                • Access downloaded episodes
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <h4 className="mb-3 text-sm font-medium text-amber-900 dark:text-amber-100">
              Listening Preferences
            </h4>
            <div className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
              <p>• {autoDownload ? "Auto-download on" : "Manual downloads"}</p>
              <p>• {sleepTimer ? "Sleep timer on" : "Continuous playback"}</p>
              <p>• {speedControl ? "Speed control on" : "Normal speed"}</p>
              <p>• {offlineMode ? "Offline mode on" : "Streaming only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample55; 