"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_44";

const SwitchExample44 = () => {
  const [readReceipts, setReadReceipts] = useState(true);
  const [typing, setTyping] = useState(true);
  const [encryption, setEncryption] = useState(true);
  const [archiveChats, setArchiveChats] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Message Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Configure your messaging preferences and privacy
          </p>
        </div>

        <div className="space-y-6">
          {/* Read Receipts */}
          <div className="rounded-lg border-2 border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Read Receipts
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {readReceipts
                    ? "Show when messages are read"
                    : "Hide read status"}
                </p>
              </div>
              <Switch
                value={readReceipts}
                onChange={setReadReceipts}
              />
            </div>
            {readReceipts && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Others can see when you read messages
              </div>
            )}
          </div>

          {/* Typing Indicator */}
          <div className="rounded-lg border-2 border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Typing Indicator
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {typing
                    ? "Show when you're typing"
                    : "Hide typing status"}
                </p>
              </div>
              <Switch
                value={typing}
                onChange={setTyping}
              />
            </div>
            {typing && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Others see when you&apos;re composing
              </div>
            )}
          </div>

          {/* End-to-End Encryption */}
          <div className="rounded-lg border-2 border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  End-to-End Encryption
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {encryption
                    ? "Secure message encryption"
                    : "Standard encryption"}
                </p>
              </div>
              <Switch
                value={encryption}
                onChange={setEncryption}
              />
            </div>
            {encryption && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Messages are fully encrypted
              </div>
            )}
          </div>

          {/* Auto Archive */}
          <div className="rounded-lg border-2 border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Archive
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {archiveChats
                    ? "Archive inactive chats"
                    : "Keep all chats active"}
                </p>
              </div>
              <Switch
                value={archiveChats}
                onChange={setArchiveChats}
              />
            </div>
            {archiveChats && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Archive after 30 days inactive
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <h4 className="mb-3 text-sm font-medium text-teal-900 dark:text-teal-100">
              Privacy Summary
            </h4>
            <div className="space-y-2 text-sm text-teal-700 dark:text-teal-300">
              <p>• {readReceipts ? "Read receipts on" : "Read receipts off"}</p>
              <p>• {typing ? "Typing indicator on" : "Typing indicator off"}</p>
              <p>• {encryption ? "End-to-end encryption" : "Standard encryption"}</p>
              <p>• {archiveChats ? "Auto archiving on" : "Manual archiving"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample44; 