"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_30";

const SkeletonExample30 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const TaskCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
      {/* Task Header */}
      <div className="flex items-center justify-between">
        <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Task Description */}
      <div className="space-y-2">
        <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Task Meta */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex -space-x-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} width="24px" height="24px" borderRadius="9999px" className={className} />
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const Column = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex h-full flex-col rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
      {/* Column Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Skeleton width="100px" height="20px" borderRadius={borderRadius} className={className} />
          <Skeleton width="24px" height="24px" borderRadius="9999px" className={className} />
        </div>
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Tasks */}
      <div className="space-y-3">
        {[...Array(4)].map((_, i) => (
          <TaskCard key={i} className={className} />
        ))}
      </div>

      {/* Add Task Button */}
      <div className="mt-4">
        <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const ProjectHeader = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      {/* Project Title and Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Skeleton width="200px" height="32px" borderRadius={borderRadius} className={className} />
          <div className="flex space-x-2">
            <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
            <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton width="120px" height="32px" borderRadius={borderRadius} className={className} />
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} width="32px" height="32px" borderRadius="9999px" className={className} />
            ))}
          </div>
        </div>
      </div>

      {/* Project Navigation */}
      <div className="flex space-x-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} width="100px" height="32px" borderRadius={borderRadius} className={className} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Project Board Skeleton</h2>
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
        <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg">
          <ProjectHeader />
          <div className="grid h-[600px] gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Column />
            <Column />
            <Column />
            <Column />
          </div>
        </div>

        {/* Dark Mode */}
        <div className="space-y-6 rounded-lg bg-gray-800 p-6 shadow-lg">
          <ProjectHeader className="bg-gray-700" />
          <div className="grid h-[600px] gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Column className="bg-gray-700" />
            <Column className="bg-gray-700" />
            <Column className="bg-gray-700" />
            <Column className="bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample30; 