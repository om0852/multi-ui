"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_103";

const SwitchExample103 = () => {
  const [weatherAlerts, setWeatherAlerts] = useState(true);
  const [radarMap, setRadarMap] = useState(true);
  const [airQuality, setAirQuality] = useState(false);
  const [hourlyForecast, setHourlyForecast] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Weather App Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your weather experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Weather Alerts */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Weather Alerts
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {weatherAlerts
                    ? "Receive weather notifications"
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

          {/* Radar Map */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Radar Map
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {radarMap
                    ? "Show weather radar"
                    : "Basic weather view"}
                </p>
              </div>
              <Switch
                checked={radarMap}
                onChange={setRadarMap}
              />
            </div>
            {radarMap && (
              <div className="mt-4 text-sm text-sky-600 dark:text-sky-400">
                • Interactive weather radar display
              </div>
            )}
          </div>

          {/* Air Quality */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Air Quality
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {airQuality
                    ? "Show air quality index"
                    : "Basic weather info"}
                </p>
              </div>
              <Switch
                checked={airQuality}
                onChange={setAirQuality}
              />
            </div>
            {airQuality && (
              <div className="mt-4 text-sm text-sky-600 dark:text-sky-400">
                • Real-time air quality monitoring
              </div>
            )}
          </div>

          {/* Hourly Forecast */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Hourly Forecast
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {hourlyForecast
                    ? "Detailed hourly predictions"
                    : "Daily forecast only"}
                </p>
              </div>
              <Switch
                checked={hourlyForecast}
                onChange={setHourlyForecast}
              />
            </div>
            {hourlyForecast && (
              <div className="mt-4 text-sm text-sky-600 dark:text-sky-400">
                • 24-hour detailed weather forecast
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Weather Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {weatherAlerts ? "Weather alerts on" : "No alerts"}</p>
              <p>• {radarMap ? "Radar map enabled" : "Basic view"}</p>
              <p>• {airQuality ? "Air quality tracking" : "Basic weather"}</p>
              <p>• {hourlyForecast ? "Hourly forecast on" : "Daily only"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample103; 