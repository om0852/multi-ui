"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_45";

const SwitchExample45 = () => {
  const [autoEnhance, setAutoEnhance] = useState(true);
  const [historyTracking, setHistoryTracking] = useState(true);
  const [watermark, setWatermark] = useState(false);
  const [highResPreview, setHighResPreview] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 p-1">
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
          <div className="rounded-lg border-2 border-rose-100 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Enhance
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {autoEnhance
                    ? "Automatically enhance photos"
                    : "Manual adjustments only"}
                </p>
              </div>
              <Switch
                value={autoEnhance}
                onChange={setAutoEnhance}
              />
            </div>
            {autoEnhance && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • AI-powered image enhancement
              </div>
            )}
          </div>

          {/* Edit History */}
          <div className="rounded-lg border-2 border-rose-100 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Edit History
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {historyTracking
                    ? "Track editing history"
                    : "No history tracking"}
                </p>
              </div>
              <Switch
                value={historyTracking}
                onChange={setHistoryTracking}
              />
            </div>
            {historyTracking && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Unlimited undo/redo steps
              </div>
            )}
          </div>

          {/* Watermark */}
          <div className="rounded-lg border-2 border-rose-100 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Watermark
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {watermark
                    ? "Add watermark to exports"
                    : "Export without watermark"}
                </p>
              </div>
              <Switch
                value={watermark}
                onChange={setWatermark}
              />
            </div>
            {watermark && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Custom watermark position
              </div>
            )}
          </div>

          {/* High-Res Preview */}
          <div className="rounded-lg border-2 border-rose-100 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  High-Res Preview
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {highResPreview
                    ? "Full resolution preview"
                    : "Optimized preview"}
                </p>
              </div>
              <Switch
                value={highResPreview}
                onChange={setHighResPreview}
              />
            </div>
            {highResPreview && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • May affect performance
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <h4 className="mb-3 text-sm font-medium text-pink-900 dark:text-pink-100">
              Editor Configuration
            </h4>
            <div className="space-y-2 text-sm text-pink-700 dark:text-pink-300">
              <p>• {autoEnhance ? "Auto enhance on" : "Manual editing"}</p>
              <p>• {historyTracking ? "History tracking on" : "No history"}</p>
              <p>• {watermark ? "Watermark enabled" : "No watermark"}</p>
              <p>• {highResPreview ? "High-res preview" : "Standard preview"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample45; 