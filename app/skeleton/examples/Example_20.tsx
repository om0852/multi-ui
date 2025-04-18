"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_20";

const SkeletonExample20 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const TimelineEvent = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex gap-4">
      {/* Timeline Marker */}
      <div className="flex flex-col items-center">
        <Skeleton width="32px" height="32px" borderRadius="9999px" className={className} />
        <div className="h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Event Content */}
      <div className="flex-1 space-y-3 pb-8">
        {/* Event Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Skeleton width="120px" height="20px" borderRadius={borderRadius} className={className} />
            <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="100px" height="24px" borderRadius={borderRadius} className={className} />
        </div>

        {/* Event Description */}
        <div className="space-y-2">
          <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
        </div>

        {/* Event Attachments */}
        <div className="flex flex-wrap gap-2">
          <Skeleton width="80px" height="80px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="80px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="80px" borderRadius={borderRadius} className={className} />
        </div>

        {/* Event Actions */}
        <div className="flex items-center space-x-4">
          <div className="flex -space-x-2">
            <Skeleton width="24px" height="24px" borderRadius="9999px" className={className} />
            <Skeleton width="24px" height="24px" borderRadius="9999px" className={className} />
            <Skeleton width="24px" height="24px" borderRadius="9999px" className={className} />
          </div>
          <div className="flex space-x-2">
            <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
            <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
      </div>
    </div>
  );

  const Timeline = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-6">
      {/* Timeline Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Skeleton width="160px" height="32px" borderRadius={borderRadius} className={className} />
          <div className="flex space-x-2">
            <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
            <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton width="200px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
      </div>

      {/* Timeline Filter */}
      <div className="flex items-center space-x-4">
        <Skeleton width="120px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="120px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="120px" height="32px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Timeline Events */}
      <div className="space-y-2">
        <TimelineEvent className={className} />
        <TimelineEvent className={className} />
        <TimelineEvent className={className} />
        <TimelineEvent className={className} />
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-4">
        <Skeleton width="120px" height="36px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Timeline Skeleton</h2>
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
          <Timeline />
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <Timeline className="bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample20; 