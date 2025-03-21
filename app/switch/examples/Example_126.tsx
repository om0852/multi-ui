"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_126";

const SwitchExample126 = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [crossfade, setCrossfade] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);
  const [audioQuality, setAudioQuality] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-fuchsia-400 to-purple-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Music Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your music experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Play */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Play
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {autoPlay
                    ? "Play next track automatically"
                    : "Manual track selection"}
                </p>
              </div>
              <Switch
                checked={autoPlay}
                onChange={setAutoPlay}
              />
            </div>
            {autoPlay && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Automatically play next track
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
                    ? "Smooth track transitions"
                    : "Standard transitions"}
                </p>
              </div>
              <Switch
                checked={crossfade}
                onChange={setCrossfade}
              />
            </div>
            {crossfade && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Smooth transition between tracks
              </div>
            )}
          </div>

          {/* Offline Mode */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Offline Mode
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {offlineMode
                    ? "Play downloaded music"
                    : "Stream music online"}
                </p>
              </div>
              <Switch
                checked={offlineMode}
                onChange={setOfflineMode}
              />
            </div>
            {offlineMode && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Listen without internet connection
              </div>
            )}
          </div>

          {/* Audio Quality */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Audio Quality
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {audioQuality
                    ? "High quality audio"
                    : "Standard quality"}
                </p>
              </div>
              <Switch
                checked={audioQuality}
                onChange={setAudioQuality}
              />
            </div>
            {audioQuality && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Stream in high quality (320kbps)
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Music Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoPlay ? "Auto play on" : "Manual track selection"}</p>
              <p>• {crossfade ? "Crossfade enabled" : "Standard transitions"}</p>
              <p>• {offlineMode ? "Offline mode on" : "Online streaming"}</p>
              <p>• {audioQuality ? "High quality audio" : "Standard quality"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample126; 