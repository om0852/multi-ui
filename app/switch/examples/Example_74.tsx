"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_74";

const SwitchExample74 = () => {
  const [realTimeShadows, setRealTimeShadows] = useState(true);
  const [autoBackup, setAutoBackup] = useState(true);
  const [highQualityPreview, setHighQualityPreview] = useState(false);
  const [snapToGrid, setSnapToGrid] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            3D Modeling Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your 3D modeling experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Real-time Shadows */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Real-time Shadows
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {realTimeShadows
                    ? "Dynamic shadow rendering"
                    : "Static shadows only"}
                </p>
              </div>
              <Switch
                checked={realTimeShadows}
                onChange={setRealTimeShadows}
              />
            </div>
            {realTimeShadows && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • See shadows update as you move objects
              </div>
            )}
          </div>

          {/* Auto Backup */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Backup
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {autoBackup
                    ? "Automatic project backup"
                    : "Manual saving only"}
                </p>
              </div>
              <Switch
                checked={autoBackup}
                onChange={setAutoBackup}
              />
            </div>
            {autoBackup && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • Projects backed up every 10 minutes
              </div>
            )}
          </div>

          {/* High Quality Preview */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  High Quality Preview
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {highQualityPreview
                    ? "Detailed viewport rendering"
                    : "Fast preview mode"}
                </p>
              </div>
              <Switch
                checked={highQualityPreview}
                onChange={setHighQualityPreview}
              />
            </div>
            {highQualityPreview && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • View models in high detail while working
              </div>
            )}
          </div>

          {/* Snap to Grid */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Snap to Grid
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {snapToGrid
                    ? "Precise object placement"
                    : "Free placement"}
                </p>
              </div>
              <Switch
                checked={snapToGrid}
                onChange={setSnapToGrid}
              />
            </div>
            {snapToGrid && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • Objects align to grid for precise positioning
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Modeling Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {realTimeShadows ? "Real-time shadows on" : "Static shadows"}</p>
              <p>• {autoBackup ? "Auto backup enabled" : "Manual saving only"}</p>
              <p>• {highQualityPreview ? "High quality preview" : "Fast preview"}</p>
              <p>• {snapToGrid ? "Snap to grid on" : "Free placement"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample74; 