"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_28";

const SkeletonExample28 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const ProfileHeader = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="relative">
      {/* Cover Photo */}
      <Skeleton width="100%" height="200px" borderRadius={borderRadius} className={className} />
      
      {/* Profile Info */}
      <div className="relative px-6 pb-4">
        <div className="absolute -top-16">
          <Skeleton width="128px" height="128px" borderRadius="9999px" className={className} />
        </div>
        <div className="ml-36 flex items-center justify-between pt-4">
          <div className="space-y-2">
            <Skeleton width="200px" height="28px" borderRadius={borderRadius} className={className} />
            <Skeleton width="150px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="120px" height="36px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const StatsSection = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="grid grid-cols-4 gap-4 border-b border-t border-gray-200 px-6 py-4 dark:border-gray-700">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="text-center">
          <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={`mx-auto ${className}`} />
          <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={`mx-auto mt-1 ${className}`} />
        </div>
      ))}
    </div>
  );

  const TabSection = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex space-x-4 border-b border-gray-200 px-6 dark:border-gray-700">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="pb-4">
          <Skeleton width="80px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
      ))}
    </div>
  );

  const PostItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4 p-6">
      {/* Post Header */}
      <div className="flex items-center space-x-3">
        <Skeleton width="40px" height="40px" borderRadius="9999px" className={className} />
        <div className="space-y-1">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
      </div>

      {/* Post Content */}
      <div className="space-y-2">
        <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Post Image */}
      <Skeleton width="100%" height="300px" borderRadius={borderRadius} className={className} />

      {/* Post Actions */}
      <div className="flex space-x-4">
        <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
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
          <StatsSection />
          <TabSection />
          <div className="divide-y divide-gray-200">
            <PostItem />
            <PostItem />
          </div>
        </div>

        {/* Dark Mode */}
        <div className="overflow-hidden rounded-lg bg-gray-800 shadow-lg">
          <ProfileHeader className="bg-gray-700" />
          <StatsSection className="bg-gray-700" />
          <TabSection className="bg-gray-700" />
          <div className="divide-y divide-gray-700">
            <PostItem className="bg-gray-700" />
            <PostItem className="bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample28; 