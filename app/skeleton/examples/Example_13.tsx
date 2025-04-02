"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_13";

const SkeletonExample13 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const ProductCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      {/* Product Image */}
      <Skeleton width="100%" height="200px" borderRadius={borderRadius} className={className} />
      
      {/* Product Info */}
      <div className="space-y-3">
        <Skeleton width="70%" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="40%" height="16px" borderRadius={borderRadius} className={className} />
        
        {/* Price and Rating */}
        <div className="flex items-center justify-between">
          <Skeleton width="30%" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="20%" height="24px" borderRadius={borderRadius} className={className} />
        </div>

        {/* Tags */}
        <div className="flex space-x-2">
          <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
        </div>

        {/* Action Button */}
        <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Product Grid Skeleton</h2>
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
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-lg border border-gray-100 p-4">
                <ProductCard />
              </div>
            ))}
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-lg border border-gray-700 p-4">
                <ProductCard className="bg-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample13; 