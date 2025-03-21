"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_89";

const SwitchExample89 = () => {
  const [autoSave, setAutoSave] = useState(true);
  const [midiSync, setMidiSync] = useState(true);
  const [pluginScan, setPluginScan] = useState(false);
  const [cloudBackup, setCloudBackup] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-orange-400 to-red-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Music Production Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your music production environment
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
                    : "Manual save only"}
                </p>
              </div>
              <Switch
                checked={autoSave}
                onChange={setAutoSave}
              />
            </div>
            {autoSave && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Save projects every 5 minutes
              </div>
            )}
          </div>

          {/* MIDI Sync */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  MIDI Sync
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {midiSync
                    ? "Enable MIDI synchronization"
                    : "Disable MIDI sync"}
                </p>
              </div>
              <Switch
                checked={midiSync}
                onChange={setMidiSync}
              />
            </div>
            {midiSync && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Sync with external MIDI devices
              </div>
            )}
          </div>

          {/* Plugin Scan */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Plugin Scan
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {pluginScan
                    ? "Scan for new plugins"
                    : "Manual plugin management"}
                </p>
              </div>
              <Switch
                checked={pluginScan}
                onChange={setPluginScan}
              />
            </div>
            {pluginScan && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Automatically detect new plugins
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
                    ? "Backup projects to cloud"
                    : "Local storage only"}
                </p>
              </div>
              <Switch
                checked={cloudBackup}
                onChange={setCloudBackup}
              />
            </div>
            {cloudBackup && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Secure cloud storage for projects
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Production Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoSave ? "Auto save on" : "Manual save only"}</p>
              <p>• {midiSync ? "MIDI sync enabled" : "MIDI sync disabled"}</p>
              <p>• {pluginScan ? "Plugin scanning on" : "Manual plugin management"}</p>
              <p>• {cloudBackup ? "Cloud backup on" : "Local storage only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample89; 