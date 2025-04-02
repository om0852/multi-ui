"use client";

import React, { useState } from "react";
import Switch from "../tsx/Switch_21";

const SwitchExample21 = () => {
  const [highQuality, setHighQuality] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const [offlineMode, setOfflineMode] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
        <h2 className="mb-4 text-lg font-semibold text-purple-700 dark:text-purple-400">
          Music Player Settings
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Configure your audio playback preferences with these elegant toggle switches.
        </p>
      </div>

      {/* Light Background Example */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium text-purple-600 dark:text-purple-400">
          Audio Settings
        </h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200">
                High Quality Streaming
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                320kbps audio quality
              </p>
            </div>
            <Switch
              value={highQuality}
              onChange={setHighQuality}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200">
                Auto-Play
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Start playing automatically
              </p>
            </div>
            <Switch
              value={autoPlay}
              onChange={setAutoPlay}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200">
                Offline Mode
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Download for offline listening
              </p>
            </div>
            <Switch
              value={offlineMode}
              onChange={setOfflineMode}
            />
          </div>
        </div>
        
        <div className="mt-6 rounded-md bg-purple-50 p-4 dark:bg-purple-900/20">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            Current Settings: 
            <span className="ml-1 font-semibold">
              {[
                highQuality && "High Quality Audio",
                autoPlay && "Auto-Play Enabled",
                offlineMode && "Offline Mode Active"
              ].filter(Boolean).join(" • ")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample21; 