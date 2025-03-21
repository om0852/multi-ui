"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_21";

const SkeletonExample21 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const PricingTier = ({ featured = false, className = "bg-gray-200" }: { featured?: boolean; className?: string }) => (
    <div className={`space-y-6 rounded-lg p-6 ${featured ? "border-2 border-purple-500" : "border border-gray-200"}`}>
      {/* Header */}
      <div className="space-y-2 text-center">
        <Skeleton width="120px" height="24px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        <Skeleton width="80px" height="40px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
        <Skeleton width="160px" height="16px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
      </div>

      {/* Features */}
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center space-x-3">
            <Skeleton width="20px" height="20px" borderRadius={borderRadius} className={className} />
            <Skeleton width="80%" height="16px" borderRadius={borderRadius} className={className} />
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Skeleton width="100%" height="48px" borderRadius={borderRadius} className={className} />

      {/* Footer */}
      <Skeleton width="140px" height="14px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Pricing Table Skeleton</h2>
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
          <div className="grid gap-6 md:grid-cols-3">
            <PricingTier />
            <PricingTier featured />
            <PricingTier />
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="grid gap-6 md:grid-cols-3">
            <PricingTier className="bg-gray-700" />
            <PricingTier featured className="bg-gray-700" />
            <PricingTier className="bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample21; 