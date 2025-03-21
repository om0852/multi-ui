"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_35";

const SwitchExample35 = () => {
  const [workoutReminders, setWorkoutReminders] = useState(true);
  const [heartRateMonitor, setHeartRateMonitor] = useState(true);
  const [autoTracking, setAutoTracking] = useState(false);
  const [socialSharing, setSocialSharing] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Fitness Tracking
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your workout and health monitoring preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* Workout Reminders */}
          <div className="rounded-lg border-2 border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Workout Reminders
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {workoutReminders
                    ? "Daily workout notifications active"
                    : "Reminders turned off"}
                </p>
              </div>
              <Switch
                value={workoutReminders}
                onChange={setWorkoutReminders}
              />
            </div>
            {workoutReminders && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Scheduled for your preferred workout time
              </div>
            )}
          </div>

          {/* Heart Rate Monitoring */}
          <div className="rounded-lg border-2 border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Heart Rate Monitor
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {heartRateMonitor
                    ? "Continuous heart rate tracking"
                    : "Heart rate tracking off"}
                </p>
              </div>
              <Switch
                value={heartRateMonitor}
                onChange={setHeartRateMonitor}
              />
            </div>
            {heartRateMonitor && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Monitoring and recording heart rate data
              </div>
            )}
          </div>

          {/* Auto Activity Tracking */}
          <div className="rounded-lg border-2 border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Activity Tracking
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {autoTracking
                    ? "Automatically detect workouts"
                    : "Manual workout tracking"}
                </p>
              </div>
              <Switch
                value={autoTracking}
                onChange={setAutoTracking}
              />
            </div>
            {autoTracking && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Detects running, walking, and cycling
              </div>
            )}
          </div>

          {/* Social Sharing */}
          <div className="rounded-lg border-2 border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Social Sharing
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {socialSharing
                    ? "Share achievements with friends"
                    : "Private workout data"}
                </p>
              </div>
              <Switch
                value={socialSharing}
                onChange={setSocialSharing}
              />
            </div>
            {socialSharing && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Share progress on social media
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-violet-50 p-4 dark:bg-violet-900/20">
            <h4 className="mb-3 text-sm font-medium text-violet-900 dark:text-violet-100">
              Tracking Summary
            </h4>
            <div className="space-y-2 text-sm text-violet-700 dark:text-violet-300">
              <p>• {workoutReminders ? "Daily reminders set" : "No workout reminders"}</p>
              <p>• {heartRateMonitor ? "Heart monitoring on" : "Heart monitoring off"}</p>
              <p>• {autoTracking ? "Auto-tracking enabled" : "Manual tracking only"}</p>
              <p>• {socialSharing ? "Social sharing on" : "Workouts are private"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample35; 