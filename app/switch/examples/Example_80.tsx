"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_80";

const SwitchExample80 = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [downloadEpisodes, setDownloadEpisodes] = useState(false);
  const [sleepTimer, setSleepTimer] = useState(true);
  const [showTranscripts, setShowTranscripts] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 p-1">
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
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Seamless episode transitions
              </div>
            )}
          </div>

          {/* Download Episodes */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Download Episodes
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {downloadEpisodes
                    ? "Download for offline listening"
                    : "Stream episodes only"}
                </p>
              </div>
              <Switch
                checked={downloadEpisodes}
                onChange={setDownloadEpisodes}
              />
            </div>
            {downloadEpisodes && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Listen without internet
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
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Stop playback after 30 minutes
              </div>
            )}
          </div>

          {/* Show Transcripts */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Show Transcripts
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {showTranscripts
                    ? "Display episode transcripts"
                    : "Audio only"}
                </p>
              </div>
              <Switch
                checked={showTranscripts}
                onChange={setShowTranscripts}
              />
            </div>
            {showTranscripts && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Read along with episodes
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Podcast Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoPlay ? "Auto-play enabled" : "Manual episode selection"}</p>
              <p>• {downloadEpisodes ? "Download episodes on" : "Streaming only"}</p>
              <p>• {sleepTimer ? "Sleep timer on" : "Continuous playback"}</p>
              <p>• {showTranscripts ? "Transcripts visible" : "Audio only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample80; 