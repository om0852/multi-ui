"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_23";

const SkeletonExample23 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const PortfolioItem = ({ size = "normal", className = "bg-gray-200" }: { size?: "normal" | "large"; className?: string }) => (
    <div className={`space-y-3 ${size === "large" ? "col-span-2 row-span-2" : ""}`}>
      {/* Image */}
      <Skeleton
        width="100%"
        height={size === "large" ? "480px" : "240px"}
        borderRadius={borderRadius}
        className={className}
      />

      {/* Info */}
      <div className="space-y-2">
        <Skeleton width="70%" height="20px" borderRadius={borderRadius} className={className} />
        <div className="flex space-x-2">
          <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const FilterButton = ({ className = "bg-gray-200" }: { className?: string }) => (
    <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Portfolio Gallery Skeleton</h2>
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
          <div className="space-y-4">
            <div className="text-center">
              <Skeleton width="200px" height="32px" borderRadius={borderRadius} className="mx-auto bg-gray-200" />
              <div className="mt-2">
                <Skeleton width="400px" height="16px" borderRadius={borderRadius} className="mx-auto bg-gray-200" />
              </div>
            </div>

            {/* Filters */}
            <div className="flex justify-center space-x-4">
              {[...Array(5)].map((_, i) => (
                <FilterButton key={i} />
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PortfolioItem size="large" />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
          </div>
        </div>

        {/* Dark Mode */}
        <div className="space-y-6 rounded-lg bg-gray-800 p-6 shadow-lg">
          {/* Header */}
          <div className="space-y-4">
            <div className="text-center">
              <Skeleton width="200px" height="32px" borderRadius={borderRadius} className="mx-auto bg-gray-700" />
              <div className="mt-2">
                <Skeleton width="400px" height="16px" borderRadius={borderRadius} className="mx-auto bg-gray-700" />
              </div>
            </div>

            {/* Filters */}
            <div className="flex justify-center space-x-4">
              {[...Array(5)].map((_, i) => (
                <FilterButton key={i} className="bg-gray-700" />
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PortfolioItem size="large" className="bg-gray-700" />
            <PortfolioItem className="bg-gray-700" />
            <PortfolioItem className="bg-gray-700" />
            <PortfolioItem className="bg-gray-700" />
            <PortfolioItem className="bg-gray-700" />
            <PortfolioItem className="bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample23; 