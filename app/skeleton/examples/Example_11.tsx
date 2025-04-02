"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_11";

const SkeletonExample11 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const ProfileHeader = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      {/* Cover Image */}
      <Skeleton width="100%" height="200px" borderRadius={borderRadius} className={className} />
      
      {/* Profile Info */}
      <div className="relative px-4">
        <div className="absolute -top-16 left-4">
          <Skeleton width="128px" height="128px" borderRadius="9999px" className={className} />
        </div>
        <div className="ml-36 space-y-2 pt-4">
          <Skeleton width="200px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="150px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-2 px-4 pt-4">
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="80%" height="16px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Stats */}
      <div className="mt-4 flex justify-around border-t border-gray-200 px-4 pt-4 dark:border-gray-700">
        <div className="text-center">
          <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={`mt-1 ${className}`} />
        </div>
        <div className="text-center">
          <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={`mt-1 ${className}`} />
        </div>
        <div className="text-center">
          <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={`mt-1 ${className}`} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Social Profile Skeleton</h2>
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
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <ProfileHeader />
        </div>

        {/* Dark Mode */}
        <div className="overflow-hidden rounded-lg bg-gray-800 shadow-lg">
          <ProfileHeader className="bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample11; 