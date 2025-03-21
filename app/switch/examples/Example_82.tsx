"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_82";

const SwitchExample82 = () => {
  const [guidedMeditation, setGuidedMeditation] = useState(true);
  const [ambientSounds, setAmbientSounds] = useState(true);
  const [dailyReminders, setDailyReminders] = useState(false);
  const [progressTracking, setProgressTracking] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Meditation Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your meditation experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Guided Meditation */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Guided Meditation
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {guidedMeditation
                    ? "Follow guided sessions"
                    : "Silent meditation"}
                </p>
              </div>
              <Switch
                checked={guidedMeditation}
                onChange={setGuidedMeditation}
              />
            </div>
            {guidedMeditation && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Listen to meditation guides
              </div>
            )}
          </div>

          {/* Ambient Sounds */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Ambient Sounds
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {ambientSounds
                    ? "Play calming sounds"
                    : "No background sounds"}
                </p>
              </div>
              <Switch
                checked={ambientSounds}
                onChange={setAmbientSounds}
              />
            </div>
            {ambientSounds && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Enhance focus with sounds
              </div>
            )}
          </div>

          {/* Daily Reminders */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Daily Reminders
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {dailyReminders
                    ? "Get daily meditation reminders"
                    : "No reminders"}
                </p>
              </div>
              <Switch
                checked={dailyReminders}
                onChange={setDailyReminders}
              />
            </div>
            {dailyReminders && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Remind me to meditate daily
              </div>
            )}
          </div>

          {/* Progress Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Progress Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {progressTracking
                    ? "Track meditation progress"
                    : "Basic meditation mode"}
                </p>
              </div>
              <Switch
                checked={progressTracking}
                onChange={setProgressTracking}
              />
            </div>
            {progressTracking && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • View meditation statistics
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Meditation Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {guidedMeditation ? "Guided meditation on" : "Silent meditation"}</p>
              <p>• {ambientSounds ? "Ambient sounds on" : "No background sounds"}</p>
              <p>• {dailyReminders ? "Daily reminders on" : "No reminders"}</p>
              <p>• {progressTracking ? "Progress tracking on" : "Basic meditation mode"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample82; 