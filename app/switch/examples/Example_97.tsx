"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_97";

const SwitchExample97 = () => {
  const [autoSave, setAutoSave] = useState(true);
  const [versionControl, setVersionControl] = useState(true);
  const [collaboration, setCollaboration] = useState(false);
  const [documentAnalytics, setDocumentAnalytics] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Document Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your document preferences
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
                    ? "Automatic document saving"
                    : "Manual saving only"}
                </p>
              </div>
              <Switch
                checked={autoSave}
                onChange={setAutoSave}
              />
            </div>
            {autoSave && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • Documents saved every 5 minutes
              </div>
            )}
          </div>

          {/* Version Control */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Version Control
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {versionControl
                    ? "Track document versions"
                    : "No version history"}
                </p>
              </div>
              <Switch
                checked={versionControl}
                onChange={setVersionControl}
              />
            </div>
            {versionControl && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • Access document history
              </div>
            )}
          </div>

          {/* Collaboration */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Collaboration
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {collaboration
                    ? "Enable team editing"
                    : "Solo document mode"}
                </p>
              </div>
              <Switch
                checked={collaboration}
                onChange={setCollaboration}
              />
            </div>
            {collaboration && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • Real-time collaborative editing
              </div>
            )}
          </div>

          {/* Document Analytics */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Document Analytics
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {documentAnalytics
                    ? "Track document usage"
                    : "Basic document view"}
                </p>
              </div>
              <Switch
                checked={documentAnalytics}
                onChange={setDocumentAnalytics}
              />
            </div>
            {documentAnalytics && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • View document statistics
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Document Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoSave ? "Auto save on" : "Manual saving"}</p>
              <p>• {versionControl ? "Version control on" : "No version history"}</p>
              <p>• {collaboration ? "Collaboration enabled" : "Solo mode"}</p>
              <p>• {documentAnalytics ? "Analytics on" : "Basic view"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample97; 