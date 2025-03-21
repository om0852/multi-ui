"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_129";

const SwitchExample129 = () => {
  const [notifications, setNotifications] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);
  const [activityStatus, setActivityStatus] = useState(true);
  const [tagApproval, setTagApproval] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Social Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your social media experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Notifications */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Notifications
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {notifications
                    ? "Receive social notifications"
                    : "Notifications disabled"}
                </p>
              </div>
              <Switch
                checked={notifications}
                onChange={setNotifications}
              />
            </div>
            {notifications && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Get notified about likes, comments, and mentions
              </div>
            )}
          </div>

          {/* Private Account */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Private Account
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {privateAccount
                    ? "Only approved followers"
                    : "Public account"}
                </p>
              </div>
              <Switch
                checked={privateAccount}
                onChange={setPrivateAccount}
              />
            </div>
            {privateAccount && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Approve followers before they can see your content
              </div>
            )}
          </div>

          {/* Activity Status */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Activity Status
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {activityStatus
                    ? "Show online status"
                    : "Hide online status"}
                </p>
              </div>
              <Switch
                checked={activityStatus}
                onChange={setActivityStatus}
              />
            </div>
            {activityStatus && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Friends can see when you&apos;re online
              </div>
            )}
          </div>

          {/* Tag Approval */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Tag Approval
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tagApproval
                    ? "Review tags before posting"
                    : "Auto-approve tags"}
                </p>
              </div>
              <Switch
                checked={tagApproval}
                onChange={setTagApproval}
              />
            </div>
            {tagApproval && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Review tags before they appear on your profile
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Social Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {notifications ? "Notifications enabled" : "Notifications off"}</p>
              <p>• {privateAccount ? "Account is private" : "Account is public"}</p>
              <p>• {activityStatus ? "Activity status visible" : "Status hidden"}</p>
              <p>• {tagApproval ? "Manual tag approval" : "Auto-approve tags"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample129; 