"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_105";

const SwitchExample105 = () => {
  const [guidedMeditation, setGuidedMeditation] = useState(true);
  const [backgroundSounds, setBackgroundSounds] = useState(true);
  const [meditationReminders, setMeditationReminders] = useState(false);
  const [progressTracking, setProgressTracking] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Meditation App Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your mindfulness journey
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
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Professional meditation guidance
              </div>
            )}
          </div>

          {/* Background Sounds */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Background Sounds
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {backgroundSounds
                    ? "Ambient soundscapes"
                    : "Silent mode"}
                </p>
              </div>
              <Switch
                checked={backgroundSounds}
                onChange={setBackgroundSounds}
              />
            </div>
            {backgroundSounds && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Nature sounds and calming music
              </div>
            )}
          </div>

          {/* Meditation Reminders */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Meditation Reminders
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {meditationReminders
                    ? "Daily practice reminders"
                    : "No reminders"}
                </p>
              </div>
              <Switch
                checked={meditationReminders}
                onChange={setMeditationReminders}
              />
            </div>
            {meditationReminders && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Gentle notifications to maintain practice
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
                    ? "Track meditation stats"
                    : "Basic tracking"}
                </p>
              </div>
              <Switch
                checked={progressTracking}
                onChange={setProgressTracking}
              />
            </div>
            {progressTracking && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Monitor your meditation journey
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Meditation Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {guidedMeditation ? "Guided sessions on" : "Silent mode"}</p>
              <p>• {backgroundSounds ? "Ambient sounds on" : "Silent mode"}</p>
              <p>• {meditationReminders ? "Daily reminders on" : "No reminders"}</p>
              <p>• {progressTracking ? "Progress tracking on" : "Basic tracking"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample105; 