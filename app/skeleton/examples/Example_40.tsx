"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_40";

const SkeletonExample40 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const FileItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3 dark:border-gray-700">
      <div className="flex items-center space-x-3">
        <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        <div className="space-y-1">
          <Skeleton width="160px" height="16px" borderRadius={borderRadius} className={className} />
          <div className="flex items-center space-x-2">
            <Skeleton width="60px" height="12px" borderRadius={borderRadius} className={className} />
            <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <Skeleton width="40px" height="12px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const FolderItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3 dark:border-gray-700">
      <div className="flex items-center space-x-3">
        <Skeleton width="40px" height="40px" borderRadius={borderRadius} className={className} />
        <div className="space-y-1">
          <Skeleton width="140px" height="16px" borderRadius={borderRadius} className={className} />
          <div className="flex items-center space-x-2">
            <Skeleton width="80px" height="12px" borderRadius={borderRadius} className={className} />
            <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <Skeleton width="50px" height="12px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const SidebarItem = ({ className = "bg-gray-200", width = "80%" }: { className?: string; width?: string }) => (
    <div className="flex items-center space-x-3 py-2">
      <Skeleton width="20px" height="20px" borderRadius={borderRadius} className={className} />
      <Skeleton width={width} height="16px" borderRadius={borderRadius} className={className} />
    </div>
  );

  const FilePreview = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Skeleton width="48px" height="48px" borderRadius={borderRadius} className={className} />
          <div className="space-y-1">
            <Skeleton width="200px" height="20px" borderRadius={borderRadius} className={className} />
            <Skeleton width="120px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
        <div className="flex space-x-2">
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      <div className="space-y-2">
        <Skeleton width="100%" height="300px" borderRadius={borderRadius} className={className} />
        <div className="flex justify-between">
          <Skeleton width="120px" height="14px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      <div className="space-y-2">
        <Skeleton width="120px" height="18px" borderRadius={borderRadius} className={className} />
        <div className="space-y-1">
          <Skeleton width="100%" height="14px" borderRadius={borderRadius} className={className} />
          <Skeleton width="90%" height="14px" borderRadius={borderRadius} className={className} />
          <Skeleton width="95%" height="14px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const ActivityItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-start space-x-3 py-3">
      <Skeleton width="32px" height="32px" borderRadius="9999px" className={className} />
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="200px" height="14px" borderRadius={borderRadius} className={className} />
        <Skeleton width="120px" height="12px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize File Management Skeleton</h2>
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
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-3">
              {/* Logo and Search */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
                <div className="relative">
                  <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>
              
              {/* Navigation */}
              <div className="space-y-4">
                <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="space-y-1">
                  <SidebarItem width="70%" />
                  <SidebarItem width="60%" />
                  <SidebarItem width="80%" />
                  <SidebarItem width="65%" />
                </div>
              </div>
              
              {/* Favorites */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="20px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
                <div className="space-y-1">
                  <SidebarItem width="75%" />
                  <SidebarItem width="65%" />
                  <SidebarItem width="70%" />
                </div>
              </div>
              
              {/* Storage */}
              <div className="space-y-3">
                <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="100%" height="8px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="flex justify-between">
                  <Skeleton width="100px" height="14px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
                <Skeleton width="120px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
            </div>
            
            {/* Main Content */}
            <div className="space-y-6 lg:col-span-9">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <Skeleton width="200px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                  <div className="flex items-center space-x-2">
                    <Skeleton width="16px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="100px" height="14px" borderRadius={borderRadius} className="bg-gray-200" />
                    <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                    <Skeleton width="80px" height="14px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Skeleton width="100px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="36px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="36px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>
              
              {/* Tabs */}
              <div className="flex space-x-4 border-b border-gray-200">
                <div className="border-b-2 border-blue-500 pb-2">
                  <Skeleton width="80px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
                <div className="pb-2">
                  <Skeleton width="80px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
                <div className="pb-2">
                  <Skeleton width="80px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>
              
              {/* Content Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                  <FolderItem key={i} />
                ))}
                {[...Array(6)].map((_, i) => (
                  <FileItem key={i} />
                ))}
              </div>
              
              {/* File Preview */}
              <FilePreview />
              
              {/* Recent Activity */}
              <div className="space-y-4">
                <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="space-y-2 divide-y divide-gray-100">
                  {[...Array(3)].map((_, i) => (
                    <ActivityItem key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-3">
              {/* Logo and Search */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
                <div className="relative">
                  <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>
              
              {/* Navigation */}
              <div className="space-y-4">
                <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="space-y-1">
                  <SidebarItem className="bg-gray-700" width="70%" />
                  <SidebarItem className="bg-gray-700" width="60%" />
                  <SidebarItem className="bg-gray-700" width="80%" />
                  <SidebarItem className="bg-gray-700" width="65%" />
                </div>
              </div>
              
              {/* Favorites */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="20px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
                <div className="space-y-1">
                  <SidebarItem className="bg-gray-700" width="75%" />
                  <SidebarItem className="bg-gray-700" width="65%" />
                  <SidebarItem className="bg-gray-700" width="70%" />
                </div>
              </div>
              
              {/* Storage */}
              <div className="space-y-3">
                <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="100%" height="8px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="flex justify-between">
                  <Skeleton width="100px" height="14px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
                <Skeleton width="120px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
            </div>
            
            {/* Main Content */}
            <div className="space-y-6 lg:col-span-9">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <Skeleton width="200px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                  <div className="flex items-center space-x-2">
                    <Skeleton width="16px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="100px" height="14px" borderRadius={borderRadius} className="bg-gray-700" />
                    <div className="h-1 w-1 rounded-full bg-gray-600"></div>
                    <Skeleton width="80px" height="14px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Skeleton width="100px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="36px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="36px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>
              
              {/* Tabs */}
              <div className="flex space-x-4 border-b border-gray-700">
                <div className="border-b-2 border-blue-500 pb-2">
                  <Skeleton width="80px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
                <div className="pb-2">
                  <Skeleton width="80px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
                <div className="pb-2">
                  <Skeleton width="80px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>
              
              {/* Content Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                  <FolderItem key={i} className="bg-gray-700" />
                ))}
                {[...Array(6)].map((_, i) => (
                  <FileItem key={i} className="bg-gray-700" />
                ))}
              </div>
              
              {/* File Preview */}
              <FilePreview className="bg-gray-700" />
              
              {/* Recent Activity */}
              <div className="space-y-4">
                <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="space-y-2 divide-y divide-gray-700">
                  {[...Array(3)].map((_, i) => (
                    <ActivityItem key={i} className="bg-gray-700" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample40; 