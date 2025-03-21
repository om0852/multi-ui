"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_96";

const SwitchExample96 = () => {
  const [taskReminders, setTaskReminders] = useState(true);
  const [prioritySorting, setPrioritySorting] = useState(true);
  const [subtaskTracking, setSubtaskTracking] = useState(false);
  const [progressAnalytics, setProgressAnalytics] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Task Management Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your task management experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Task Reminders */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Task Reminders
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {taskReminders
                    ? "Get task notifications"
                    : "No task reminders"}
                </p>
              </div>
              <Switch
                checked={taskReminders}
                onChange={setTaskReminders}
              />
            </div>
            {taskReminders && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Receive notifications 1 hour before deadline
              </div>
            )}
          </div>

          {/* Priority Sorting */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Priority Sorting
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {prioritySorting
                    ? "Auto-sort by priority"
                    : "Manual task sorting"}
                </p>
              </div>
              <Switch
                checked={prioritySorting}
                onChange={setPrioritySorting}
              />
            </div>
            {prioritySorting && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Tasks automatically sorted by importance
              </div>
            )}
          </div>

          {/* Subtask Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Subtask Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {subtaskTracking
                    ? "Track subtask progress"
                    : "Basic task view"}
                </p>
              </div>
              <Switch
                checked={subtaskTracking}
                onChange={setSubtaskTracking}
              />
            </div>
            {subtaskTracking && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Monitor individual subtask completion
              </div>
            )}
          </div>

          {/* Progress Analytics */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Progress Analytics
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {progressAnalytics
                    ? "Track task completion"
                    : "Basic progress view"}
                </p>
              </div>
              <Switch
                checked={progressAnalytics}
                onChange={setProgressAnalytics}
              />
            </div>
            {progressAnalytics && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • View detailed completion statistics
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Task Management Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {taskReminders ? "Task reminders on" : "No reminders"}</p>
              <p>• {prioritySorting ? "Priority sorting on" : "Manual sorting"}</p>
              <p>• {subtaskTracking ? "Subtask tracking on" : "Basic view"}</p>
              <p>• {progressAnalytics ? "Progress analytics on" : "Basic progress"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample96; 