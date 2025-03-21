"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_113";

const SwitchExample113 = () => {
  const [smartLighting, setSmartLighting] = useState(true);
  const [climateControl, setClimateControl] = useState(true);
  const [securitySystem, setSecuritySystem] = useState(false);
  const [energyMonitor, setEnergyMonitor] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Smart Home Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Control your home automation
          </p>
        </div>

        <div className="space-y-6">
          {/* Smart Lighting */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Smart Lighting
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {smartLighting
                    ? "Automated lighting control"
                    : "Manual light control"}
                </p>
              </div>
              <Switch
                checked={smartLighting}
                onChange={setSmartLighting}
              />
            </div>
            {smartLighting && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Lights adjust based on time and occupancy
              </div>
            )}
          </div>

          {/* Climate Control */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Climate Control
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
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
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Temperature adjusts based on schedule
              </div>
            )}
          </div>

          {/* Security System */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Security System
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {securitySystem
                    ? "Smart security monitoring"
                    : "Basic security"}
                </p>
              </div>
              <Switch
                checked={securitySystem}
                onChange={setSecuritySystem}
              />
            </div>
            {securitySystem && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Motion sensors and cameras active
              </div>
            )}
          </div>

          {/* Energy Monitor */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Energy Monitor
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {energyMonitor
                    ? "Track energy usage"
                    : "Basic power monitoring"}
                </p>
              </div>
              <Switch
                checked={energyMonitor}
                onChange={setEnergyMonitor}
              />
            </div>
            {energyMonitor && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Monitor and optimize energy consumption
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Smart Home Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {smartLighting ? "Smart lighting on" : "Manual control"}</p>
              <p>• {climateControl ? "Climate control on" : "Manual control"}</p>
              <p>• {securitySystem ? "Security system on" : "Basic security"}</p>
              <p>• {energyMonitor ? "Energy monitoring on" : "Basic monitoring"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample113; 