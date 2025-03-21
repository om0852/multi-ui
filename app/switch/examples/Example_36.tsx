"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_36";

const SwitchExample36 = () => {
  const [autoplay, setAutoplay] = useState(true);
  const [hdQuality, setHdQuality] = useState(true);
  const [subtitles, setSubtitles] = useState(false);
  const [dataSaver, setDataSaver] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-red-600 to-orange-600 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Streaming Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your video playback preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* Autoplay */}
          <div className="rounded-lg border-2 border-red-100 bg-red-50 p-4 dark:border-red-900 dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Autoplay
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {autoplay
                    ? "Play next episode automatically"
                    : "Manual episode selection"}
                </p>
              </div>
              <Switch
                value={autoplay}
                onChange={setAutoplay}
              />
            </div>
            {autoplay && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Next episode plays in 10 seconds
              </div>
            )}
          </div>

          {/* HD Quality */}
          <div className="rounded-lg border-2 border-red-100 bg-red-50 p-4 dark:border-red-900 dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  HD Quality
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {hdQuality
                    ? "High definition streaming"
                    : "Standard definition streaming"}
                </p>
              </div>
              <Switch
                value={hdQuality}
                onChange={setHdQuality}
              />
            </div>
            {hdQuality && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Streaming in up to 1080p
              </div>
            )}
          </div>

          {/* Subtitles */}
          <div className="rounded-lg border-2 border-red-100 bg-red-50 p-4 dark:border-red-900 dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Subtitles
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {subtitles
                    ? "Show subtitles by default"
                    : "Subtitles disabled"}
                </p>
              </div>
              <Switch
                value={subtitles}
                onChange={setSubtitles}
              />
            </div>
            {subtitles && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Multiple languages available
              </div>
            )}
          </div>

          {/* Data Saver */}
          <div className="rounded-lg border-2 border-red-100 bg-red-50 p-4 dark:border-red-900 dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Data Saver
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {dataSaver
                    ? "Reduce data usage"
                    : "Standard data usage"}
                </p>
              </div>
              <Switch
                value={dataSaver}
                onChange={setDataSaver}
              />
            </div>
            {dataSaver && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Optimized for mobile data
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="mb-3 text-sm font-medium text-orange-900 dark:text-orange-100">
              Playback Summary
            </h4>
            <div className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
              <p>• {autoplay ? "Autoplay enabled" : "Autoplay disabled"}</p>
              <p>• {hdQuality ? "HD quality on" : "Standard quality"}</p>
              <p>• {subtitles ? "Subtitles enabled" : "No subtitles"}</p>
              <p>• {dataSaver ? "Data saver active" : "Full quality streaming"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample36; 