"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_23";

const SwitchExample23 = () => {
  const [lights, setLights] = useState(true);
  const [thermostat, setThermostat] = useState(true);
  const [security, setSecurity] = useState(true);
  const [autoMode, setAutoMode] = useState(false);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
        <h2 className="mb-4 text-lg font-semibold text-amber-700 dark:text-amber-400">
          Smart Home Controls
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Control your home automation systems with these intuitive switches.
        </p>
      </div>

      {/* Main Controls */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Light Controls */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-medium text-amber-600 dark:text-amber-400">
            Lighting System
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Main Lights
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Living room and kitchen
                </p>
              </div>
              <Switch
                value={lights}
                onChange={setLights}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Auto Mode
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Motion-activated lighting
                </p>
              </div>
              <Switch
                value={autoMode}
                onChange={setAutoMode}
              />
            </div>
          </div>
        </div>

        {/* Climate Controls */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-medium text-amber-600 dark:text-amber-400">
            Climate Control
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Smart Thermostat
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Temperature control
                </p>
              </div>
              <Switch
                value={thermostat}
                onChange={setThermostat}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Security System
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Doors and windows
                </p>
              </div>
              <Switch
                value={security}
                onChange={setSecurity}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Status Panel */}
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <h4 className="mb-4 text-sm font-medium text-amber-600 dark:text-amber-400">
          System Status
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Lighting: 
              <span className="ml-1 font-semibold">
                {lights ? "On" : "Off"}
                {autoMode && " (Auto Mode)"}
              </span>
            </p>
          </div>
          <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Temperature: 
              <span className="ml-1 font-semibold">
                {thermostat ? "Controlled" : "Manual"}
              </span>
            </p>
          </div>
          <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Security: 
              <span className="ml-1 font-semibold text-green-600 dark:text-green-400">
                {security ? "Armed" : "Disarmed"}
              </span>
            </p>
          </div>
          <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Overall: 
              <span className="ml-1 font-semibold">
                {[lights, thermostat, security].filter(Boolean).length >= 2
                  ? "Optimal"
                  : "Check Settings"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample23; 