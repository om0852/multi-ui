"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_67";

const SwitchExample67 = () => {
  const [guidedMeditation, setGuidedMeditation] = useState(true);
  const [ambientSounds, setAmbientSounds] = useState(true);
  const [dailyReminders, setDailyReminders] = useState(true);
  const [progressTracking, setProgressTracking] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 p-1">
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
          <div className="rounded-lg border-2 border-teal-100 bg-teal-50 p-4 dark:border-teal-900 dark:bg-teal-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Guided Meditation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {guidedMeditation
                    ? "Voice-guided sessions"
                    : "Silent meditation"}
                </p>
              </div>
              <Switch
                checked={guidedMeditation}
                onChange={setGuidedMeditation}
              />
            </div>
            {guidedMeditation && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Follow along with expert guidance
              </div>
            )}
          </div>

          {/* Ambient Sounds */}
          <div className="rounded-lg border-2 border-teal-100 bg-teal-50 p-4 dark:border-teal-900 dark:bg-teal-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Ambient Sounds
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {ambientSounds
                    ? "Background sounds enabled"
                    : "Silent mode"}
                </p>
              </div>
              <Switch
                checked={ambientSounds}
                onChange={setAmbientSounds}
              />
            </div>
            {ambientSounds && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Create a peaceful atmosphere
              </div>
            )}
          </div>

          {/* Daily Reminders */}
          <div className="rounded-lg border-2 border-teal-100 bg-teal-50 p-4 dark:border-teal-900 dark:bg-teal-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Daily Reminders
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {dailyReminders
                    ? "Regular practice reminders"
                    : "No reminders"}
                </p>
              </div>
              <Switch
                checked={dailyReminders}
                onChange={setDailyReminders}
              />
            </div>
            {dailyReminders && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Get reminded to practice daily
              </div>
            )}
          </div>

          {/* Progress Tracking */}
          <div className="rounded-lg border-2 border-teal-100 bg-teal-50 p-4 dark:border-teal-900 dark:bg-teal-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Progress Tracking
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {progressTracking
                    ? "Track your journey"
                    : "No tracking"}
                </p>
              </div>
              <Switch
                checked={progressTracking}
                onChange={setProgressTracking}
              />
            </div>
            {progressTracking && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Monitor your meditation streak
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20">
            <h4 className="mb-3 text-sm font-medium text-emerald-900 dark:text-emerald-100">
              Meditation Preferences
            </h4>
            <div className="space-y-2 text-sm text-emerald-700 dark:text-emerald-300">
              <p>• {guidedMeditation ? "Guided sessions on" : "Silent mode"}</p>
              <p>• {ambientSounds ? "Ambient sounds on" : "Silent mode"}</p>
              <p>• {dailyReminders ? "Daily reminders on" : "No reminders"}</p>
              <p>• {progressTracking ? "Progress tracking on" : "No tracking"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample67; 