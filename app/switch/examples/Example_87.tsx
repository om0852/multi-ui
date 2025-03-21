"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_87";

const SwitchExample87 = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [downloadQuality, setDownloadQuality] = useState(true);
  const [subtitles, setSubtitles] = useState(false);
  const [continueWatching, setContinueWatching] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Streaming Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your video streaming experience
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
                    ? "Play next episode automatically"
                    : "Manual playback control"}
                </p>
              </div>
              <Switch
                checked={autoPlay}
                onChange={setAutoPlay}
              />
            </div>
            {autoPlay && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Next episode will play automatically
              </div>
            )}
          </div>

          {/* Download Quality */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Download Quality
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {downloadQuality
                    ? "High quality downloads"
                    : "Standard quality downloads"}
                </p>
              </div>
              <Switch
                checked={downloadQuality}
                onChange={setDownloadQuality}
              />
            </div>
            {downloadQuality && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Downloads in 4K quality
              </div>
            )}
          </div>

          {/* Subtitles */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Subtitles
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {subtitles
                    ? "Show subtitles by default"
                    : "Hide subtitles by default"}
                </p>
              </div>
              <Switch
                checked={subtitles}
                onChange={setSubtitles}
              />
            </div>
            {subtitles && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Subtitles will be shown automatically
              </div>
            )}
          </div>

          {/* Continue Watching */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Continue Watching
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {continueWatching
                    ? "Show continue watching"
                    : "Hide continue watching"}
                </p>
              </div>
              <Switch
                checked={continueWatching}
                onChange={setContinueWatching}
              />
            </div>
            {continueWatching && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Resume from where you left off
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Streaming Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoPlay ? "Auto play on" : "Manual playback"}</p>
              <p>• {downloadQuality ? "High quality downloads" : "Standard quality"}</p>
              <p>• {subtitles ? "Subtitles shown" : "Subtitles hidden"}</p>
              <p>• {continueWatching ? "Continue watching on" : "Continue watching off"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample87; 