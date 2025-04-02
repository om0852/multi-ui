"use client";

import React, { useState } from "react";
import Switch from "../tsx/Switch_27";

const SwitchExample27 = () => {
  const [vsync, setVsync] = useState(true);
  const [rayTracing, setRayTracing] = useState(false);
  const [dlss, setDlss] = useState(true);
  const [hdr, setHdr] = useState(false);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Header Section */}
      <div className="rounded-lg bg-fuchsia-50 p-4 dark:bg-fuchsia-900/20">
        <h2 className="mb-4 text-lg font-semibold text-fuchsia-700 dark:text-fuchsia-400">
          Game Settings
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Optimize your gaming experience with these graphics and performance settings.
        </p>
      </div>

      {/* Main Settings */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Performance Settings */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-6 text-lg font-medium text-fuchsia-600 dark:text-fuchsia-400">
            Performance
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  V-Sync
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Synchronize frame rate with monitor
                </p>
              </div>
              <Switch
                value={vsync}
                onChange={setVsync}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  DLSS
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  AI-powered upscaling
                </p>
              </div>
              <Switch
                value={dlss}
                onChange={setDlss}
              />
            </div>
          </div>
        </div>

        {/* Graphics Settings */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-6 text-lg font-medium text-fuchsia-600 dark:text-fuchsia-400">
            Graphics
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Ray Tracing
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Real-time light simulation
                </p>
              </div>
              <Switch
                value={rayTracing}
                onChange={setRayTracing}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  HDR
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  High Dynamic Range
                </p>
              </div>
              <Switch
                value={hdr}
                onChange={setHdr}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Performance Impact */}
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <h4 className="mb-4 text-sm font-medium text-fuchsia-600 dark:text-fuchsia-400">
          Performance Impact
        </h4>
        <div className="space-y-4">
          <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Estimated Performance
              </span>
              <span className={`text-sm font-semibold ${
                (!rayTracing && dlss) 
                  ? "text-green-600 dark:text-green-400"
                  : rayTracing 
                    ? "text-yellow-600 dark:text-yellow-400"
                    : "text-blue-600 dark:text-blue-400"
              }`}>
                {(!rayTracing && dlss) 
                  ? "High Performance" 
                  : rayTracing 
                    ? "Quality Mode"
                    : "Balanced"}
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
              <h5 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Active Features
              </h5>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                {vsync && <li>• V-Sync enabled</li>}
                {rayTracing && <li>• Ray tracing active</li>}
                {dlss && <li>• DLSS optimization</li>}
                {hdr && <li>• HDR enabled</li>}
              </ul>
            </div>

            <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
              <h5 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Recommendations
              </h5>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                {rayTracing && !dlss && (
                  <li>• Enable DLSS for better performance</li>
                )}
                {!vsync && (
                  <li>• Enable V-Sync to prevent screen tearing</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample27; 