"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_72";

const SwitchExample72 = () => {
  const [autoSave, setAutoSave] = useState(true);
  const [previewQuality, setPreviewQuality] = useState(false);
  const [exportPresets, setExportPresets] = useState(true);
  const [keyboardShortcuts, setKeyboardShortcuts] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Video Editor Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your video editing experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Save */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Save
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {autoSave
                    ? "Automatic project saving"
                    : "Manual saving only"}
                </p>
              </div>
              <Switch
                checked={autoSave}
                onChange={setAutoSave}
              />
            </div>
            {autoSave && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • Projects saved every 5 minutes
              </div>
            )}
          </div>

          {/* Preview Quality */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Preview Quality
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {previewQuality
                    ? "High quality preview"
                    : "Fast preview mode"}
                </p>
              </div>
              <Switch
                checked={previewQuality}
                onChange={setPreviewQuality}
              />
            </div>
            {previewQuality && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • Full resolution preview for accurate editing
              </div>
            )}
          </div>

          {/* Export Presets */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Export Presets
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exportPresets
                    ? "Custom export settings"
                    : "Default settings"}
                </p>
              </div>
              <Switch
                checked={exportPresets}
                onChange={setExportPresets}
              />
            </div>
            {exportPresets && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • Save and reuse your export settings
              </div>
            )}
          </div>

          {/* Keyboard Shortcuts */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Keyboard Shortcuts
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {keyboardShortcuts
                    ? "Custom shortcuts enabled"
                    : "Default shortcuts"}
                </p>
              </div>
              <Switch
                checked={keyboardShortcuts}
                onChange={setKeyboardShortcuts}
              />
            </div>
            {keyboardShortcuts && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • Customize your editing workflow
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Editor Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoSave ? "Auto save enabled" : "Manual saving only"}</p>
              <p>• {previewQuality ? "High quality preview" : "Fast preview mode"}</p>
              <p>• {exportPresets ? "Custom presets enabled" : "Default settings"}</p>
              <p>• {keyboardShortcuts ? "Custom shortcuts on" : "Default shortcuts"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample72; 