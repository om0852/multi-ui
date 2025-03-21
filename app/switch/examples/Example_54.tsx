"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_54";

const SwitchExample54 = () => {
  const [autoEnhance, setAutoEnhance] = useState(true);
  const [watermark, setWatermark] = useState(false);
  const [highQuality, setHighQuality] = useState(true);
  const [preserveOriginal, setPreserveOriginal] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-fuchsia-400 to-pink-500 p-1">
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
          <div className="rounded-lg border-2 border-fuchsia-100 bg-fuchsia-50 p-4 dark:border-fuchsia-900 dark:bg-fuchsia-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Enhance
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {autoEnhance
                    ? "Automatic photo enhancement"
                    : "Manual adjustments only"}
                </p>
              </div>
              <Switch
                checked={autoEnhance}
                onChange={setAutoEnhance}
              />
            </div>
            {autoEnhance && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Smart lighting and color adjustments
              </div>
            )}
          </div>

          {/* Watermark */}
          <div className="rounded-lg border-2 border-fuchsia-100 bg-fuchsia-50 p-4 dark:border-fuchsia-900 dark:bg-fuchsia-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Watermark
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {watermark
                    ? "Add watermark to photos"
                    : "No watermark"}
                </p>
              </div>
              <Switch
                checked={watermark}
                onChange={setWatermark}
              />
            </div>
            {watermark && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Customizable watermark text
              </div>
            )}
          </div>

          {/* High Quality */}
          <div className="rounded-lg border-2 border-fuchsia-100 bg-fuchsia-50 p-4 dark:border-fuchsia-900 dark:bg-fuchsia-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  High Quality
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {highQuality
                    ? "Maximum quality output"
                    : "Standard quality"}
                </p>
              </div>
              <Switch
                checked={highQuality}
                onChange={setHighQuality}
              />
            </div>
            {highQuality && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Export in highest resolution
              </div>
            )}
          </div>

          {/* Preserve Original */}
          <div className="rounded-lg border-2 border-fuchsia-100 bg-fuchsia-50 p-4 dark:border-fuchsia-900 dark:bg-fuchsia-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Preserve Original
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {preserveOriginal
                    ? "Keep original photos"
                    : "Overwrite original"}
                </p>
              </div>
              <Switch
                checked={preserveOriginal}
                onChange={setPreserveOriginal}
              />
            </div>
            {preserveOriginal && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Save edited photos as copies
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <h4 className="mb-3 text-sm font-medium text-pink-900 dark:text-pink-100">
              Editor Preferences
            </h4>
            <div className="space-y-2 text-sm text-pink-700 dark:text-pink-300">
              <p>• {autoEnhance ? "Auto enhance on" : "Manual editing"}</p>
              <p>• {watermark ? "Watermark enabled" : "No watermark"}</p>
              <p>• {highQuality ? "High quality output" : "Standard quality"}</p>
              <p>• {preserveOriginal ? "Original photos kept" : "Overwrite enabled"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample54; 