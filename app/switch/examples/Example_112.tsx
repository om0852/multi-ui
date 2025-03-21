"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_112";

const SwitchExample112 = () => {
  const [flightAlerts, setFlightAlerts] = useState(true);
  const [offlineMaps, setOfflineMaps] = useState(true);
  const [currencyConverter, setCurrencyConverter] = useState(false);
  const [travelInsights, setTravelInsights] = useState(true);

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
                • Receive real-time flight updates
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
                    ? "Access maps without internet"
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
                • Download maps for offline use
              </div>
            )}
          </div>

          {/* Currency Converter */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Currency Converter
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {currencyConverter
                    ? "Real-time currency rates"
                    : "Basic price display"}
                </p>
              </div>
              <Switch
                checked={currencyConverter}
                onChange={setCurrencyConverter}
              />
            </div>
            {currencyConverter && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Convert prices to your local currency
              </div>
            )}
          </div>

          {/* Travel Insights */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Travel Insights
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {travelInsights
                    ? "Get travel recommendations"
                    : "Basic travel info"}
                </p>
              </div>
              <Switch
                checked={travelInsights}
                onChange={setTravelInsights}
              />
            </div>
            {travelInsights && (
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                • Receive personalized travel tips
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Travel Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {flightAlerts ? "Flight alerts on" : "Manual checking"}</p>
              <p>• {offlineMaps ? "Offline maps on" : "Online maps only"}</p>
              <p>• {currencyConverter ? "Currency converter on" : "Basic prices"}</p>
              <p>• {travelInsights ? "Travel insights on" : "Basic info"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample112; 