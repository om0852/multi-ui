"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_14";

const SkeletonExample14 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const CalendarDay = ({ hasEvent = false, className = "bg-gray-200" }: { hasEvent?: boolean; className?: string }) => (
    <div className="space-y-1">
      <Skeleton width="32px" height="24px" borderRadius={borderRadius} className={className} />
      {hasEvent && (
        <div className="space-y-1">
          <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80%" height="12px" borderRadius={borderRadius} className={className} />
        </div>
      )}
    </div>
  );

  const CalendarGrid = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      {/* Month Navigation */}
      <div className="flex items-center justify-between">
        <Skeleton width="100px" height="24px" borderRadius={borderRadius} className={className} />
        <div className="flex space-x-2">
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-2">
        {[...Array(7)].map((_, i) => (
          <Skeleton key={i} width="100%" height="24px" borderRadius={borderRadius} className={className} />
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">
        {[...Array(35)].map((_, i) => (
          <div key={i} className="aspect-square p-1">
            <CalendarDay hasEvent={i % 5 === 0} className={className} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Calendar Skeleton</h2>
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
      <div className="grid gap-8 md:grid-cols-2">
        {/* Light Mode */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <CalendarGrid />
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <CalendarGrid className="bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample14; 