"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_120";

const SwitchExample120 = () => {
  const [eventReminders, setEventReminders] = useState(true);
  const [calendarSync, setCalendarSync] = useState(true);
  const [weekView, setWeekView] = useState(false);
  const [eventSharing, setEventSharing] = useState(true);

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
                    ? "Get event notifications"
                    : "Manual event checking"}
                </p>
              </div>
              <Switch
                checked={eventReminders}
                onChange={setEventReminders}
              />
            </div>
            {eventReminders && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Receive notifications 15 minutes before events
              </div>
            )}
          </div>

          {/* Calendar Sync */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Calendar Sync
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {calendarSync
                    ? "Sync with other calendars"
                    : "Local calendar only"}
                </p>
              </div>
              <Switch
                checked={calendarSync}
                onChange={setCalendarSync}
              />
            </div>
            {calendarSync && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Sync with Google Calendar and Outlook
              </div>
            )}
          </div>

          {/* Week View */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Week View
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {weekView
                    ? "Detailed weekly schedule"
                    : "Basic calendar view"}
                </p>
              </div>
              <Switch
                checked={weekView}
                onChange={setWeekView}
              />
            </div>
            {weekView && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • View a detailed weekly schedule
              </div>
            )}
          </div>

          {/* Event Sharing */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Event Sharing
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {eventSharing
                    ? "Share events with others"
                    : "Private events only"}
                </p>
              </div>
              <Switch
                checked={eventSharing}
                onChange={setEventSharing}
              />
            </div>
            {eventSharing && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Share events with team members
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Calendar Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {eventReminders ? "Event reminders on" : "Manual checking"}</p>
              <p>• {calendarSync ? "Calendar sync on" : "Local calendar"}</p>
              <p>• {weekView ? "Week view on" : "Basic view"}</p>
              <p>• {eventSharing ? "Event sharing on" : "Private events"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample120; 