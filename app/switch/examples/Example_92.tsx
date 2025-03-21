"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_92";

const SwitchExample92 = () => {
  const [taskReminders, setTaskReminders] = useState(true);
  const [timeTracking, setTimeTracking] = useState(true);
  const [teamUpdates, setTeamUpdates] = useState(false);
  const [projectAnalytics, setProjectAnalytics] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Project Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your project management experience
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
                    ? "Get task deadline notifications"
                    : "No task reminders"}
                </p>
              </div>
              <Switch
                checked={taskReminders}
                onChange={setTaskReminders}
              />
            </div>
            {taskReminders && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Receive notifications 24h before deadline
              </div>
            )}
          </div>

          {/* Time Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Time Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {timeTracking
                    ? "Track time spent on tasks"
                    : "No time tracking"}
                </p>
              </div>
              <Switch
                checked={timeTracking}
                onChange={setTimeTracking}
              />
            </div>
            {timeTracking && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Monitor project time allocation
              </div>
            )}
          </div>

          {/* Team Updates */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Team Updates
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {teamUpdates
                    ? "Daily team progress updates"
                    : "Manual updates only"}
                </p>
              </div>
              <Switch
                checked={teamUpdates}
                onChange={setTeamUpdates}
              />
            </div>
            {teamUpdates && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Get daily team activity summary
              </div>
            )}
          </div>

          {/* Project Analytics */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Project Analytics
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {projectAnalytics
                    ? "Track project performance"
                    : "Basic project view"}
                </p>
              </div>
              <Switch
                checked={projectAnalytics}
                onChange={setProjectAnalytics}
              />
            </div>
            {projectAnalytics && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • View detailed project metrics
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Project Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {taskReminders ? "Task reminders on" : "No reminders"}</p>
              <p>• {timeTracking ? "Time tracking on" : "No time tracking"}</p>
              <p>• {teamUpdates ? "Team updates on" : "Manual updates"}</p>
              <p>• {projectAnalytics ? "Analytics enabled" : "Basic view only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample92; 