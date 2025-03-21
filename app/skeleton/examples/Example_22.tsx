"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_22";

const SkeletonExample22 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const TestimonialCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4 rounded-lg p-6 shadow-md">
      {/* Quote Icon */}
      <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />

      {/* Content */}
      <div className="space-y-3">
        <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="95%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Author */}
      <div className="flex items-center space-x-4 pt-4">
        <Skeleton width="48px" height="48px" borderRadius="9999px" className={className} />
        <div className="space-y-2">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="160px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
      </div>

      {/* Rating */}
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} width="16px" height="16px" borderRadius={borderRadius} className={className} />
        ))}
      </div>
    </div>
  );

  const TestimonialFeature = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      {/* Stats */}
      <div className="flex items-baseline space-x-2">
        <Skeleton width="60px" height="40px" borderRadius={borderRadius} className={className} />
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
      {/* Label */}
      <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Testimonials Skeleton</h2>
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
        <div className="space-y-8 rounded-lg bg-white p-6 shadow-lg">
          {/* Features */}
          <div className="grid gap-8 md:grid-cols-4">
            <TestimonialFeature />
            <TestimonialFeature />
            <TestimonialFeature />
            <TestimonialFeature />
          </div>

          {/* Testimonials */}
          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>

        {/* Dark Mode */}
        <div className="space-y-8 rounded-lg bg-gray-800 p-6 shadow-lg">
          {/* Features */}
          <div className="grid gap-8 md:grid-cols-4">
            <TestimonialFeature className="bg-gray-700" />
            <TestimonialFeature className="bg-gray-700" />
            <TestimonialFeature className="bg-gray-700" />
            <TestimonialFeature className="bg-gray-700" />
          </div>

          {/* Testimonials */}
          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard className="bg-gray-700" />
            <TestimonialCard className="bg-gray-700" />
            <TestimonialCard className="bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample22; 