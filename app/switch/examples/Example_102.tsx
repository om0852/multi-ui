"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_102";

const SwitchExample102 = () => {
  const [autoDownload, setAutoDownload] = useState(true);
  const [speedControl, setSpeedControl] = useState(true);
  const [sleepTimer, setSleepTimer] = useState(false);
  const [crossfade, setCrossfade] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 p-1">
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
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Download
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {autoDownload
                    ? "Download new episodes automatically"
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
                • New episodes downloaded when available
              </div>
            )}
          </div>

          {/* Speed Control */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Speed Control
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
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
                • Available speeds: 0.5x to 2.0x
              </div>
            )}
          </div>

          {/* Sleep Timer */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Sleep Timer
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
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
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Stop playback after 30 minutes
              </div>
            )}
          </div>

          {/* Crossfade */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Crossfade
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {crossfade
                    ? "Smooth episode transitions"
                    : "Standard transitions"}
                </p>
              </div>
              <Switch
                checked={crossfade}
                onChange={setCrossfade}
              />
            </div>
            {crossfade && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • 3-second fade between episodes
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Podcast Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoDownload ? "Auto download on" : "Manual download"}</p>
              <p>• {speedControl ? "Speed control enabled" : "Normal speed only"}</p>
              <p>• {sleepTimer ? "Sleep timer on" : "Continuous playback"}</p>
              <p>• {crossfade ? "Crossfade enabled" : "Standard transitions"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample102; 