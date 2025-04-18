"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_10";

const SkeletonExample10 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const FormField = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-2">
      <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Form Skeleton</h2>
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
        {/* Form - Light */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <FormField />
              <FormField />
            </div>
            <FormField />
            <FormField />
            <div className="grid gap-6 md:grid-cols-3">
              <FormField />
              <FormField />
              <FormField />
            </div>
            <Skeleton width="120px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
          </div>
        </div>

        {/* Form - Dark */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <FormField className="bg-gray-700" />
              <FormField className="bg-gray-700" />
            </div>
            <FormField className="bg-gray-700" />
            <FormField className="bg-gray-700" />
            <div className="grid gap-6 md:grid-cols-3">
              <FormField className="bg-gray-700" />
              <FormField className="bg-gray-700" />
              <FormField className="bg-gray-700" />
            </div>
            <Skeleton width="120px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample10; 