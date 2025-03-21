"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_130";

const SwitchExample130 = () => {
  const [readReceipts, setReadReceipts] = useState(true);
  const [typingIndicator, setTypingIndicator] = useState(true);
  const [messageBackup, setMessageBackup] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Messaging Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your messaging experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Read Receipts */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Read Receipts
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {readReceipts
                    ? "Show when messages are read"
                    : "Hide read status"}
                </p>
              </div>
              <Switch
                checked={readReceipts}
                onChange={setReadReceipts}
              />
            </div>
            {readReceipts && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Others can see when you read their messages
              </div>
            )}
          </div>

          {/* Typing Indicator */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Typing Indicator
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {typingIndicator
                    ? "Show when typing"
                    : "Hide typing status"}
                </p>
              </div>
              <Switch
                checked={typingIndicator}
                onChange={setTypingIndicator}
              />
            </div>
            {typingIndicator && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Others can see when you&apos;re typing
              </div>
            )}
          </div>

          {/* Message Backup */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Message Backup
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {messageBackup
                    ? "Backup messages to cloud"
                    : "Local storage only"}
                </p>
              </div>
              <Switch
                checked={messageBackup}
                onChange={setMessageBackup}
              />
            </div>
            {messageBackup && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Messages are backed up to the cloud
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
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Dark theme for better night viewing
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Messaging Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {readReceipts ? "Read receipts on" : "Read receipts off"}</p>
              <p>• {typingIndicator ? "Typing indicator on" : "Typing indicator off"}</p>
              <p>• {messageBackup ? "Cloud backup enabled" : "Local storage only"}</p>
              <p>• {darkMode ? "Dark mode on" : "Light mode"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample130; 