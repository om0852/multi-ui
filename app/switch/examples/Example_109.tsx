"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_109";

const SwitchExample109 = () => {
  const [autoSave, setAutoSave] = useState(true);
  const [markdownSupport, setMarkdownSupport] = useState(true);
  const [cloudSync, setCloudSync] = useState(false);
  const [noteSharing, setNoteSharing] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Note-Taking Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your note-taking experience
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
                    ? "Automatic note saving"
                    : "Manual saving only"}
                </p>
              </div>
              <Switch
                checked={autoSave}
                onChange={setAutoSave}
              />
            </div>
            {autoSave && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Notes saved automatically every 30 seconds
              </div>
            )}
          </div>

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
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Use markdown for formatting
              </div>
            )}
          </div>

          {/* Cloud Sync */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Cloud Sync
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cloudSync
                    ? "Sync across devices"
                    : "Local storage only"}
                </p>
              </div>
              <Switch
                checked={cloudSync}
                onChange={setCloudSync}
              />
            </div>
            {cloudSync && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Access notes on all your devices
              </div>
            )}
          </div>

          {/* Note Sharing */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Note Sharing
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
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
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Collaborate with team members
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Note-Taking Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoSave ? "Auto save on" : "Manual saving"}</p>
              <p>• {markdownSupport ? "Markdown enabled" : "Plain text"}</p>
              <p>• {cloudSync ? "Cloud sync on" : "Local storage"}</p>
              <p>• {noteSharing ? "Note sharing on" : "Private notes"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample109; 