"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_93";

const SwitchExample93 = () => {
  const [workoutTracking, setWorkoutTracking] = useState(true);
  const [heartRateMonitor, setHeartRateMonitor] = useState(true);
  const [sleepTracking, setSleepTracking] = useState(false);
  const [nutritionLogging, setNutritionLogging] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-orange-400 to-red-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Fitness Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your fitness tracking experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Workout Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Workout Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {workoutTracking
                    ? "Track your workouts"
                    : "Manual workout logging"}
                </p>
              </div>
              <Switch
                checked={workoutTracking}
                onChange={setWorkoutTracking}
              />
            </div>
            {workoutTracking && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Automatic workout detection
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
                    ? "Monitor heart rate"
                    : "Heart rate tracking off"}
                </p>
              </div>
              <Switch
                checked={heartRateMonitor}
                onChange={setHeartRateMonitor}
              />
            </div>
            {heartRateMonitor && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Continuous heart rate monitoring
              </div>
            )}
          </div>

          {/* Sleep Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Sleep Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {sleepTracking
                    ? "Track sleep patterns"
                    : "Manual sleep logging"}
                </p>
              </div>
              <Switch
                checked={sleepTracking}
                onChange={setSleepTracking}
              />
            </div>
            {sleepTracking && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Sleep quality analysis
              </div>
            )}
          </div>

          {/* Nutrition Logging */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Nutrition Logging
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {nutritionLogging
                    ? "Track meals and calories"
                    : "Basic nutrition view"}
                </p>
              </div>
              <Switch
                checked={nutritionLogging}
                onChange={setNutritionLogging}
              />
            </div>
            {nutritionLogging && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Detailed nutrition breakdown
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Fitness Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {workoutTracking ? "Workout tracking on" : "Manual logging"}</p>
              <p>• {heartRateMonitor ? "Heart rate monitoring on" : "Heart rate off"}</p>
              <p>• {sleepTracking ? "Sleep tracking on" : "Manual sleep logging"}</p>
              <p>• {nutritionLogging ? "Nutrition tracking on" : "Basic nutrition view"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample93; 