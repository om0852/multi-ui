"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_81";

const SwitchExample81 = () => {
  const [dailyPractice, setDailyPractice] = useState(true);
  const [speechRecognition, setSpeechRecognition] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);
  const [progressTracking, setProgressTracking] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Language Learning Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your learning experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Daily Practice */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Daily Practice
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {dailyPractice
                    ? "Daily learning reminders"
                    : "No daily reminders"}
                </p>
              </div>
              <Switch
                checked={dailyPractice}
                onChange={setDailyPractice}
              />
            </div>
            {dailyPractice && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • 15 minutes of practice daily
              </div>
            )}
          </div>

          {/* Speech Recognition */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Speech Recognition
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {speechRecognition
                    ? "Practice pronunciation"
                    : "Text-only learning"}
                </p>
              </div>
              <Switch
                checked={speechRecognition}
                onChange={setSpeechRecognition}
              />
            </div>
            {speechRecognition && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Get pronunciation feedback
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
                    ? "Download lessons"
                    : "Online learning only"}
                </p>
              </div>
              <Switch
                checked={offlineMode}
                onChange={setOfflineMode}
              />
            </div>
            {offlineMode && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Learn without internet
              </div>
            )}
          </div>

          {/* Progress Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Progress Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {progressTracking
                    ? "Track learning progress"
                    : "Basic learning mode"}
                </p>
              </div>
              <Switch
                checked={progressTracking}
                onChange={setProgressTracking}
              />
            </div>
            {progressTracking && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • View learning statistics
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Learning Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {dailyPractice ? "Daily practice on" : "No daily reminders"}</p>
              <p>• {speechRecognition ? "Speech recognition on" : "Text-only mode"}</p>
              <p>• {offlineMode ? "Offline mode on" : "Online learning only"}</p>
              <p>• {progressTracking ? "Progress tracking on" : "Basic learning mode"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample81; 