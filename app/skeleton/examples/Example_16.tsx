"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_16";

const SkeletonExample16 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const VideoPlayer = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      {/* Video Container */}
      <div className="relative aspect-video w-full">
        <Skeleton width="100%" height="100%" borderRadius={borderRadius} className={className} />
        {/* Play Button */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Skeleton width="64px" height="64px" borderRadius="9999px" className={className} />
        </div>
      </div>

      {/* Video Info */}
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <Skeleton width="48px" height="48px" borderRadius="9999px" className={className} />
          <div className="flex-1 space-y-2">
            <Skeleton width="80%" height="24px" borderRadius={borderRadius} className={className} />
            <div className="flex items-center space-x-2">
              <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
              <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-2">
          {/* Progress Bar */}
          <Skeleton width="100%" height="4px" borderRadius={borderRadius} className={className} />
          
          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
              <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
              <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
              <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="95%" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Video Player Skeleton</h2>
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
          <VideoPlayer />
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <VideoPlayer className="bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample16; 