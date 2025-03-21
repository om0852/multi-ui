"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_57";

const SwitchExample57 = () => {
  const [autoLights, setAutoLights] = useState(true);
  const [climateControl, setClimateControl] = useState(true);
  const [applianceSchedule, setApplianceSchedule] = useState(false);
  const [voiceControl, setVoiceControl] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-indigo-400 to-blue-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Smart Home
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Control your home automation
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Lights */}
          <div className="rounded-lg border-2 border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Lights
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {autoLights
                    ? "Smart lighting active"
                    : "Manual control only"}
                </p>
              </div>
              <Switch
                checked={autoLights}
                onChange={setAutoLights}
              />
            </div>
            {autoLights && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Lights adjust based on time and occupancy
              </div>
            )}
          </div>

          {/* Climate Control */}
          <div className="rounded-lg border-2 border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Climate Control
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {climateControl
                    ? "Smart temperature control"
                    : "Manual temperature control"}
                </p>
              </div>
              <Switch
                checked={climateControl}
                onChange={setClimateControl}
              />
            </div>
            {climateControl && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Temperature adjusts based on schedule
              </div>
            )}
          </div>

          {/* Appliance Schedule */}
          <div className="rounded-lg border-2 border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Appliance Schedule
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {applianceSchedule
                    ? "Smart scheduling active"
                    : "Manual control only"}
                </p>
              </div>
              <Switch
                checked={applianceSchedule}
                onChange={setApplianceSchedule}
              />
            </div>
            {applianceSchedule && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Appliances run on energy-efficient schedule
              </div>
            )}
          </div>

          {/* Voice Control */}
          <div className="rounded-lg border-2 border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Voice Control
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {voiceControl
                    ? "Voice commands enabled"
                    : "Voice control disabled"}
                </p>
              </div>
              <Switch
                checked={voiceControl}
                onChange={setVoiceControl}
              />
            </div>
            {voiceControl && (
              <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
                • Control devices with voice commands
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="mb-3 text-sm font-medium text-blue-900 dark:text-blue-100">
              Automation Status
            </h4>
            <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <p>• {autoLights ? "Smart lighting on" : "Manual lighting"}</p>
              <p>• {climateControl ? "Smart climate on" : "Manual climate"}</p>
              <p>• {applianceSchedule ? "Smart scheduling on" : "Manual control"}</p>
              <p>• {voiceControl ? "Voice control on" : "Voice control off"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample57; 