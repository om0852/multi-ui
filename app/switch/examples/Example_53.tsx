"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_53";

const SwitchExample53 = () => {
  const [autoSave, setAutoSave] = useState(true);
  const [markdownSupport, setMarkdownSupport] = useState(true);
  const [cloudSync, setCloudSync] = useState(false);
  const [noteSharing, setNoteSharing] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Note Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your note-taking experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Save */}
          <div className="rounded-lg border-2 border-violet-100 bg-violet-50 p-4 dark:border-violet-900 dark:bg-violet-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Save
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {autoSave
                    ? "Save changes automatically"
                    : "Manual saving required"}
                </p>
              </div>
              <Switch
                checked={autoSave}
                onChange={setAutoSave}
              />
            </div>
            {autoSave && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • Changes saved every 30 seconds
              </div>
            )}
          </div>

          {/* Markdown Support */}
          <div className="rounded-lg border-2 border-violet-100 bg-violet-50 p-4 dark:border-violet-900 dark:bg-violet-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Markdown Support
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {markdownSupport
                    ? "Enable markdown formatting"
                    : "Plain text only"}
                </p>
              </div>
              <Switch
                checked={markdownSupport}
                onChange={setMarkdownSupport}
              />
            </div>
            {markdownSupport && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • Rich text formatting
              </div>
            )}
          </div>

          {/* Cloud Sync */}
          <div className="rounded-lg border-2 border-violet-100 bg-violet-50 p-4 dark:border-violet-900 dark:bg-violet-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Cloud Sync
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cloudSync
                    ? "Sync notes across devices"
                    : "Local storage only"}
                </p>
              </div>
              <Switch
                checked={cloudSync}
                onChange={setCloudSync}
              />
            </div>
            {cloudSync && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • Access notes anywhere
              </div>
            )}
          </div>

          {/* Note Sharing */}
          <div className="rounded-lg border-2 border-violet-100 bg-violet-50 p-4 dark:border-violet-900 dark:bg-violet-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Note Sharing
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {noteSharing
                    ? "Share notes with others"
                    : "Private notes only"}
                </p>
              </div>
              <Switch
                checked={noteSharing}
                onChange={setNoteSharing}
              />
            </div>
            {noteSharing && (
              <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                • Collaborate on notes
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="mb-3 text-sm font-medium text-purple-900 dark:text-purple-100">
              Note Preferences
            </h4>
            <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
              <p>• {autoSave ? "Auto-save on" : "Manual saving"}</p>
              <p>• {markdownSupport ? "Markdown enabled" : "Plain text"}</p>
              <p>• {cloudSync ? "Cloud sync on" : "Local storage"}</p>
              <p>• {noteSharing ? "Sharing enabled" : "Private notes"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample53; 