"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_52";

const SwitchExample52 = () => {
  const [taskReminders, setTaskReminders] = useState(true);
  const [subtasks, setSubtasks] = useState(true);
  const [priorityColors, setPriorityColors] = useState(false);
  const [taskSharing, setTaskSharing] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Task Management
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your task organization
          </p>
        </div>

        <div className="space-y-6">
          {/* Task Reminders */}
          <div className="rounded-lg border-2 border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Task Reminders
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Reminders before due dates
              </div>
            )}
          </div>

          {/* Subtasks */}
          <div className="rounded-lg border-2 border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Subtasks
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {subtasks
                    ? "Enable subtask tracking"
                    : "Simple task list"}
                </p>
              </div>
              <Switch
                checked={subtasks}
                onChange={setSubtasks}
              />
            </div>
            {subtasks && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Break down complex tasks
              </div>
            )}
          </div>

          {/* Priority Colors */}
          <div className="rounded-lg border-2 border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Priority Colors
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {priorityColors
                    ? "Color-coded priorities"
                    : "Simple priority labels"}
                </p>
              </div>
              <Switch
                checked={priorityColors}
                onChange={setPriorityColors}
              />
            </div>
            {priorityColors && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Visual priority indicators
              </div>
            )}
          </div>

          {/* Task Sharing */}
          <div className="rounded-lg border-2 border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Task Sharing
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {taskSharing
                    ? "Share tasks with team"
                    : "Private tasks only"}
                </p>
              </div>
              <Switch
                checked={taskSharing}
                onChange={setTaskSharing}
              />
            </div>
            {taskSharing && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Collaborate with team members
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <h4 className="mb-3 text-sm font-medium text-teal-900 dark:text-teal-100">
              Task Preferences
            </h4>
            <div className="space-y-2 text-sm text-teal-700 dark:text-teal-300">
              <p>• {taskReminders ? "Reminders on" : "No reminders"}</p>
              <p>• {subtasks ? "Subtasks enabled" : "Simple tasks"}</p>
              <p>• {priorityColors ? "Color coding on" : "Simple labels"}</p>
              <p>• {taskSharing ? "Sharing enabled" : "Private tasks"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample52; 