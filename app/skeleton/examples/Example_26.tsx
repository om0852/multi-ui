"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_26";

const SkeletonExample26 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const StatCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="140px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="40px" height="40px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const ChartCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between">
        <Skeleton width="160px" height="24px" borderRadius={borderRadius} className={className} />
        <div className="flex space-x-2">
          <Skeleton width="80px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-end space-x-2">
          {[40, 60, 30, 80, 50, 70, 45].map((height, i) => (
            <Skeleton key={i} width="40px" height={`${height}px`} borderRadius={borderRadius} className={className} />
          ))}
        </div>
        <div className="flex justify-between">
          {[...Array(7)].map((_, i) => (
            <Skeleton key={i} width="30px" height="16px" borderRadius={borderRadius} className={className} />
          ))}
        </div>
      </div>
    </div>
  );

  const TableRow = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-3">
        <Skeleton width="32px" height="32px" borderRadius="9999px" className={className} />
        <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
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
        {/* Light Mode */}
        <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Skeleton width="200px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="160px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
            <div className="flex space-x-3">
              <Skeleton width="100px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <StatCard key={i} />
            ))}
          </div>

          {/* Charts */}
          <div className="grid gap-4 lg:grid-cols-2">
            <ChartCard />
            <ChartCard />
          </div>

          {/* Table */}
          <div className="rounded-lg bg-white shadow-sm dark:bg-gray-800">
            <div className="border-b border-gray-200 p-4 dark:border-gray-700">
              <Skeleton width="160px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
            <div className="p-4">
              {[...Array(5)].map((_, i) => (
                <TableRow key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="space-y-6 rounded-lg bg-gray-800 p-6 shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Skeleton width="200px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="160px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
            <div className="flex space-x-3">
              <Skeleton width="100px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <StatCard key={i} className="bg-gray-700" />
            ))}
          </div>

          {/* Charts */}
          <div className="grid gap-4 lg:grid-cols-2">
            <ChartCard className="bg-gray-700" />
            <ChartCard className="bg-gray-700" />
          </div>

          {/* Table */}
          <div className="rounded-lg bg-gray-800 shadow-sm">
            <div className="border-b border-gray-700 p-4">
              <Skeleton width="160px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
            <div className="p-4">
              {[...Array(5)].map((_, i) => (
                <TableRow key={i} className="bg-gray-700" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample26; 