"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_94";

const SwitchExample94 = () => {
  const [flightAlerts, setFlightAlerts] = useState(true);
  const [weatherUpdates, setWeatherUpdates] = useState(true);
  const [currencyConversion, setCurrencyConversion] = useState(false);
  const [offlineMaps, setOfflineMaps] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 p-1">
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
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Flight Alerts
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {flightAlerts
                    ? "Get flight notifications"
                    : "No flight alerts"}
                </p>
              </div>
              <Switch
                checked={flightAlerts}
                onChange={setFlightAlerts}
              />
            </div>
            {flightAlerts && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Real-time flight status updates
              </div>
            )}
          </div>

          {/* Weather Updates */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Weather Updates
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {weatherUpdates
                    ? "Get weather forecasts"
                    : "No weather updates"}
                </p>
              </div>
              <Switch
                checked={weatherUpdates}
                onChange={setWeatherUpdates}
              />
            </div>
            {weatherUpdates && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • 7-day weather forecast
              </div>
            )}
          </div>

          {/* Currency Conversion */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Currency Conversion
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
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
                • Real-time exchange rates
              </div>
            )}
          </div>

          {/* Offline Maps */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Offline Maps
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
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
                • Access maps without internet
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Travel Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {flightAlerts ? "Flight alerts on" : "No alerts"}</p>
              <p>• {weatherUpdates ? "Weather updates on" : "No updates"}</p>
              <p>• {currencyConversion ? "Auto conversion on" : "Manual conversion"}</p>
              <p>• {offlineMaps ? "Offline maps enabled" : "Online maps only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample94; 