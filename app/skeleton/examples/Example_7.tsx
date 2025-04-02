"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_7";

const SkeletonExample7 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const StatCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-2">
      <Skeleton width="40%" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width="60%" height="24px" borderRadius={borderRadius} className={className} />
      <Skeleton width="80%" height="8px" borderRadius={borderRadius} className={className} />
    </div>
  );

  const ChartCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      <Skeleton width="40%" height="20px" borderRadius={borderRadius} className={className} />
      <Skeleton width="100%" height="200px" borderRadius={borderRadius} className={className} />
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Dashboard Skeleton</h2>
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
      <div className="space-y-8">
        {/* Dashboard - Light */}
        <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg">
          {/* Stats Row */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-lg bg-gray-50 p-4">
                <StatCard />
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid gap-6 md:grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="rounded-lg bg-gray-50 p-4">
                <ChartCard />
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard - Dark */}
        <div className="space-y-6 rounded-lg bg-gray-800 p-6 shadow-lg">
          {/* Stats Row */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-lg bg-gray-900 p-4">
                <StatCard className="bg-gray-700" />
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid gap-6 md:grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="rounded-lg bg-gray-900 p-4">
                <ChartCard className="bg-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample7; 