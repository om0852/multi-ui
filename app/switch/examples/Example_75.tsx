"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_75";

const SwitchExample75 = () => {
  const [autoComplete, setAutoComplete] = useState(true);
  const [formatOnSave, setFormatOnSave] = useState(true);
  const [minimap, setMinimap] = useState(false);
  const [gitIntegration, setGitIntegration] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Code Editor Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your coding experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Complete */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Complete
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {autoComplete
                    ? "Smart code suggestions"
                    : "Basic completion only"}
                </p>
              </div>
              <Switch
                checked={autoComplete}
                onChange={setAutoComplete}
              />
            </div>
            {autoComplete && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Get intelligent code completion suggestions
              </div>
            )}
          </div>

          {/* Format on Save */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Format on Save
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {formatOnSave
                    ? "Auto-format on save"
                    : "Manual formatting"}
                </p>
              </div>
              <Switch
                checked={formatOnSave}
                onChange={setFormatOnSave}
              />
            </div>
            {formatOnSave && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Automatically format code when saving
              </div>
            )}
          </div>

          {/* Minimap */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Minimap
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {minimap
                    ? "Show code overview"
                    : "Hide minimap"}
                </p>
              </div>
              <Switch
                checked={minimap}
                onChange={setMinimap}
              />
            </div>
            {minimap && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • See a preview of your entire file
              </div>
            )}
          </div>

          {/* Git Integration */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Git Integration
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {gitIntegration
                    ? "Built-in Git support"
                    : "External Git only"}
                </p>
              </div>
              <Switch
                checked={gitIntegration}
                onChange={setGitIntegration}
              />
            </div>
            {gitIntegration && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Manage Git operations directly in the editor
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Editor Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoComplete ? "Auto complete on" : "Basic completion"}</p>
              <p>• {formatOnSave ? "Format on save enabled" : "Manual formatting"}</p>
              <p>• {minimap ? "Minimap visible" : "Minimap hidden"}</p>
              <p>• {gitIntegration ? "Git integration on" : "External Git"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample75; 