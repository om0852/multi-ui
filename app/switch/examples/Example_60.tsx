"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_60";

const SwitchExample60 = () => {
  const [gridLines, setGridLines] = useState(true);
  const [rawCapture, setRawCapture] = useState(false);
  const [geotagging, setGeotagging] = useState(true);
  const [nightMode, setNightMode] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Camera Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your camera experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Grid Lines */}
          <div className="rounded-lg border-2 border-gray-100 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Grid Lines
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {gridLines
                    ? "Composition guides enabled"
                    : "No composition guides"}
                </p>
              </div>
              <Switch
                checked={gridLines}
                onChange={setGridLines}
              />
            </div>
            {gridLines && (
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                • Rule of thirds grid overlay
              </div>
            )}
          </div>

          {/* RAW Capture */}
          <div className="rounded-lg border-2 border-gray-100 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  RAW Capture
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {rawCapture
                    ? "Save in RAW format"
                    : "JPEG format only"}
                </p>
              </div>
              <Switch
                checked={rawCapture}
                onChange={setRawCapture}
              />
            </div>
            {rawCapture && (
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                • Uncompressed image quality
              </div>
            )}
          </div>

          {/* Geotagging */}
          <div className="rounded-lg border-2 border-gray-100 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Geotagging
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {geotagging
                    ? "Location data enabled"
                    : "No location data"}
                </p>
              </div>
              <Switch
                checked={geotagging}
                onChange={setGeotagging}
              />
            </div>
            {geotagging && (
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                • Add location to photos
              </div>
            )}
          </div>

          {/* Night Mode */}
          <div className="rounded-lg border-2 border-gray-100 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Night Mode
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {nightMode
                    ? "Low-light optimization"
                    : "Standard capture"}
                </p>
              </div>
              <Switch
                checked={nightMode}
                onChange={setNightMode}
              />
            </div>
            {nightMode && (
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                • Enhanced low-light performance
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-gray-100">
              Camera Preferences
            </h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p>• {gridLines ? "Grid lines on" : "No grid lines"}</p>
              <p>• {rawCapture ? "RAW capture on" : "JPEG only"}</p>
              <p>• {geotagging ? "Geotagging on" : "No location data"}</p>
              <p>• {nightMode ? "Night mode on" : "Standard mode"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample60; 