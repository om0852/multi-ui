"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_71";

const SwitchExample71 = () => {
  const [autoEnhance, setAutoEnhance] = useState(true);
  const [rawEditing, setRawEditing] = useState(false);
  const [watermark, setWatermark] = useState(false);
  const [cloudBackup, setCloudBackup] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Photo Editor Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your photo editing experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Enhance */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Enhance
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {autoEnhance
                    ? "Automatic photo optimization"
                    : "Manual editing only"}
                </p>
              </div>
              <Switch
                checked={autoEnhance}
                onChange={setAutoEnhance}
              />
            </div>
            {autoEnhance && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Smart adjustments for exposure, contrast, and color
              </div>
            )}
          </div>

          {/* RAW Editing */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  RAW Editing
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {rawEditing
                    ? "Advanced RAW file support"
                    : "Standard editing only"}
                </p>
              </div>
              <Switch
                checked={rawEditing}
                onChange={setRawEditing}
              />
            </div>
            {rawEditing && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Full RAW file editing capabilities
              </div>
            )}
          </div>

          {/* Watermark */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Watermark
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {watermark
                    ? "Add watermark to exports"
                    : "No watermark"}
                </p>
              </div>
              <Switch
                checked={watermark}
                onChange={setWatermark}
              />
            </div>
            {watermark && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Custom watermark on all exported photos
              </div>
            )}
          </div>

          {/* Cloud Backup */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Cloud Backup
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cloudBackup
                    ? "Automatic cloud storage"
                    : "Local storage only"}
                </p>
              </div>
              <Switch
                checked={cloudBackup}
                onChange={setCloudBackup}
              />
            </div>
            {cloudBackup && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Your edits are backed up to the cloud
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Editor Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoEnhance ? "Auto enhance enabled" : "Manual editing mode"}</p>
              <p>• {rawEditing ? "RAW editing available" : "Standard editing only"}</p>
              <p>• {watermark ? "Watermark enabled" : "No watermark"}</p>
              <p>• {cloudBackup ? "Cloud backup active" : "Local storage only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample71; 