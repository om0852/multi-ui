"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_125";

const SwitchExample125 = () => {
  const [breakingNews, setBreakingNews] = useState(true);
  const [personalizedFeed, setPersonalizedFeed] = useState(true);
  const [offlineReading, setOfflineReading] = useState(false);
  const [contentFilter, setContentFilter] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-rose-400 to-red-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            News Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your news experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Breaking News */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Breaking News
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {breakingNews
                    ? "Receive breaking news alerts"
                    : "No breaking news alerts"}
                </p>
              </div>
              <Switch
                checked={breakingNews}
                onChange={setBreakingNews}
              />
            </div>
            {breakingNews && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Get instant notifications for important news
              </div>
            )}
          </div>

          {/* Personalized Feed */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Personalized Feed
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {personalizedFeed
                    ? "Customized news feed"
                    : "General news feed"}
                </p>
              </div>
              <Switch
                checked={personalizedFeed}
                onChange={setPersonalizedFeed}
              />
            </div>
            {personalizedFeed && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • News tailored to your interests
              </div>
            )}
          </div>

          {/* Offline Reading */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Offline Reading
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {offlineReading
                    ? "Save articles for offline"
                    : "Online reading only"}
                </p>
              </div>
              <Switch
                checked={offlineReading}
                onChange={setOfflineReading}
              />
            </div>
            {offlineReading && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Read articles without internet connection
              </div>
            )}
          </div>

          {/* Content Filter */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Content Filter
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {contentFilter
                    ? "Filter sensitive content"
                    : "Show all content"}
                </p>
              </div>
              <Switch
                checked={contentFilter}
                onChange={setContentFilter}
              />
            </div>
            {contentFilter && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Filter out sensitive or graphic content
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              News Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {breakingNews ? "Breaking news alerts on" : "Alerts disabled"}</p>
              <p>• {personalizedFeed ? "Personalized feed on" : "General feed"}</p>
              <p>• {offlineReading ? "Offline reading enabled" : "Online only"}</p>
              <p>• {contentFilter ? "Content filtering on" : "All content shown"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample125; 