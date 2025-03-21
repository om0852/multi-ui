"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_63";

const SwitchExample63 = () => {
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
            Manage your social preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* Notifications */}
          <div className="rounded-lg border-2 border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Notifications
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {notifications
                    ? "Push notifications on"
                    : "Notifications off"}
                </p>
              </div>
              <Switch
                checked={notifications}
                onChange={setNotifications}
              />
            </div>
            {notifications && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Get notified about interactions
              </div>
            )}
          </div>

          {/* Private Account */}
          <div className="rounded-lg border-2 border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Private Account
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {privateAccount
                    ? "Account is private"
                    : "Account is public"}
                </p>
              </div>
              <Switch
                checked={privateAccount}
                onChange={setPrivateAccount}
              />
            </div>
            {privateAccount && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Only followers can see your content
              </div>
            )}
          </div>

          {/* Activity Status */}
          <div className="rounded-lg border-2 border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Activity Status
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
          <div className="rounded-lg border-2 border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Tag Approval
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
                • Approve tags before they appear
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
            <h4 className="mb-3 text-sm font-medium text-indigo-900 dark:text-indigo-100">
              Privacy Preferences
            </h4>
            <div className="space-y-2 text-sm text-indigo-700 dark:text-indigo-300">
              <p>• {notifications ? "Notifications on" : "Notifications off"}</p>
              <p>• {privateAccount ? "Private account" : "Public account"}</p>
              <p>• {activityStatus ? "Activity visible" : "Activity hidden"}</p>
              <p>• {tagApproval ? "Tag approval on" : "Auto-approve tags"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample63; 