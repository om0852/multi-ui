"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_122";

const SwitchExample122 = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [downloadQuality, setDownloadQuality] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);
  const [contentFilter, setContentFilter] = useState(true);

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
                • Automatically play next episode
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
                    : "Standard quality"}
                </p>
              </div>
              <Switch
                checked={downloadQuality}
                onChange={setDownloadQuality}
              />
            </div>
            {downloadQuality && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Download in 4K quality when available
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
                    ? "Watch without internet"
                    : "Streaming only"}
                </p>
              </div>
              <Switch
                checked={offlineMode}
                onChange={setOfflineMode}
              />
            </div>
            {offlineMode && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Download content for offline viewing
              </div>
            )}
          </div>

          {/* Content Filter */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Content Filter
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {contentFilter
                    ? "Filter mature content"
                    : "Show all content"}
                </p>
              </div>
              <Switch
                checked={contentFilter}
                onChange={setContentFilter}
              />
            </div>
            {contentFilter && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Hide mature or restricted content
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
              <p>• {offlineMode ? "Offline mode on" : "Streaming only"}</p>
              <p>• {contentFilter ? "Content filter on" : "All content visible"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample122; 