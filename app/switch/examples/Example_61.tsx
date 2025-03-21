"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_61";

const SwitchExample61 = () => {
  const [autoDownload, setAutoDownload] = useState(true);
  const [sleepTimer, setSleepTimer] = useState(true);
  const [speedControl, setSpeedControl] = useState(false);
  const [offlineMode, setOfflineMode] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Podcast Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your listening experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Download */}
          <div className="rounded-lg border-2 border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Download
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {autoDownload
                    ? "Download new episodes"
                    : "Manual download only"}
                </p>
              </div>
              <Switch
                checked={autoDownload}
                onChange={setAutoDownload}
              />
            </div>
            {autoDownload && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Automatically download new episodes
              </div>
            )}
          </div>

          {/* Sleep Timer */}
          <div className="rounded-lg border-2 border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Sleep Timer
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {sleepTimer
                    ? "Auto-stop playback"
                    : "Continuous playback"}
                </p>
              </div>
              <Switch
                checked={sleepTimer}
                onChange={setSleepTimer}
              />
            </div>
            {sleepTimer && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Stop playback after set time
              </div>
            )}
          </div>

          {/* Speed Control */}
          <div className="rounded-lg border-2 border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
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
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Control playback speed (0.5x - 2x)
              </div>
            )}
          </div>

          {/* Offline Mode */}
          <div className="rounded-lg border-2 border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Offline Mode
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {offlineMode
                    ? "Listen without internet"
                    : "Stream only"}
                </p>
              </div>
              <Switch
                checked={offlineMode}
                onChange={setOfflineMode}
              />
            </div>
            {offlineMode && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Access downloaded episodes offline
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="mb-3 text-sm font-medium text-orange-900 dark:text-orange-100">
              Listening Preferences
            </h4>
            <div className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
              <p>• {autoDownload ? "Auto download on" : "Manual download"}</p>
              <p>• {sleepTimer ? "Sleep timer on" : "No sleep timer"}</p>
              <p>• {speedControl ? "Speed control on" : "Normal speed"}</p>
              <p>• {offlineMode ? "Offline mode on" : "Stream only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample61; 