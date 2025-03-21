"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_84";

const SwitchExample84 = () => {
  const [workoutReminders, setWorkoutReminders] = useState(true);
  const [heartRateMonitor, setHeartRateMonitor] = useState(true);
  const [autoTracking, setAutoTracking] = useState(false);
  const [socialSharing, setSocialSharing] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-red-400 to-pink-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Workout Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your fitness tracking experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Workout Reminders */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Workout Reminders
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {workoutReminders
                    ? "Get workout reminders"
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
                • Daily workout reminders
              </div>
            )}
          </div>

          {/* Heart Rate Monitor */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Heart Rate Monitor
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {heartRateMonitor
                    ? "Track heart rate"
                    : "No heart rate tracking"}
                </p>
              </div>
              <Switch
                checked={heartRateMonitor}
                onChange={setHeartRateMonitor}
              />
            </div>
            {heartRateMonitor && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Monitor heart rate during workouts
              </div>
            )}
          </div>

          {/* Auto Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {autoTracking
                    ? "Auto-detect workouts"
                    : "Manual workout logging"}
                </p>
              </div>
              <Switch
                checked={autoTracking}
                onChange={setAutoTracking}
              />
            </div>
            {autoTracking && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Automatically track workouts
              </div>
            )}
          </div>

          {/* Social Sharing */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Social Sharing
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {socialSharing
                    ? "Share achievements"
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
                • Connect with friends
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Workout Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {workoutReminders ? "Workout reminders on" : "No reminders"}</p>
              <p>• {heartRateMonitor ? "Heart rate monitor on" : "No heart rate tracking"}</p>
              <p>• {autoTracking ? "Auto tracking on" : "Manual workout logging"}</p>
              <p>• {socialSharing ? "Social sharing on" : "Private tracking"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample84; 