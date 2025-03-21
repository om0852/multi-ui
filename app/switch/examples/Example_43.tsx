"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_43";

const SwitchExample43 = () => {
  const [weekendView, setWeekendView] = useState(true);
  const [eventReminders, setEventReminders] = useState(true);
  const [multipleTimezones, setMultipleTimezones] = useState(false);
  const [workHours, setWorkHours] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Calendar Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your calendar view and notifications
          </p>
        </div>

        <div className="space-y-6">
          {/* Weekend View */}
          <div className="rounded-lg border-2 border-violet-100 bg-violet-50 p-4 dark:border-violet-900 dark:bg-violet-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Weekend View
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {weekendView
                    ? "Show weekends in calendar"
                    : "Hide weekend days"}
                </p>
              </div>
              <Switch
                value={weekendView}
                onChange={setWeekendView}
              />
            </div>
            {weekendView && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • Full 7-day week view
              </div>
            )}
          </div>

          {/* Event Reminders */}
          <div className="rounded-lg border-2 border-violet-100 bg-violet-50 p-4 dark:border-violet-900 dark:bg-violet-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Event Reminders
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {eventReminders
                    ? "Get notified before events"
                    : "No event notifications"}
                </p>
              </div>
              <Switch
                value={eventReminders}
                onChange={setEventReminders}
              />
            </div>
            {eventReminders && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • 15-minute advance notifications
              </div>
            )}
          </div>

          {/* Multiple Timezones */}
          <div className="rounded-lg border-2 border-violet-100 bg-violet-50 p-4 dark:border-violet-900 dark:bg-violet-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Multiple Timezones
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {multipleTimezones
                    ? "Show multiple time zones"
                    : "Local time only"}
                </p>
              </div>
              <Switch
                value={multipleTimezones}
                onChange={setMultipleTimezones}
              />
            </div>
            {multipleTimezones && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • Display events in different time zones
              </div>
            )}
          </div>

          {/* Work Hours */}
          <div className="rounded-lg border-2 border-violet-100 bg-violet-50 p-4 dark:border-violet-900 dark:bg-violet-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Work Hours
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {workHours
                    ? "Highlight working hours"
                    : "Show all hours equally"}
                </p>
              </div>
              <Switch
                value={workHours}
                onChange={setWorkHours}
              />
            </div>
            {workHours && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • 9 AM to 5 PM highlighted
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="mb-3 text-sm font-medium text-purple-900 dark:text-purple-100">
              Calendar Configuration
            </h4>
            <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
              <p>• {weekendView ? "Weekends visible" : "Weekends hidden"}</p>
              <p>• {eventReminders ? "Reminders enabled" : "No reminders"}</p>
              <p>• {multipleTimezones ? "Multiple time zones" : "Local time only"}</p>
              <p>• {workHours ? "Work hours highlighted" : "Standard hours"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample43; 