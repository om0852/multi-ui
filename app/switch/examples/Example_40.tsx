"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_40";

const SwitchExample40 = () => {
  const [gridLines, setGridLines] = useState(true);
  const [rawCapture, setRawCapture] = useState(false);
  const [geotagging, setGeotagging] = useState(true);
  const [nightMode, setNightMode] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Camera Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Configure your camera preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* Grid Lines */}
          <div className="rounded-lg border-2 border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Grid Lines
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {gridLines
                    ? "Rule of thirds grid visible"
                    : "Clean viewfinder"}
                </p>
              </div>
              <Switch
                value={gridLines}
                onChange={setGridLines}
              />
            </div>
            {gridLines && (
              <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                • Helps with composition
              </div>
            )}
          </div>

          {/* RAW Capture */}
          <div className="rounded-lg border-2 border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  RAW Format
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {rawCapture
                    ? "Capturing in RAW format"
                    : "JPEG format only"}
                </p>
              </div>
              <Switch
                value={rawCapture}
                onChange={setRawCapture}
              />
            </div>
            {rawCapture && (
              <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                • Maximum editing flexibility
              </div>
            )}
          </div>

          {/* Geotagging */}
          <div className="rounded-lg border-2 border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Location Tags
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {geotagging
                    ? "Save photo locations"
                    : "No location data"}
                </p>
              </div>
              <Switch
                value={geotagging}
                onChange={setGeotagging}
              />
            </div>
            {geotagging && (
              <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                • GPS coordinates saved with photos
              </div>
            )}
          </div>

          {/* Night Mode */}
          <div className="rounded-lg border-2 border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Night Mode
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {nightMode
                    ? "Enhanced low-light capture"
                    : "Standard light capture"}
                </p>
              </div>
              <Switch
                value={nightMode}
                onChange={setNightMode}
              />
            </div>
            {nightMode && (
              <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                • Longer exposure in low light
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800">
            <h4 className="mb-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Camera Configuration
            </h4>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <p>• {gridLines ? "Grid overlay active" : "Grid hidden"}</p>
              <p>• {rawCapture ? "RAW capture on" : "JPEG format"}</p>
              <p>• {geotagging ? "Location tagging on" : "No location data"}</p>
              <p>• {nightMode ? "Night mode active" : "Standard mode"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample40; 