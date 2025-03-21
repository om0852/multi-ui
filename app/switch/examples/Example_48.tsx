"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_48";

const SwitchExample48 = () => {
  const [flightAlerts, setFlightAlerts] = useState(true);
  const [currencyConversion, setCurrencyConversion] = useState(true);
  const [offlineMaps, setOfflineMaps] = useState(false);
  const [travelInsurance, setTravelInsurance] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 p-1">
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
          <div className="rounded-lg border-2 border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Flight Alerts
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {flightAlerts
                    ? "Get real-time flight updates"
                    : "No flight notifications"}
                </p>
              </div>
              <Switch
                value={flightAlerts}
                onChange={setFlightAlerts}
              />
            </div>
            {flightAlerts && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Gate changes and delays
              </div>
            )}
          </div>

          {/* Currency Conversion */}
          <div className="rounded-lg border-2 border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
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
                value={currencyConversion}
                onChange={setCurrencyConversion}
              />
            </div>
            {currencyConversion && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Real-time exchange rates
              </div>
            )}
          </div>

          {/* Offline Maps */}
          <div className="rounded-lg border-2 border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
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
                value={offlineMaps}
                onChange={setOfflineMaps}
              />
            </div>
            {offlineMaps && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Access maps without internet
              </div>
            )}
          </div>

          {/* Travel Insurance */}
          <div className="rounded-lg border-2 border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Travel Insurance
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {travelInsurance
                    ? "Insurance coverage active"
                    : "No insurance coverage"}
                </p>
              </div>
              <Switch
                value={travelInsurance}
                onChange={setTravelInsurance}
              />
            </div>
            {travelInsurance && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • 24/7 emergency assistance
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="mb-3 text-sm font-medium text-orange-900 dark:text-orange-100">
              Travel Preferences
            </h4>
            <div className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
              <p>• {flightAlerts ? "Flight alerts on" : "No flight alerts"}</p>
              <p>• {currencyConversion ? "Auto currency conversion" : "Manual conversion"}</p>
              <p>• {offlineMaps ? "Offline maps enabled" : "Online maps only"}</p>
              <p>• {travelInsurance ? "Insurance active" : "No insurance"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample48; 