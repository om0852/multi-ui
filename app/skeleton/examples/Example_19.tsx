"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_19";

const SkeletonExample19 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const KanbanCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border p-4">
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <Skeleton width="80px" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Card Content */}
      <div className="space-y-2">
        <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex -space-x-2">
          <Skeleton width="24px" height="24px" borderRadius="9999px" className={className} />
          <Skeleton width="24px" height="24px" borderRadius="9999px" className={className} />
          <Skeleton width="24px" height="24px" borderRadius="9999px" className={className} />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton width="20px" height="20px" borderRadius={borderRadius} className={className} />
          <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const KanbanColumn = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex h-full w-80 flex-col rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
      {/* Column Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Skeleton width="100px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="24px" height="24px" borderRadius="9999px" className={className} />
        </div>
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Column Content */}
      <div className="flex-1 space-y-4">
        <KanbanCard className={className} />
        <KanbanCard className={className} />
        <KanbanCard className={className} />
      </div>

      {/* Add Card Button */}
      <div className="mt-4">
        <Skeleton width="100%" height="36px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const KanbanBoard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-6">
      {/* Board Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Skeleton width="160px" height="32px" borderRadius={borderRadius} className={className} />
          <div className="flex space-x-2">
            <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
            <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton width="200px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
      </div>

      {/* Board Content */}
      <div className="flex space-x-6 overflow-x-auto pb-4">
        <KanbanColumn className={className} />
        <KanbanColumn className={className} />
        <KanbanColumn className={className} />
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Kanban Board Skeleton</h2>
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
          <KanbanBoard />
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <KanbanBoard className="bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample19; 