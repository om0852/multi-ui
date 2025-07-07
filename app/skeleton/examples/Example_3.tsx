"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_3";

const SkeletonExample3 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Profile Skeleton</h2>
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
            <option value="9999px">Full</option>
          </select>
        </div>
      </div>

      {/* Examples */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Profile Card - Light */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <Skeleton width="64px" height="64px" borderRadius="9999px" className="bg-gray-200" />
            
            {/* Info */}
            <div className="flex-1 space-y-2">
              <Skeleton width="60%" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="40%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Skeleton width="100%" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="60%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
            <div className="space-y-2">
              <Skeleton width="100%" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="60%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
            <div className="space-y-2">
              <Skeleton width="100%" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="60%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Profile Card - Dark */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <Skeleton width="64px" height="64px" borderRadius="9999px" className="bg-gray-700" />
            
            {/* Info */}
            <div className="flex-1 space-y-2">
              <Skeleton width="60%" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="40%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Skeleton width="100%" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="60%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
            <div className="space-y-2">
              <Skeleton width="100%" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="60%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
            <div className="space-y-2">
              <Skeleton width="100%" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="60%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample3; 