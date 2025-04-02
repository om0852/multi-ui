"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_2";

const SkeletonExample2 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Card Skeleton</h2>
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
        {/* Card Skeleton - Light */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="space-y-4">
            {/* Header */}
            <Skeleton width="70%" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
            
            {/* Image placeholder */}
            <Skeleton width="100%" height="200px" borderRadius={borderRadius} className="bg-gray-200" />
            
            {/* Content lines */}
            <div className="space-y-2">
              <Skeleton width="100%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="90%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="80%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
            
            {/* Footer */}
            <div className="flex justify-between">
              <Skeleton width="30%" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="20%" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Card Skeleton - Dark */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="space-y-4">
            {/* Header */}
            <Skeleton width="70%" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
            
            {/* Image placeholder */}
            <Skeleton width="100%" height="200px" borderRadius={borderRadius} className="bg-gray-700" />
            
            {/* Content lines */}
            <div className="space-y-2">
              <Skeleton width="100%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="90%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="80%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
            
            {/* Footer */}
            <div className="flex justify-between">
              <Skeleton width="30%" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="20%" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample2; 