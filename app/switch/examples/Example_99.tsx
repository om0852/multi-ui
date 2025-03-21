"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_99";

const SwitchExample99 = () => {
  const [crossfade, setCrossfade] = useState(true);
  const [audioQuality, setAudioQuality] = useState(true);
  const [lyricsDisplay, setLyricsDisplay] = useState(false);
  const [offlineMode, setOfflineMode] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Music Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your listening experience
          </p>
        </div>

        <div className="space-y-6">
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
              <div className="mt-4 text-sm text-pink-600 dark:text-pink-400">
                • 3-second crossfade between tracks
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
                    ? "High quality streaming"
                    : "Standard quality"}
                </p>
              </div>
              <Switch
                checked={audioQuality}
                onChange={setAudioQuality}
              />
            </div>
            {audioQuality && (
              <div className="mt-4 text-sm text-pink-600 dark:text-pink-400">
                • 320kbps audio streaming
              </div>
            )}
          </div>

          {/* Lyrics Display */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Lyrics Display
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {lyricsDisplay
                    ? "Show song lyrics"
                    : "No lyrics display"}
                </p>
              </div>
              <Switch
                checked={lyricsDisplay}
                onChange={setLyricsDisplay}
              />
            </div>
            {lyricsDisplay && (
              <div className="mt-4 text-sm text-pink-600 dark:text-pink-400">
                • Synchronized lyrics display
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
                    ? "Download for offline use"
                    : "Streaming only"}
                </p>
              </div>
              <Switch
                checked={offlineMode}
                onChange={setOfflineMode}
              />
            </div>
            {offlineMode && (
              <div className="mt-4 text-sm text-pink-600 dark:text-pink-400">
                • Listen without internet
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Music Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {crossfade ? "Crossfade on" : "Standard transitions"}</p>
              <p>• {audioQuality ? "High quality on" : "Standard quality"}</p>
              <p>• {lyricsDisplay ? "Lyrics display on" : "No lyrics"}</p>
              <p>• {offlineMode ? "Offline mode on" : "Streaming only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample99; 