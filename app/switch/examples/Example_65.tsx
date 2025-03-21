"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_65";

const SwitchExample65 = () => {
  const [flightAlerts, setFlightAlerts] = useState(true);
  const [offlineMaps, setOfflineMaps] = useState(true);
  const [currencyConversion, setCurrencyConversion] = useState(true);
  const [localRecommendations, setLocalRecommendations] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Travel Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your travel experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Flight Alerts */}
          <div className="rounded-lg border-2 border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Flight Alerts
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {flightAlerts
                    ? "Real-time flight updates"
                    : "Manual flight checking"}
                </p>
              </div>
              <Switch
                checked={flightAlerts}
                onChange={setFlightAlerts}
              />
            </div>
            {flightAlerts && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Get notified about delays and gate changes
              </div>
            )}
          </div>

          {/* Offline Maps */}
          <div className="rounded-lg border-2 border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Offline Maps
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {offlineMaps
                    ? "Download maps for offline use"
                    : "Online maps only"}
                </p>
              </div>
              <Switch
                checked={offlineMaps}
                onChange={setOfflineMaps}
              />
            </div>
            {offlineMaps && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Access maps without internet connection
              </div>
            )}
          </div>

          {/* Currency Conversion */}
          <div className="rounded-lg border-2 border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Currency Conversion
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {currencyConversion
                    ? "Auto currency conversion"
                    : "Manual conversion"}
                </p>
              </div>
              <Switch
                checked={currencyConversion}
                onChange={setCurrencyConversion}
              />
            </div>
            {currencyConversion && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Prices shown in your local currency
              </div>
            )}
          </div>

          {/* Local Recommendations */}
          <div className="rounded-lg border-2 border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Local Recommendations
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {localRecommendations
                    ? "Personalized local tips"
                    : "Standard recommendations"}
                </p>
              </div>
              <Switch
                checked={localRecommendations}
                onChange={setLocalRecommendations}
              />
            </div>
            {localRecommendations && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Get personalized local suggestions
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/20">
            <h4 className="mb-3 text-sm font-medium text-cyan-900 dark:text-cyan-100">
              Travel Preferences
            </h4>
            <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
              <p>• {flightAlerts ? "Flight alerts on" : "Manual checking"}</p>
              <p>• {offlineMaps ? "Offline maps enabled" : "Online maps only"}</p>
              <p>• {currencyConversion ? "Auto conversion on" : "Manual conversion"}</p>
              <p>• {localRecommendations ? "Local tips enabled" : "Standard tips"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample65; 