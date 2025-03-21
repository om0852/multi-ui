"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_100";

const SwitchExample100 = () => {
  const [autoSave, setAutoSave] = useState(true);
  const [previewQuality, setPreviewQuality] = useState(true);
  const [exportPresets, setExportPresets] = useState(false);
  const [projectBackup, setProjectBackup] = useState(true);

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
                • Projects saved every 10 minutes
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
                    : "Standard preview"}
                </p>
              </div>
              <Switch
                checked={previewQuality}
                onChange={setPreviewQuality}
              />
            </div>
            {previewQuality && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • Full resolution preview
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
                    ? "Save export settings"
                    : "Manual export settings"}
                </p>
              </div>
              <Switch
                checked={exportPresets}
                onChange={setExportPresets}
              />
            </div>
            {exportPresets && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • Quick export with saved settings
              </div>
            )}
          </div>

          {/* Project Backup */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Project Backup
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {projectBackup
                    ? "Cloud backup enabled"
                    : "Local storage only"}
                </p>
              </div>
              <Switch
                checked={projectBackup}
                onChange={setProjectBackup}
              />
            </div>
            {projectBackup && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • Automatic cloud synchronization
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Video Editor Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoSave ? "Auto save on" : "Manual saving"}</p>
              <p>• {previewQuality ? "High quality preview" : "Standard preview"}</p>
              <p>• {exportPresets ? "Export presets on" : "Manual export"}</p>
              <p>• {projectBackup ? "Cloud backup on" : "Local storage"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample100; 