"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_59";

const SwitchExample59 = () => {
  const [locationTracking, setLocationTracking] = useState(true);
  const [weatherAlerts, setWeatherAlerts] = useState(true);
  const [hourlyUpdates, setHourlyUpdates] = useState(false);
  const [metricUnits, setMetricUnits] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Weather Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your weather experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Location Tracking */}
          <div className="rounded-lg border-2 border-sky-100 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Location Tracking
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {locationTracking
                    ? "Auto-update location"
                    : "Manual location selection"}
                </p>
              </div>
              <Switch
                checked={locationTracking}
                onChange={setLocationTracking}
              />
            </div>
            {locationTracking && (
              <div className="mt-4 text-sm text-sky-600 dark:text-sky-400">
                • Weather updates based on your location
              </div>
            )}
          </div>

          {/* Weather Alerts */}
          <div className="rounded-lg border-2 border-sky-100 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Weather Alerts
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {weatherAlerts
                    ? "Severe weather notifications"
                    : "No weather alerts"}
                </p>
              </div>
              <Switch
                checked={weatherAlerts}
                onChange={setWeatherAlerts}
              />
            </div>
            {weatherAlerts && (
              <div className="mt-4 text-sm text-sky-600 dark:text-sky-400">
                • Get notified about severe weather
              </div>
            )}
          </div>

          {/* Hourly Updates */}
          <div className="rounded-lg border-2 border-sky-100 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Hourly Updates
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {hourlyUpdates
                    ? "Detailed hourly forecast"
                    : "Daily forecast only"}
                </p>
              </div>
              <Switch
                checked={hourlyUpdates}
                onChange={setHourlyUpdates}
              />
            </div>
            {hourlyUpdates && (
              <div className="mt-4 text-sm text-sky-600 dark:text-sky-400">
                • View weather by the hour
              </div>
            )}
          </div>

          {/* Metric Units */}
          <div className="rounded-lg border-2 border-sky-100 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Metric Units
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {metricUnits
                    ? "Use metric measurements"
                    : "Use imperial measurements"}
                </p>
              </div>
              <Switch
                checked={metricUnits}
                onChange={setMetricUnits}
              />
            </div>
            {metricUnits && (
              <div className="mt-4 text-sm text-sky-600 dark:text-sky-400">
                • Temperature in Celsius
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="mb-3 text-sm font-medium text-blue-900 dark:text-blue-100">
              Weather Preferences
            </h4>
            <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <p>• {locationTracking ? "Location tracking on" : "Manual location"}</p>
              <p>• {weatherAlerts ? "Weather alerts on" : "No alerts"}</p>
              <p>• {hourlyUpdates ? "Hourly updates on" : "Daily forecast"}</p>
              <p>• {metricUnits ? "Metric units" : "Imperial units"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample59; 