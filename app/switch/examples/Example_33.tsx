"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_33";

const SwitchExample33 = () => {
  const [notifications, setNotifications] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);
  const [activityStatus, setActivityStatus] = useState(true);
  const [tagApproval, setTagApproval] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Social Media Privacy
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account privacy and security settings
          </p>
        </div>

        <div className="space-y-6">
          {/* Notification Settings */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Push Notifications
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {notifications
                    ? "Stay updated with latest activities"
                    : "Notifications are disabled"}
                </p>
              </div>
              <Switch
                value={notifications}
                onChange={setNotifications}
              />
            </div>
            {notifications && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • You&apos;ll receive updates for likes, comments, and mentions
              </div>
            )}
          </div>

          {/* Account Privacy */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Private Account
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {privateAccount
                    ? "Only approved followers can see your posts"
                    : "Your posts are visible to everyone"}
                </p>
              </div>
              <Switch
                value={privateAccount}
                onChange={setPrivateAccount}
              />
            </div>
            {privateAccount && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • New followers need your approval
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
                    ? "Show when you're active"
                    : "Hide your activity status"}
                </p>
              </div>
              <Switch
                value={activityStatus}
                onChange={setActivityStatus}
              />
            </div>
          </div>

          {/* Tag Settings */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Tag Approval
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tagApproval
                    ? "Review tags before they appear"
                    : "Allow automatic tagging"}
                </p>
              </div>
              <Switch
                value={tagApproval}
                onChange={setTagApproval}
              />
            </div>
            {tagApproval && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • You&apos;ll be notified when someone tags you
              </div>
            )}
          </div>

          {/* Privacy Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Privacy Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {notifications ? "Push notifications enabled" : "Notifications turned off"}</p>
              <p>• {privateAccount ? "Account is private" : "Account is public"}</p>
              <p>• {activityStatus ? "Activity status visible" : "Activity status hidden"}</p>
              <p>• {tagApproval ? "Manual tag approval" : "Automatic tagging"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample33; 