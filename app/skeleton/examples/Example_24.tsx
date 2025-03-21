"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_24";

const SkeletonExample24 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const JobListing = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4 rounded-lg border p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <Skeleton width="64px" height="64px" borderRadius={borderRadius} className={className} />
          <div className="space-y-2">
            <Skeleton width="200px" height="24px" borderRadius={borderRadius} className={className} />
            <Skeleton width="160px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
        <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90px" height="24px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="95%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center space-x-4">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="120px" height="36px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const FilterSection = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      <Skeleton width="120px" height="20px" borderRadius={borderRadius} className={className} />
      <div className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Job Listings Skeleton</h2>
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
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              {/* Search */}
              <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
              
              {/* Filter Sections */}
              <FilterSection />
              <FilterSection />
              <FilterSection />
            </div>

            {/* Listings */}
            <div className="space-y-6 lg:col-span-3">
              {/* Sort Bar */}
              <div className="flex items-center justify-between">
                <Skeleton width="200px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="120px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>

              {/* Job Listings */}
              <div className="space-y-4">
                <JobListing />
                <JobListing />
                <JobListing />
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              {/* Search */}
              <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
              
              {/* Filter Sections */}
              <FilterSection className="bg-gray-700" />
              <FilterSection className="bg-gray-700" />
              <FilterSection className="bg-gray-700" />
            </div>

            {/* Listings */}
            <div className="space-y-6 lg:col-span-3">
              {/* Sort Bar */}
              <div className="flex items-center justify-between">
                <Skeleton width="200px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="120px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>

              {/* Job Listings */}
              <div className="space-y-4">
                <JobListing className="bg-gray-700" />
                <JobListing className="bg-gray-700" />
                <JobListing className="bg-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample24; 