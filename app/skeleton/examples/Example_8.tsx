"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_8";

const SkeletonExample8 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const BlogPost = ({ className = "bg-gray-200" }: { className?: string }) => (
    <article className="space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton width="80%" height="32px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center space-x-4">
          <Skeleton width="40px" height="40px" borderRadius="9999px" className={className} />
          <Skeleton width="120px" height="20px" borderRadius={borderRadius} className={className} />
        </div>
      </div>

      {/* Featured Image */}
      <Skeleton width="100%" height="300px" borderRadius={borderRadius} className={className} />

      {/* Content */}
      <div className="space-y-3">
        <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="95%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="85%" height="16px" borderRadius={borderRadius} className={className} />
      </div>

      {/* Tags */}
      <div className="flex space-x-2">
        <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="70px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
    </article>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Blog Post Skeleton</h2>
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
        {/* Blog Post - Light */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <BlogPost />
        </div>

        {/* Blog Post - Dark */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <BlogPost className="bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample8; 