"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_34";

const SkeletonExample34 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const StatCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <Skeleton width="60%" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width="80%" height="32px" borderRadius={borderRadius} className={className} />
      <div className="flex items-center space-x-1">
        <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="40%" height="14px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const ActivityCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center space-x-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <Skeleton width="48px" height="48px" borderRadius="9999px" className={className} />
      <div className="flex-1 space-y-2">
        <Skeleton width="70%" height="20px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center justify-between">
          <Skeleton width="40%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="30%" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const WorkoutCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="50%" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
      
      <div className="space-y-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center space-x-3">
            <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
            <div className="flex-1">
              <Skeleton width="80%" height="16px" borderRadius={borderRadius} className={className} />
            </div>
            <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
        ))}
      </div>
      
      <Skeleton width="100%" height="8px" borderRadius={borderRadius} className={className} />
      
      <div className="flex justify-between">
        <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const ChartCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="40%" height="20px" borderRadius={borderRadius} className={className} />
        <div className="flex space-x-2">
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      <Skeleton width="100%" height="200px" borderRadius={borderRadius} className={className} />
      
      <div className="flex justify-between">
        <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Fitness Tracking Skeleton</h2>
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
        <div className="space-y-8 rounded-lg bg-white p-6 shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Skeleton width="180px" height="28px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="120px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton width="40px" height="40px" borderRadius="9999px" className="bg-gray-200" />
              <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
          </div>
          
          {/* Activity Timeline */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton width="160px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
            
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <ActivityCard key={i} />
              ))}
            </div>
          </div>
          
          {/* Charts and Workouts */}
          <div className="grid gap-6 lg:grid-cols-2">
            <ChartCard />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="140px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              
              <div className="space-y-4">
                <WorkoutCard />
                <WorkoutCard />
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="space-y-8 rounded-lg bg-gray-800 p-6 shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Skeleton width="180px" height="28px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="120px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton width="40px" height="40px" borderRadius="9999px" className="bg-gray-700" />
              <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard className="bg-gray-700" />
            <StatCard className="bg-gray-700" />
            <StatCard className="bg-gray-700" />
            <StatCard className="bg-gray-700" />
          </div>
          
          {/* Activity Timeline */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton width="160px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
            
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <ActivityCard key={i} className="bg-gray-700" />
              ))}
            </div>
          </div>
          
          {/* Charts and Workouts */}
          <div className="grid gap-6 lg:grid-cols-2">
            <ChartCard className="bg-gray-700" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="140px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              
              <div className="space-y-4">
                <WorkoutCard className="bg-gray-700" />
                <WorkoutCard className="bg-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample34; 