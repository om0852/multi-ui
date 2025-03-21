"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_44";

const SkeletonExample44 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const HealthMetricCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
      <Skeleton width="80px" height="32px" borderRadius={borderRadius} className={className} />
      <div className="flex items-center space-x-2">
        <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const ActivityCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Skeleton width="40px" height="40px" borderRadius="9999px" className={className} />
          <Skeleton width="120px" height="20px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="100%" height="8px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-1 text-center">
          <Skeleton width="40px" height="40px" borderRadius="9999px" className={`mx-auto ${className}`} />
          <Skeleton width="60px" height="12px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        </div>
        <div className="space-y-1 text-center">
          <Skeleton width="40px" height="40px" borderRadius="9999px" className={`mx-auto ${className}`} />
          <Skeleton width="60px" height="12px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        </div>
        <div className="space-y-1 text-center">
          <Skeleton width="40px" height="40px" borderRadius="9999px" className={`mx-auto ${className}`} />
          <Skeleton width="60px" height="12px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        </div>
      </div>
    </div>
  );

  const NutritionCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="120px" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="space-y-1 text-center">
          <Skeleton width="60px" height="60px" borderRadius="9999px" className={`mx-auto ${className}`} />
          <Skeleton width="40px" height="12px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        </div>
        <div className="space-y-1 text-center">
          <Skeleton width="60px" height="60px" borderRadius="9999px" className={`mx-auto ${className}`} />
          <Skeleton width="40px" height="12px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        </div>
        <div className="space-y-1 text-center">
          <Skeleton width="60px" height="60px" borderRadius="9999px" className={`mx-auto ${className}`} />
          <Skeleton width="40px" height="12px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        </div>
        <div className="space-y-1 text-center">
          <Skeleton width="60px" height="60px" borderRadius="9999px" className={`mx-auto ${className}`} />
          <Skeleton width="40px" height="12px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="100%" height="8px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const WorkoutItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center space-x-3 py-3">
      <Skeleton width="40px" height="40px" borderRadius={borderRadius} className={className} />
      <div className="flex-1 space-y-1">
        <Skeleton width="140px" height="16px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center space-x-2">
          <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="12px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
    </div>
  );

  const SleepChart = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton width="100px" height="20px" borderRadius={borderRadius} className={className} />
        <div className="flex space-x-2">
          <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      <Skeleton width="100%" height="160px" borderRadius={borderRadius} className={className} />
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-1">
          <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-1">
          <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-1">
          <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Health & Fitness Tracking Skeleton</h2>
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
          <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <Skeleton width="180px" height="28px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="120px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="flex items-center space-x-3">
                <Skeleton width="40px" height="40px" borderRadius="9999px" className="bg-gray-200" />
                <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
            </div>
            
            {/* Health Metrics */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <HealthMetricCard />
              <HealthMetricCard />
              <HealthMetricCard />
              <HealthMetricCard />
            </div>
            
            {/* Activity Summary */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="180px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <ActivityCard />
            </div>
            
            {/* Nutrition */}
            <NutritionCard />
            
            {/* Workout Plan */}
            <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="divide-y divide-gray-100">
                {[...Array(3)].map((_, i) => (
                  <WorkoutItem key={i} />
                ))}
              </div>
            </div>
            
            {/* Sleep Tracking */}
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <SleepChart />
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <Skeleton width="180px" height="28px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="120px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="flex items-center space-x-3">
                <Skeleton width="40px" height="40px" borderRadius="9999px" className="bg-gray-700" />
                <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
            </div>
            
            {/* Health Metrics */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <HealthMetricCard className="bg-gray-700" />
              <HealthMetricCard className="bg-gray-700" />
              <HealthMetricCard className="bg-gray-700" />
              <HealthMetricCard className="bg-gray-700" />
            </div>
            
            {/* Activity Summary */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="180px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <ActivityCard className="bg-gray-700" />
            </div>
            
            {/* Nutrition */}
            <NutritionCard className="bg-gray-700" />
            
            {/* Workout Plan */}
            <div className="space-y-4 rounded-lg border border-gray-700 p-4">
              <div className="flex items-center justify-between">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="divide-y divide-gray-700">
                {[...Array(3)].map((_, i) => (
                  <WorkoutItem key={i} className="bg-gray-700" />
                ))}
              </div>
            </div>
            
            {/* Sleep Tracking */}
            <div className="rounded-lg border border-gray-700 p-4">
              <SleepChart className="bg-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample44; 