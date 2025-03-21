"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_78";

const SwitchExample78 = () => {
  const [eventReminders, setEventReminders] = useState(true);
  const [weekStart, setWeekStart] = useState(false);
  const [weatherIntegration, setWeatherIntegration] = useState(true);
  const [timeZoneSync, setTimeZoneSync] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Calendar Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your calendar experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Event Reminders */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Event Reminders
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {eventReminders
                    ? "Smart event notifications"
                    : "No reminders"}
                </p>
              </div>
              <Switch
                checked={eventReminders}
                onChange={setEventReminders}
              />
            </div>
            {eventReminders && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Get notified before events
              </div>
            )}
          </div>

          {/* Week Start */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Week Start
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {weekStart
                    ? "Start week on Monday"
                    : "Start week on Sunday"}
                </p>
              </div>
              <Switch
                checked={weekStart}
                onChange={setWeekStart}
              />
            </div>
            {weekStart && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Calendar starts on Monday
              </div>
            )}
          </div>

          {/* Weather Integration */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Weather Integration
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {weatherIntegration
                    ? "Show weather forecast"
                    : "No weather info"}
                </p>
              </div>
              <Switch
                checked={weatherIntegration}
                onChange={setWeatherIntegration}
              />
            </div>
            {weatherIntegration && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • See weather forecast for events
              </div>
            )}
          </div>

          {/* Time Zone Sync */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Time Zone Sync
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {timeZoneSync
                    ? "Auto time zone adjustment"
                    : "Manual time zones"}
                </p>
              </div>
              <Switch
                checked={timeZoneSync}
                onChange={setTimeZoneSync}
              />
            </div>
            {timeZoneSync && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Events adjust to your time zone
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Calendar Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {eventReminders ? "Event reminders on" : "No reminders"}</p>
              <p>• {weekStart ? "Week starts Monday" : "Week starts Sunday"}</p>
              <p>• {weatherIntegration ? "Weather integration on" : "No weather info"}</p>
              <p>• {timeZoneSync ? "Time zone sync on" : "Manual time zones"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample78; 