"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_106";

const SwitchExample106 = () => {
  const [speechPractice, setSpeechPractice] = useState(true);
  const [dailyGoals, setDailyGoals] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);
  const [progressTracking, setProgressTracking] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
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
          {/* Speech Practice */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Speech Practice
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {speechPractice
                    ? "Voice recognition enabled"
                    : "Text-only learning"}
                </p>
              </div>
              <Switch
                checked={speechPractice}
                onChange={setSpeechPractice}
              />
            </div>
            {speechPractice && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • Practice pronunciation with AI feedback
              </div>
            )}
          </div>

          {/* Daily Goals */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Daily Goals
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {dailyGoals
                    ? "Set learning targets"
                    : "Free learning mode"}
                </p>
              </div>
              <Switch
                checked={dailyGoals}
                onChange={setDailyGoals}
              />
            </div>
            {dailyGoals && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • Track daily learning objectives
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
                    ? "Learn without internet"
                    : "Online learning only"}
                </p>
              </div>
              <Switch
                checked={offlineMode}
                onChange={setOfflineMode}
              />
            </div>
            {offlineMode && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • Download lessons for offline use
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
                    ? "Detailed learning stats"
                    : "Basic progress view"}
                </p>
              </div>
              <Switch
                checked={progressTracking}
                onChange={setProgressTracking}
              />
            </div>
            {progressTracking && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • Monitor your learning journey
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Learning Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {speechPractice ? "Speech practice on" : "Text-only mode"}</p>
              <p>• {dailyGoals ? "Daily goals enabled" : "Free learning"}</p>
              <p>• {offlineMode ? "Offline mode on" : "Online only"}</p>
              <p>• {progressTracking ? "Progress tracking on" : "Basic view"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample106; 