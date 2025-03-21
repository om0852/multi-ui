"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_79";

const SwitchExample79 = () => {
  const [heartRateTracking, setHeartRateTracking] = useState(true);
  const [sleepTracking, setSleepTracking] = useState(true);
  const [gpsTracking, setGpsTracking] = useState(false);
  const [socialSharing, setSocialSharing] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-orange-400 to-red-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Fitness Tracking Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your fitness tracking experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Heart Rate Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Heart Rate Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {heartRateTracking
                    ? "Continuous heart rate monitoring"
                    : "Manual heart rate logging"}
                </p>
              </div>
              <Switch
                checked={heartRateTracking}
                onChange={setHeartRateTracking}
              />
            </div>
            {heartRateTracking && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Real-time heart rate data
              </div>
            )}
          </div>

          {/* Sleep Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Sleep Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {sleepTracking
                    ? "Automatic sleep detection"
                    : "Manual sleep logging"}
                </p>
              </div>
              <Switch
                checked={sleepTracking}
                onChange={setSleepTracking}
              />
            </div>
            {sleepTracking && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Sleep quality analysis
              </div>
            )}
          </div>

          {/* GPS Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  GPS Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {gpsTracking
                    ? "Route tracking enabled"
                    : "Basic activity tracking"}
                </p>
              </div>
              <Switch
                checked={gpsTracking}
                onChange={setGpsTracking}
              />
            </div>
            {gpsTracking && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Detailed route maps
              </div>
            )}
          </div>

          {/* Social Sharing */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Social Sharing
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {socialSharing
                    ? "Share achievements"
                    : "Private tracking"}
                </p>
              </div>
              <Switch
                checked={socialSharing}
                onChange={setSocialSharing}
              />
            </div>
            {socialSharing && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Connect with friends
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Tracking Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {heartRateTracking ? "Heart rate tracking on" : "Manual heart rate logging"}</p>
              <p>• {sleepTracking ? "Sleep tracking on" : "Manual sleep logging"}</p>
              <p>• {gpsTracking ? "GPS tracking on" : "Basic activity tracking"}</p>
              <p>• {socialSharing ? "Social sharing on" : "Private tracking"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample79; 