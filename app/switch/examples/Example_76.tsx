"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_76";

const SwitchExample76 = () => {
  const [emailReminders, setEmailReminders] = useState(true);
  const [subtaskTracking, setSubtaskTracking] = useState(true);
  const [timeTracking, setTimeTracking] = useState(false);
  const [teamCollaboration, setTeamCollaboration] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Task Manager Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your task management experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Email Reminders */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Email Reminders
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {emailReminders
                    ? "Task deadline notifications"
                    : "No email reminders"}
                </p>
              </div>
              <Switch
                checked={emailReminders}
                onChange={setEmailReminders}
              />
            </div>
            {emailReminders && (
              <div className="mt-4 text-sm text-yellow-600 dark:text-yellow-400">
                • Get notified about upcoming deadlines
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
                    ? "Track task dependencies"
                    : "Simple task list"}
                </p>
              </div>
              <Switch
                checked={subtaskTracking}
                onChange={setSubtaskTracking}
              />
            </div>
            {subtaskTracking && (
              <div className="mt-4 text-sm text-yellow-600 dark:text-yellow-400">
                • Break down tasks into smaller steps
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
              <div className="mt-4 text-sm text-yellow-600 dark:text-yellow-400">
                • Monitor time spent on each task
              </div>
            )}
          </div>

          {/* Team Collaboration */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Team Collaboration
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {teamCollaboration
                    ? "Share tasks with team"
                    : "Personal tasks only"}
                </p>
              </div>
              <Switch
                checked={teamCollaboration}
                onChange={setTeamCollaboration}
              />
            </div>
            {teamCollaboration && (
              <div className="mt-4 text-sm text-yellow-600 dark:text-yellow-400">
                • Collaborate with team members
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Task Manager Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {emailReminders ? "Email reminders on" : "No reminders"}</p>
              <p>• {subtaskTracking ? "Subtask tracking on" : "Simple list"}</p>
              <p>• {timeTracking ? "Time tracking on" : "No tracking"}</p>
              <p>• {teamCollaboration ? "Team collaboration on" : "Personal only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample76; 