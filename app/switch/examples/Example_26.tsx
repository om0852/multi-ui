"use client";

import React, { useState } from "react";
import Switch from "../tsx/Switch_26";

const SwitchExample26 = () => {
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [activityStatus, setActivityStatus] = useState(true);
  const [messageRequests, setMessageRequests] = useState(false);
  const [locationSharing, setLocationSharing] = useState(false);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Header Section */}
      <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/20">
        <h2 className="mb-4 text-lg font-semibold text-cyan-700 dark:text-cyan-400">
          Privacy Settings
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Control your social media privacy and visibility preferences.
        </p>
      </div>

      {/* Main Settings */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Settings */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-6 text-lg font-medium text-cyan-600 dark:text-cyan-400">
            Profile Privacy
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Public Profile
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Allow anyone to view your profile
                </p>
              </div>
              <Switch
                value={profileVisibility}
                onChange={setProfileVisibility}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Online Status
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Show when you&apos;re active
                </p>
              </div>
              <Switch
                value={activityStatus}
                onChange={setActivityStatus}
              />
            </div>
          </div>
        </div>

        {/* Communication Settings */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-6 text-lg font-medium text-cyan-600 dark:text-cyan-400">
            Communication
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Message Requests
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Allow messages from anyone
                </p>
              </div>
              <Switch
                value={messageRequests}
                onChange={setMessageRequests}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-200">
                  Location Sharing
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Share location in posts
                </p>
              </div>
              <Switch
                value={locationSharing}
                onChange={setLocationSharing}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Summary */}
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <h4 className="mb-4 text-sm font-medium text-cyan-600 dark:text-cyan-400">
          Privacy Overview
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Profile Security Level
            </span>
            <span className={`text-sm font-semibold ${
              (!profileVisibility && !locationSharing) 
                ? "text-green-600 dark:text-green-400"
                : "text-yellow-600 dark:text-yellow-400"
            }`}>
              {(!profileVisibility && !locationSharing) 
                ? "High" 
                : "Standard"}
            </span>
          </div>

          <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-800">
            <h5 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Active Privacy Features
            </h5>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              {!profileVisibility && <li>• Private profile</li>}
              {!activityStatus && <li>• Hidden online status</li>}
              {!messageRequests && <li>• Restricted messages</li>}
              {!locationSharing && <li>• Location hidden</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample26; 