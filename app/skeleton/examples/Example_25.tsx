"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_25";

const SkeletonExample25 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const NavItem = ({ nested = false, className = "bg-gray-200" }: { nested?: boolean; className?: string }) => (
    <div className={`flex items-center space-x-2 ${nested ? "ml-4" : ""}`}>
      <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width={nested ? "120px" : "140px"} height="16px" borderRadius={borderRadius} className={className} />
    </div>
  );

  const ContentSection = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="space-y-2">
        <Skeleton width="240px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="180px" height="16px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="95%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Code Block */}
      <div className="space-y-2 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
        <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="95%" height="16px" borderRadius={borderRadius} className={className} />
      </div>

      {/* List */}
      <div className="space-y-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <Skeleton width="8px" height="8px" borderRadius="9999px" className={className} />
            <Skeleton width="85%" height="16px" borderRadius={borderRadius} className={className} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Documentation Skeleton</h2>
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
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Sidebar Navigation */}
            <div className="space-y-6 lg:col-span-1">
              {/* Search */}
              <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-200" />

              {/* Navigation Items */}
              <div className="space-y-4">
                <NavItem />
                <div className="space-y-2">
                  <NavItem />
                  <NavItem nested />
                  <NavItem nested />
                  <NavItem nested />
                </div>
                <NavItem />
                <NavItem />
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8 lg:col-span-3">
              {/* Breadcrumb */}
              <div className="flex items-center space-x-2">
                <Skeleton width="60px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="16px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>

              {/* Content */}
              <div className="space-y-12">
                <ContentSection />
                <ContentSection />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              {/* On This Page */}
              <Skeleton width="120px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} width="140px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Sidebar Navigation */}
            <div className="space-y-6 lg:col-span-1">
              {/* Search */}
              <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-700" />

              {/* Navigation Items */}
              <div className="space-y-4">
                <NavItem className="bg-gray-700" />
                <div className="space-y-2">
                  <NavItem className="bg-gray-700" />
                  <NavItem nested className="bg-gray-700" />
                  <NavItem nested className="bg-gray-700" />
                  <NavItem nested className="bg-gray-700" />
                </div>
                <NavItem className="bg-gray-700" />
                <NavItem className="bg-gray-700" />
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8 lg:col-span-3">
              {/* Breadcrumb */}
              <div className="flex items-center space-x-2">
                <Skeleton width="60px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="16px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>

              {/* Content */}
              <div className="space-y-12">
                <ContentSection className="bg-gray-700" />
                <ContentSection className="bg-gray-700" />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              {/* On This Page */}
              <Skeleton width="120px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} width="140px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample25; 