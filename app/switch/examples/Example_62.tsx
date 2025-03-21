"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_62";

const SwitchExample62 = () => {
  const [shufflePlay, setShufflePlay] = useState(true);
  const [repeatMode, setRepeatMode] = useState(false);
  const [crossfade, setCrossfade] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 p-1">
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
          {/* Shuffle Play */}
          <div className="rounded-lg border-2 border-purple-100 bg-purple-50 p-4 dark:border-purple-900 dark:bg-purple-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Shuffle Play
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {shufflePlay
                    ? "Random song order"
                    : "Sequential playback"}
                </p>
              </div>
              <Switch
                checked={shufflePlay}
                onChange={setShufflePlay}
              />
            </div>
            {shufflePlay && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Play songs in random order
              </div>
            )}
          </div>

          {/* Repeat Mode */}
          <div className="rounded-lg border-2 border-purple-100 bg-purple-50 p-4 dark:border-purple-900 dark:bg-purple-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Repeat Mode
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {repeatMode
                    ? "Repeat playlist"
                    : "Play once"}
                </p>
              </div>
              <Switch
                checked={repeatMode}
                onChange={setRepeatMode}
              />
            </div>
            {repeatMode && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Loop through playlist
              </div>
            )}
          </div>

          {/* Crossfade */}
          <div className="rounded-lg border-2 border-purple-100 bg-purple-50 p-4 dark:border-purple-900 dark:bg-purple-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Crossfade
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {crossfade
                    ? "Smooth transitions"
                    : "Instant song changes"}
                </p>
              </div>
              <Switch
                checked={crossfade}
                onChange={setCrossfade}
              />
            </div>
            {crossfade && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Smooth transition between songs
              </div>
            )}
          </div>

          {/* Offline Mode */}
          <div className="rounded-lg border-2 border-purple-100 bg-purple-50 p-4 dark:border-purple-900 dark:bg-purple-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Offline Mode
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {offlineMode
                    ? "Download for offline"
                    : "Stream only"}
                </p>
              </div>
              <Switch
                checked={offlineMode}
                onChange={setOfflineMode}
              />
            </div>
            {offlineMode && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Listen without internet connection
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <h4 className="mb-3 text-sm font-medium text-pink-900 dark:text-pink-100">
              Playback Preferences
            </h4>
            <div className="space-y-2 text-sm text-pink-700 dark:text-pink-300">
              <p>• {shufflePlay ? "Shuffle on" : "Sequential play"}</p>
              <p>• {repeatMode ? "Repeat on" : "Play once"}</p>
              <p>• {crossfade ? "Crossfade on" : "Instant changes"}</p>
              <p>• {offlineMode ? "Offline mode on" : "Stream only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample62; 