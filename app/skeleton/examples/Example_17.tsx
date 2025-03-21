"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_17";

const SkeletonExample17 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const FileItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center space-x-4 py-2">
      <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      <div className="flex-1">
        <Skeleton width="60%" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
    </div>
  );

  const FolderItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-2">
      <div className="flex items-center space-x-4 py-2">
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
        <div className="flex-1">
          <Skeleton width="40%" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="ml-8 space-y-2 border-l pl-4">
        <FileItem className={className} />
        <FileItem className={className} />
        <FileItem className={className} />
      </div>
    </div>
  );

  const FileExplorer = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="200px" height="32px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center space-x-2">
        <Skeleton width="60px" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="80px" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100px" height="20px" borderRadius={borderRadius} className={className} />
      </div>

      {/* File List */}
      <div className="space-y-4">
        <FolderItem className={className} />
        <FileItem className={className} />
        <FolderItem className={className} />
        <FileItem className={className} />
        <FileItem className={className} />
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize File Explorer Skeleton</h2>
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
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <FileExplorer />
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <FileExplorer className="bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample17; 