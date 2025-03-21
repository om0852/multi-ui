"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_42";

const SwitchExample42 = () => {
  const [flightAlerts, setFlightAlerts] = useState(true);
  const [priceTracking, setPriceTracking] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);
  const [localCurrency, setLocalCurrency] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Travel Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your travel preferences and notifications
          </p>
        </div>

        <div className="space-y-6">
          {/* Flight Alerts */}
          <div className="rounded-lg border-2 border-cyan-100 bg-cyan-50 p-4 dark:border-cyan-900 dark:bg-cyan-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Flight Alerts
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {flightAlerts
                    ? "Get notified about flight changes"
                    : "No flight notifications"}
                </p>
              </div>
              <Switch
                value={flightAlerts}
                onChange={setFlightAlerts}
              />
            </div>
            {flightAlerts && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • Updates for delays and gate changes
              </div>
            )}
          </div>

          {/* Price Tracking */}
          <div className="rounded-lg border-2 border-cyan-100 bg-cyan-50 p-4 dark:border-cyan-900 dark:bg-cyan-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Price Tracking
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {priceTracking
                    ? "Monitor price changes"
                    : "No price monitoring"}
                </p>
              </div>
              <Switch
                value={priceTracking}
                onChange={setPriceTracking}
              />
            </div>
            {priceTracking && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • Get alerts for price drops
              </div>
            )}
          </div>

          {/* Offline Maps */}
          <div className="rounded-lg border-2 border-cyan-100 bg-cyan-50 p-4 dark:border-cyan-900 dark:bg-cyan-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Offline Maps
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {offlineMode
                    ? "Download maps for offline use"
                    : "Online maps only"}
                </p>
              </div>
              <Switch
                value={offlineMode}
                onChange={setOfflineMode}
              />
            </div>
            {offlineMode && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • Maps available without internet
              </div>
            )}
          </div>

          {/* Local Currency */}
          <div className="rounded-lg border-2 border-cyan-100 bg-cyan-50 p-4 dark:border-cyan-900 dark:bg-cyan-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Local Currency
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {localCurrency
                    ? "Show prices in local currency"
                    : "Show in home currency"}
                </p>
              </div>
              <Switch
                value={localCurrency}
                onChange={setLocalCurrency}
              />
            </div>
            {localCurrency && (
              <div className="mt-4 text-sm text-cyan-600 dark:text-cyan-400">
                • Automatic currency conversion
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="mb-3 text-sm font-medium text-blue-900 dark:text-blue-100">
              Travel Preferences
            </h4>
            <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <p>• {flightAlerts ? "Flight alerts enabled" : "No flight alerts"}</p>
              <p>• {priceTracking ? "Price tracking on" : "No price tracking"}</p>
              <p>• {offlineMode ? "Offline maps ready" : "Online maps only"}</p>
              <p>• {localCurrency ? "Local currency display" : "Home currency display"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample42; 