"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_6";

const SkeletonExample6 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const GridItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3">
      <Skeleton width="100%" height="160px" borderRadius={borderRadius} className={className} />
      <Skeleton width="70%" height="20px" borderRadius={borderRadius} className={className} />
      <Skeleton width="40%" height="16px" borderRadius={borderRadius} className={className} />
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Grid Skeleton</h2>
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
        {/* Grid - Light */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-lg font-medium">Product Gallery</h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <GridItem key={i} />
            ))}
          </div>
        </div>

        {/* Grid - Dark */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <h3 className="mb-4 text-lg font-medium text-white">Product Gallery</h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <GridItem key={i} className="bg-gray-700" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample6; 