"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_39";

const SwitchExample39 = () => {
  const [locationTracking, setLocationTracking] = useState(true);
  const [weatherAlerts, setWeatherAlerts] = useState(true);
  const [hourlyUpdates, setHourlyUpdates] = useState(false);
  const [metricUnits, setMetricUnits] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Weather Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your weather tracking preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* Location Tracking */}
          <div className="rounded-lg border-2 border-sky-100 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Location Services
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {locationTracking
                    ? "Using current location"
                    : "Manual location entry"}
                </p>
              </div>
              <Switch
                value={locationTracking}
                onChange={setLocationTracking}
              />
            </div>
            {locationTracking && (
              <div className="mt-4 text-sm text-sky-600 dark:text-sky-400">
                • Real-time location updates
              </div>
            )}
          </div>

          {/* Weather Alerts */}
          <div className="rounded-lg border-2 border-sky-100 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Severe Weather Alerts
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {weatherAlerts
                    ? "Get important weather alerts"
                    : "Alerts disabled"}
                </p>
              </div>
              <Switch
                value={weatherAlerts}
                onChange={setWeatherAlerts}
              />
            </div>
            {weatherAlerts && (
              <div className="mt-4 text-sm text-sky-600 dark:text-sky-400">
                • Storm and extreme weather warnings
              </div>
            )}
          </div>

          {/* Hourly Updates */}
          <div className="rounded-lg border-2 border-sky-100 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Hourly Forecasts
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {hourlyUpdates
                    ? "Get hourly weather updates"
                    : "Standard daily forecast"}
                </p>
              </div>
              <Switch
                value={hourlyUpdates}
                onChange={setHourlyUpdates}
              />
            </div>
            {hourlyUpdates && (
              <div className="mt-4 text-sm text-sky-600 dark:text-sky-400">
                • Detailed hour-by-hour forecast
              </div>
            )}
          </div>

          {/* Unit Settings */}
          <div className="rounded-lg border-2 border-sky-100 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Metric Units
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {metricUnits
                    ? "Using Celsius & kilometers"
                    : "Using Fahrenheit & miles"}
                </p>
              </div>
              <Switch
                value={metricUnits}
                onChange={setMetricUnits}
              />
            </div>
            {metricUnits && (
              <div className="mt-4 text-sm text-sky-600 dark:text-sky-400">
                • Temperature in °C, wind in km/h
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="mb-3 text-sm font-medium text-blue-900 dark:text-blue-100">
              Weather Preferences
            </h4>
            <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <p>• {locationTracking ? "Using GPS location" : "Manual location"}</p>
              <p>• {weatherAlerts ? "Weather alerts on" : "Alerts disabled"}</p>
              <p>• {hourlyUpdates ? "Hourly updates" : "Daily forecast only"}</p>
              <p>• {metricUnits ? "Metric units" : "Imperial units"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample39; 