"use client";

import React, { useState } from "react";
import Switch from "../tsx/Switch_30";

const SwitchExample30 = () => {
  const [eventReminders, setEventReminders] = useState(true);
  const [autoSync, setAutoSync] = useState(true);
  const [weekendEvents, setWeekendEvents] = useState(false);
  const [workHours, setWorkHours] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Header Section */}
      <div className="rounded-lg bg-sky-50 p-4 dark:bg-sky-900/20">
        <h2 className="mb-4 text-lg font-semibold text-sky-700 dark:text-sky-400">
          Calendar Settings
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Manage your calendar preferences and scheduling options.
        </p>
      </div>

      {/* Main Settings */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Notification Settings */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-6 text-lg font-medium text-sky-600 dark:text-sky-400">
            Notifications
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Event Reminders
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get notified before events
                </p>
              </div>
              <Switch
                value={eventReminders}
                onChange={setEventReminders}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Auto Sync
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Keep calendars synchronized
                </p>
              </div>
              <Switch
                value={autoSync}
                onChange={setAutoSync}
              />
            </div>
          </div>
        </div>

        {/* Schedule Settings */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-6 text-lg font-medium text-sky-600 dark:text-sky-400">
            Schedule Options
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Weekend Events
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Show weekend activities
                </p>
              </div>
              <Switch
                value={weekendEvents}
                onChange={setWeekendEvents}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Work Hours
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Highlight business hours
                </p>
              </div>
              <Switch
                value={workHours}
                onChange={setWorkHours}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Overview */}
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <h4 className="mb-4 text-sm font-medium text-sky-600 dark:text-sky-400">
          Calendar Overview
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
            <h5 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Active Features
            </h5>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              {eventReminders && <li>• Event notifications enabled</li>}
              {autoSync && <li>• Calendar syncing active</li>}
              {workHours && <li>• Work hours highlighted</li>}
              {weekendEvents && <li>• Weekend events visible</li>}
            </ul>
          </div>

          <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
            <h5 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Schedule Display
            </h5>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Showing: {[
                  "Weekdays",
                  weekendEvents && "Weekends"
                ].filter(Boolean).join(" & ")}
              </p>
              {workHours && (
                <p className="text-sm text-sky-600 dark:text-sky-400">
                  Business hours: 9:00 AM - 5:00 PM
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Sync Status */}
        {autoSync && (
          <div className="mt-4 rounded-md bg-green-50 p-3 dark:bg-green-900/20">
            <p className="text-sm text-green-700 dark:text-green-400">
              All calendars are up to date
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SwitchExample30; 