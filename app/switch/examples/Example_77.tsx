"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_77";

const SwitchExample77 = () => {
  const [markdownSupport, setMarkdownSupport] = useState(true);
  const [autoSync, setAutoSync] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [spellCheck, setSpellCheck] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-lime-400 to-green-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Note Taking Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your note-taking experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Markdown Support */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Markdown Support
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {markdownSupport
                    ? "Rich text formatting"
                    : "Plain text only"}
                </p>
              </div>
              <Switch
                checked={markdownSupport}
                onChange={setMarkdownSupport}
              />
            </div>
            {markdownSupport && (
              <div className="mt-4 text-sm text-lime-600 dark:text-lime-400">
                • Use markdown for text formatting
              </div>
            )}
          </div>

          {/* Auto Sync */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Sync
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {autoSync
                    ? "Automatic cloud sync"
                    : "Manual sync only"}
                </p>
              </div>
              <Switch
                checked={autoSync}
                onChange={setAutoSync}
              />
            </div>
            {autoSync && (
              <div className="mt-4 text-sm text-lime-600 dark:text-lime-400">
                • Notes sync automatically to cloud
              </div>
            )}
          </div>

          {/* Dark Mode */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Dark Mode
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {darkMode
                    ? "Dark theme enabled"
                    : "Light theme"}
                </p>
              </div>
              <Switch
                checked={darkMode}
                onChange={setDarkMode}
              />
            </div>
            {darkMode && (
              <div className="mt-4 text-sm text-lime-600 dark:text-lime-400">
                • Reduced eye strain in low light
              </div>
            )}
          </div>

          {/* Spell Check */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Spell Check
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {spellCheck
                    ? "Real-time spell checking"
                    : "No spell check"}
                </p>
              </div>
              <Switch
                checked={spellCheck}
                onChange={setSpellCheck}
              />
            </div>
            {spellCheck && (
              <div className="mt-4 text-sm text-lime-600 dark:text-lime-400">
                • Get spelling suggestions as you type
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Note Taking Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {markdownSupport ? "Markdown enabled" : "Plain text only"}</p>
              <p>• {autoSync ? "Auto sync on" : "Manual sync"}</p>
              <p>• {darkMode ? "Dark mode on" : "Light mode"}</p>
              <p>• {spellCheck ? "Spell check on" : "No spell check"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample77; 