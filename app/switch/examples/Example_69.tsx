"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_69";

const SwitchExample69 = () => {
  const [workoutReminders, setWorkoutReminders] = useState(true);
  const [heartRateMonitor, setHeartRateMonitor] = useState(true);
  const [autoTracking, setAutoTracking] = useState(true);
  const [socialSharing, setSocialSharing] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-red-400 to-pink-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Workout Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your fitness journey
          </p>
        </div>

        <div className="space-y-6">
          {/* Workout Reminders */}
          <div className="rounded-lg border-2 border-red-100 bg-red-50 p-4 dark:border-red-900 dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Workout Reminders
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {workoutReminders
                    ? "Daily exercise reminders"
                    : "No reminders"}
                </p>
              </div>
              <Switch
                checked={workoutReminders}
                onChange={setWorkoutReminders}
              />
            </div>
            {workoutReminders && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Get reminded to exercise daily
              </div>
            )}
          </div>

          {/* Heart Rate Monitor */}
          <div className="rounded-lg border-2 border-red-100 bg-red-50 p-4 dark:border-red-900 dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Heart Rate Monitor
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {heartRateMonitor
                    ? "Track heart rate"
                    : "Manual tracking"}
                </p>
              </div>
              <Switch
                checked={heartRateMonitor}
                onChange={setHeartRateMonitor}
              />
            </div>
            {heartRateMonitor && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Monitor your heart rate during workouts
              </div>
            )}
          </div>

          {/* Auto Tracking */}
          <div className="rounded-lg border-2 border-red-100 bg-red-50 p-4 dark:border-red-900 dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Tracking
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {autoTracking
                    ? "Automatic workout detection"
                    : "Manual logging"}
                </p>
              </div>
              <Switch
                checked={autoTracking}
                onChange={setAutoTracking}
              />
            </div>
            {autoTracking && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Automatically detect and log workouts
              </div>
            )}
          </div>

          {/* Social Sharing */}
          <div className="rounded-lg border-2 border-red-100 bg-red-50 p-4 dark:border-red-900 dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Social Sharing
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {socialSharing
                    ? "Share your progress"
                    : "Private tracking"}
                </p>
              </div>
              <Switch
                checked={socialSharing}
                onChange={setSocialSharing}
              />
            </div>
            {socialSharing && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Share your achievements with friends
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <h4 className="mb-3 text-sm font-medium text-pink-900 dark:text-pink-100">
              Fitness Preferences
            </h4>
            <div className="space-y-2 text-sm text-pink-700 dark:text-pink-300">
              <p>• {workoutReminders ? "Workout reminders on" : "No reminders"}</p>
              <p>• {heartRateMonitor ? "Heart rate tracking on" : "Manual tracking"}</p>
              <p>• {autoTracking ? "Auto tracking on" : "Manual logging"}</p>
              <p>• {socialSharing ? "Social sharing on" : "Private mode"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample69; 