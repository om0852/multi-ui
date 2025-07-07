"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_15";

const SkeletonExample15 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const MusicPlayer = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-6">
      {/* Album Art */}
      <div className="mx-auto w-64">
        <Skeleton width="100%" height="256px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Track Info */}
      <div className="space-y-2 text-center">
        <Skeleton width="200px" height="24px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        <Skeleton width="160px" height="16px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <Skeleton width="100%" height="4px" borderRadius={borderRadius} className={className} />
        <div className="flex justify-between">
          <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4">
        <Skeleton width="48px" height="48px" borderRadius="9999px" className={className} />
        <Skeleton width="64px" height="64px" borderRadius="9999px" className={className} />
        <Skeleton width="48px" height="48px" borderRadius="9999px" className={className} />
      </div>

      {/* Additional Controls */}
      <div className="flex items-center justify-between px-4">
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center space-x-2">
          <Skeleton width="100px" height="4px" borderRadius={borderRadius} className={className} />
          <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Music Player Skeleton</h2>
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
          <MusicPlayer />
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <MusicPlayer className="bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample15; 