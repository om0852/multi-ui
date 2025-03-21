"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_41";

const SkeletonExample41 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const CurrentWeather = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-6 text-center">
      {/* Location */}
      <div className="space-y-1">
        <Skeleton width="180px" height="28px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
      </div>
      
      {/* Current Weather */}
      <div className="space-y-2">
        <Skeleton width="120px" height="120px" borderRadius="9999px" className={`mx-auto ${className}`} />
        <Skeleton width="100px" height="40px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        <Skeleton width="160px" height="20px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
      </div>
      
      {/* Details */}
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
          <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
          <Skeleton width="40px" height="20px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        </div>
        <div className="space-y-2">
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
          <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
          <Skeleton width="40px" height="20px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        </div>
        <div className="space-y-2">
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
          <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
          <Skeleton width="40px" height="20px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        </div>
      </div>
    </div>
  );

  const ForecastItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-2 text-center">
      <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
      <Skeleton width="40px" height="40px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
      <Skeleton width="40px" height="20px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
    </div>
  );

  const HourlyForecast = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      <Skeleton width="120px" height="20px" borderRadius={borderRadius} className={className} />
      <div className="flex justify-between overflow-x-auto py-2">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="mx-2 min-w-[60px] space-y-2 text-center">
            <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
            <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
            <Skeleton width="30px" height="16px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
          </div>
        ))}
      </div>
    </div>
  );

  const WeatherMap = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton width="120px" height="20px" borderRadius={borderRadius} className={className} />
        <div className="flex space-x-2">
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      <Skeleton width="100%" height="200px" borderRadius={borderRadius} className={className} />
      <div className="flex justify-between">
        <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Weather App Skeleton</h2>
        <div>
          <label className="block text-sm font-medium">Border Radius</label>
          <select
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
            value={borderRadius}
            onChange={(e) => setBorderRadius(e.target.value)}
          >
            <option value="0px">None</option>
            <option value="4px">Small</option>
            <option value="8px">Medium</option>
            <option value="16px">Large</option>
          </select>
        </div>
      </div>

      {/* Examples */}
      <div className="grid gap-8">
        {/* Light Mode */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Current Weather */}
              <div className="rounded-lg border border-gray-100 p-6">
                <CurrentWeather />
              </div>
              
              {/* Daily Forecast */}
              <div className="space-y-4 rounded-lg border border-gray-100 p-4">
                <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="grid grid-cols-5 gap-2">
                  {[...Array(5)].map((_, i) => (
                    <ForecastItem key={i} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* Hourly Forecast */}
              <div className="rounded-lg border border-gray-100 p-4">
                <HourlyForecast />
              </div>
              
              {/* Weather Map */}
              <div className="rounded-lg border border-gray-100 p-4">
                <WeatherMap />
              </div>
              
              {/* Additional Info */}
              <div className="space-y-4 rounded-lg border border-gray-100 p-4">
                <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="60px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="60px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="60px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="60px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Current Weather */}
              <div className="rounded-lg border border-gray-700 p-6">
                <CurrentWeather className="bg-gray-700" />
              </div>
              
              {/* Daily Forecast */}
              <div className="space-y-4 rounded-lg border border-gray-700 p-4">
                <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="grid grid-cols-5 gap-2">
                  {[...Array(5)].map((_, i) => (
                    <ForecastItem key={i} className="bg-gray-700" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* Hourly Forecast */}
              <div className="rounded-lg border border-gray-700 p-4">
                <HourlyForecast className="bg-gray-700" />
              </div>
              
              {/* Weather Map */}
              <div className="rounded-lg border border-gray-700 p-4">
                <WeatherMap className="bg-gray-700" />
              </div>
              
              {/* Additional Info */}
              <div className="space-y-4 rounded-lg border border-gray-700 p-4">
                <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="60px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="60px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="60px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="60px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample41; 