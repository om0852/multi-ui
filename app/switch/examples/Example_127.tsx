"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_127";

const SwitchExample127 = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [downloadQuality, setDownloadQuality] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);
  const [contentFilter, setContentFilter] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 p-1">
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
                    : "Manual episode selection"}
                </p>
              </div>
              <Switch
                checked={autoPlay}
                onChange={setAutoPlay}
              />
            </div>
            {autoPlay && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
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
                    : "Standard quality downloads"}
                </p>
              </div>
              <Switch
                checked={downloadQuality}
                onChange={setDownloadQuality}
              />
            </div>
            {downloadQuality && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Download in 4K quality
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
                    ? "Watch downloaded content"
                    : "Stream content online"}
                </p>
              </div>
              <Switch
                checked={offlineMode}
                onChange={setOfflineMode}
              />
            </div>
            {offlineMode && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Watch without internet connection
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
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Filter out mature or sensitive content
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Streaming Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoPlay ? "Auto play on" : "Manual episode selection"}</p>
              <p>• {downloadQuality ? "High quality downloads" : "Standard quality"}</p>
              <p>• {offlineMode ? "Offline mode on" : "Online streaming"}</p>
              <p>• {contentFilter ? "Content filtering on" : "All content shown"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample127; 