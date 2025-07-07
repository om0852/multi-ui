"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_5";

const SkeletonExample5 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const ListItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center space-x-4 py-3">
      <Skeleton width="40px" height="40px" borderRadius="4px" className={className} />
      <div className="flex-1 space-y-2">
        <Skeleton width="60%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="40%" height="14px" borderRadius={borderRadius} className={className} />
      </div>
      <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize List Skeleton</h2>
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
        {/* List - Light */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-lg font-medium">Notifications</h3>
          <div className="divide-y divide-gray-100">
            {[...Array(5)].map((_, i) => (
              <ListItem key={i} />
            ))}
          </div>
        </div>

        {/* List - Dark */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <h3 className="mb-4 text-lg font-medium text-white">Notifications</h3>
          <div className="divide-y divide-gray-700">
            {[...Array(5)].map((_, i) => (
              <ListItem key={i} className="bg-gray-700" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample5; 