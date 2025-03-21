"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_29";

const SwitchExample29 = () => {
  const [activityTracking, setActivityTracking] = useState(true);
  const [heartRate, setHeartRate] = useState(true);
  const [workoutReminders, setWorkoutReminders] = useState(false);
  const [socialSharing, setSocialSharing] = useState(false);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Header Section */}
      <div className="rounded-lg bg-lime-50 p-4 dark:bg-lime-900/20">
        <h2 className="mb-4 text-lg font-semibold text-lime-700 dark:text-lime-400">
          Fitness Settings
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Customize your workout tracking and health monitoring preferences.
        </p>
      </div>

      {/* Main Settings */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Tracking Settings */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-6 text-lg font-medium text-lime-600 dark:text-lime-400">
            Activity Tracking
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Activity Monitor
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Track steps and movement
                </p>
              </div>
              <Switch
                value={activityTracking}
                onChange={setActivityTracking}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Heart Rate Monitor
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Continuous heart rate tracking
                </p>
              </div>
              <Switch
                value={heartRate}
                onChange={setHeartRate}
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-6 text-lg font-medium text-lime-600 dark:text-lime-400">
            Notifications & Sharing
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Workout Reminders
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Daily exercise notifications
                </p>
              </div>
              <Switch
                value={workoutReminders}
                onChange={setWorkoutReminders}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Social Sharing
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Share achievements with friends
                </p>
              </div>
              <Switch
                value={socialSharing}
                onChange={setSocialSharing}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Status Summary */}
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <h4 className="mb-4 text-sm font-medium text-lime-600 dark:text-lime-400">
          Tracking Status
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
            <h5 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Active Monitors
            </h5>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              {activityTracking && <li>• Activity tracking enabled</li>}
              {heartRate && <li>• Heart rate monitoring active</li>}
              {workoutReminders && <li>• Daily reminders scheduled</li>}
            </ul>
          </div>

          <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
            <h5 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Tracking Level
            </h5>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {[activityTracking, heartRate].filter(Boolean).length === 2
                  ? "Comprehensive monitoring"
                  : "Basic tracking"}
              </p>
              {socialSharing && (
                <p className="text-sm text-lime-600 dark:text-lime-400">
                  Social features enabled
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Battery Impact Warning */}
        {(activityTracking && heartRate) && (
          <div className="mt-4 rounded-md bg-yellow-50 p-3 dark:bg-yellow-900/20">
            <p className="text-sm text-yellow-700 dark:text-yellow-400">
              Note: Continuous monitoring may impact device battery life
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SwitchExample29; 