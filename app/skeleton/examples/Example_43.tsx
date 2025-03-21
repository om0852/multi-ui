"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_43";

const SkeletonExample43 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const JobCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <Skeleton width="200px" height="20px" borderRadius={borderRadius} className={className} />
          <Skeleton width="150px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const ApplicationCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center space-x-3">
        <Skeleton width="48px" height="48px" borderRadius="9999px" className={className} />
        <div className="space-y-1">
          <Skeleton width="160px" height="18px" borderRadius={borderRadius} className={className} />
          <Skeleton width="120px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="80px" height="28px" borderRadius={borderRadius} className={`ml-auto ${className}`} />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="100%" height="8px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="flex justify-between">
        <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const StageColumn = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Skeleton width="20px" height="20px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100px" height="18px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <ApplicationCard key={i} className={className} />
        ))}
      </div>
    </div>
  );

  const StatCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width="80px" height="28px" borderRadius={borderRadius} className={className} />
      <div className="flex items-center space-x-2">
        <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Job Application Tracking Skeleton</h2>
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
      <div className="grid gap-8">
        {/* Light Mode */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <Skeleton width="250px" height="28px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="180px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="flex items-center space-x-3">
                <Skeleton width="120px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="120px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <StatCard />
              <StatCard />
              <StatCard />
              <StatCard />
            </div>
            
            {/* Job Search */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Skeleton width="180px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="flex items-center space-x-3">
                  <Skeleton width="200px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="100px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                  <JobCard key={i} />
                ))}
              </div>
            </div>
            
            {/* Application Tracking */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="220px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="flex items-center space-x-2">
                  <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-4">
                <StageColumn />
                <StageColumn />
                <StageColumn />
                <StageColumn />
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <Skeleton width="250px" height="28px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="180px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="flex items-center space-x-3">
                <Skeleton width="120px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="120px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <StatCard className="bg-gray-700" />
              <StatCard className="bg-gray-700" />
              <StatCard className="bg-gray-700" />
              <StatCard className="bg-gray-700" />
            </div>
            
            {/* Job Search */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Skeleton width="180px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="flex items-center space-x-3">
                  <Skeleton width="200px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="100px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                  <JobCard key={i} className="bg-gray-700" />
                ))}
              </div>
            </div>
            
            {/* Application Tracking */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="220px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="flex items-center space-x-2">
                  <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-4">
                <StageColumn className="bg-gray-700" />
                <StageColumn className="bg-gray-700" />
                <StageColumn className="bg-gray-700" />
                <StageColumn className="bg-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample43; 