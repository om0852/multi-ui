"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_18";

const SkeletonExample18 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const SettingItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center justify-between py-4">
      <div className="space-y-2">
        <Skeleton width="160px" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="240px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      <Skeleton width="48px" height="24px" borderRadius={borderRadius} className={className} />
    </div>
  );

  const SettingsSection = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton width="120px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="280px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="divide-y">
        <SettingItem className={className} />
        <SettingItem className={className} />
        <SettingItem className={className} />
      </div>
    </div>
  );

  const SettingsPanel = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Skeleton width="160px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Search */}
      <div className="relative">
        <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
        <div className="absolute right-3 top-2">
          <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex space-x-4">
        <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Settings Sections */}
      <div className="space-y-8">
        <SettingsSection className={className} />
        <SettingsSection className={className} />
      </div>

      {/* Footer */}
      <div className="flex justify-end space-x-4 pt-4">
        <Skeleton width="100px" height="36px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100px" height="36px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Settings Panel Skeleton</h2>
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
          <SettingsPanel />
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <SettingsPanel className="bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample18; 