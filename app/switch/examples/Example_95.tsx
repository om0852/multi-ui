"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_95";

const SwitchExample95 = () => {
  const [smartLighting, setSmartLighting] = useState(true);
  const [climateControl, setClimateControl] = useState(true);
  const [securitySystem, setSecuritySystem] = useState(false);
  const [energySaving, setEnergySaving] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Smart Home Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Control your smart home devices
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
                    : "Manual lighting"}
                </p>
              </div>
              <Switch
                checked={smartLighting}
                onChange={setSmartLighting}
              />
            </div>
            {smartLighting && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Motion-activated lighting
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
                    : "Manual temperature"}
                </p>
              </div>
              <Switch
                checked={climateControl}
                onChange={setClimateControl}
              />
            </div>
            {climateControl && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Learning thermostat enabled
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
                    ? "Home security active"
                    : "Security system off"}
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

          {/* Energy Saving */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Energy Saving
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {energySaving
                    ? "Energy optimization on"
                    : "Standard energy usage"}
                </p>
              </div>
              <Switch
                checked={energySaving}
                onChange={setEnergySaving}
              />
            </div>
            {energySaving && (
              <div className="mt-4 text-sm text-green-600 dark:text-green-400">
                • Automatic power management
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Smart Home Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {smartLighting ? "Smart lighting on" : "Manual lighting"}</p>
              <p>• {climateControl ? "Climate control on" : "Manual temperature"}</p>
              <p>• {securitySystem ? "Security system on" : "Security off"}</p>
              <p>• {energySaving ? "Energy saving on" : "Standard usage"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample95; 