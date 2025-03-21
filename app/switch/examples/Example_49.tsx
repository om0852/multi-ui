"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_49";

const SwitchExample49 = () => {
  const [guidedMeditation, setGuidedMeditation] = useState(true);
  const [ambientSounds, setAmbientSounds] = useState(true);
  const [dailyReminders, setDailyReminders] = useState(false);
  const [progressTracking, setProgressTracking] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Meditation Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your mindfulness journey
          </p>
        </div>

        <div className="space-y-6">
          {/* Guided Meditation */}
          <div className="rounded-lg border-2 border-purple-100 bg-purple-50 p-4 dark:border-purple-900 dark:bg-purple-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Guided Sessions
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {guidedMeditation
                    ? "Voice-guided meditation"
                    : "Silent meditation"}
                </p>
              </div>
              <Switch
                value={guidedMeditation}
                onChange={setGuidedMeditation}
              />
            </div>
            {guidedMeditation && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Professional meditation guides
              </div>
            )}
          </div>

          {/* Ambient Sounds */}
          <div className="rounded-lg border-2 border-purple-100 bg-purple-50 p-4 dark:border-purple-900 dark:bg-purple-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Ambient Sounds
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {ambientSounds
                    ? "Background sounds enabled"
                    : "No background sounds"}
                </p>
              </div>
              <Switch
                value={ambientSounds}
                onChange={setAmbientSounds}
              />
            </div>
            {ambientSounds && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Nature sounds and white noise
              </div>
            )}
          </div>

          {/* Daily Reminders */}
          <div className="rounded-lg border-2 border-purple-100 bg-purple-50 p-4 dark:border-purple-900 dark:bg-purple-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Daily Reminders
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {dailyReminders
                    ? "Get daily meditation prompts"
                    : "No reminders"}
                </p>
              </div>
              <Switch
                value={dailyReminders}
                onChange={setDailyReminders}
              />
            </div>
            {dailyReminders && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • Customizable reminder times
              </div>
            )}
          </div>

          {/* Progress Tracking */}
          <div className="rounded-lg border-2 border-purple-100 bg-purple-50 p-4 dark:border-purple-900 dark:bg-purple-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Progress Tracking
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {progressTracking
                    ? "Track your meditation stats"
                    : "No progress tracking"}
                </p>
              </div>
              <Switch
                value={progressTracking}
                onChange={setProgressTracking}
              />
            </div>
            {progressTracking && (
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                • View your meditation history
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
            <h4 className="mb-3 text-sm font-medium text-indigo-900 dark:text-indigo-100">
              Meditation Preferences
            </h4>
            <div className="space-y-2 text-sm text-indigo-700 dark:text-indigo-300">
              <p>• {guidedMeditation ? "Guided sessions on" : "Silent mode"}</p>
              <p>• {ambientSounds ? "Ambient sounds on" : "No background sounds"}</p>
              <p>• {dailyReminders ? "Daily reminders on" : "No reminders"}</p>
              <p>• {progressTracking ? "Progress tracking on" : "No tracking"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample49; 