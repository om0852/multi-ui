"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_31";

const SwitchExample31 = () => {
  const [lights, setLights] = useState(false);
  const [thermostat, setThermostat] = useState(true);
  const [security, setSecurity] = useState(true);
  const [cameras, setCameras] = useState(false);

  return (
    <div className="w-full space-y-6 rounded-xl bg-slate-50 p-6 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
          Smart Home Control
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Manage your home&apos;s smart features from one place
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Smart Lighting */}
        <div className="rounded-lg bg-white p-5 shadow-lg dark:bg-slate-800">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-medium text-slate-900 dark:text-slate-100">
                Smart Lighting
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {lights ? "Lights are on" : "Lights are off"}
              </p>
            </div>
            <Switch
              value={lights}
              onChange={setLights}
            />
          </div>
          {lights && (
            <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
              • 6 lights active
            </div>
          )}
        </div>

        {/* Climate Control */}
        <div className="rounded-lg bg-white p-5 shadow-lg dark:bg-slate-800">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-medium text-slate-900 dark:text-slate-100">
                Climate Control
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {thermostat ? "Auto temperature" : "Manual control"}
              </p>
            </div>
            <Switch
              value={thermostat}
              onChange={setThermostat}
            />
          </div>
          {thermostat && (
            <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
              • Maintaining 72°F
            </div>
          )}
        </div>

        {/* Security System */}
        <div className="rounded-lg bg-white p-5 shadow-lg dark:bg-slate-800">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-medium text-slate-900 dark:text-slate-100">
                Security System
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {security ? "System armed" : "System disarmed"}
              </p>
            </div>
            <Switch
              value={security}
              onChange={setSecurity}
            />
          </div>
          {security && (
            <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
              • All entry points secured
            </div>
          )}
        </div>

        {/* Security Cameras */}
        <div className="rounded-lg bg-white p-5 shadow-lg dark:bg-slate-800">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-medium text-slate-900 dark:text-slate-100">
                Security Cameras
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {cameras ? "Cameras recording" : "Cameras off"}
              </p>
            </div>
            <Switch
              value={cameras}
              onChange={setCameras}
            />
          </div>
          {cameras && (
            <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
              • 4 cameras active
            </div>
          )}
        </div>
      </div>

      {/* Status Overview */}
      <div className="mt-6 rounded-lg bg-slate-100 p-4 dark:bg-slate-800/50">
        <h4 className="mb-3 text-sm font-medium text-slate-900 dark:text-slate-100">
          System Status
        </h4>
        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <p>• {lights ? "Lighting system active" : "Lights turned off"}</p>
          <p>• {thermostat ? "Climate control automated" : "Manual temperature control"}</p>
          <p>• {security ? "Security system armed" : "Security system inactive"}</p>
          <p>• {cameras ? "Surveillance active" : "Cameras disabled"}</p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample31; 