"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_45";

const SkeletonExample45 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const FeaturedArticle = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      <Skeleton width="100%" height="300px" borderRadius={borderRadius} className={className} />
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
          <div className="h-4 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <Skeleton width="120px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="90%" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100%" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="95%" height="20px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <Skeleton width="40px" height="40px" borderRadius="9999px" className={className} />
            <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const ArticleCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex space-x-4">
      <Skeleton width="120px" height="120px" borderRadius={borderRadius} className={className} />
      <div className="flex-1 space-y-2">
        <Skeleton width="80px" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90%" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Skeleton width="24px" height="24px" borderRadius="9999px" className={className} />
            <Skeleton width="80px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const TrendingItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center space-x-3">
      <Skeleton width="24px" height="24px" borderRadius="9999px" className={className} />
      <div className="flex-1 space-y-1">
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center space-x-2">
          <Skeleton width="60px" height="12px" borderRadius={borderRadius} className={className} />
          <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <Skeleton width="40px" height="12px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const VideoCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-2">
      <div className="relative">
        <Skeleton width="100%" height="180px" borderRadius={borderRadius} className={className} />
        <div className="absolute bottom-2 right-2">
          <Skeleton width="40px" height="20px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      <Skeleton width="90%" height="20px" borderRadius={borderRadius} className={className} />
      <div className="flex items-center space-x-2">
        <Skeleton width="24px" height="24px" borderRadius="9999px" className={className} />
        <Skeleton width="120px" height="14px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="flex items-center space-x-2">
        <Skeleton width="60px" height="12px" borderRadius={borderRadius} className={className} />
        <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
        <Skeleton width="80px" height="12px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const CategoryTab = ({ className = "bg-gray-200" }: { className?: string }) => (
    <Skeleton width="100px" height="36px" borderRadius={borderRadius} className={className} />
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize News & Media Skeleton</h2>
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
              <Skeleton width="150px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
              <div className="flex items-center space-x-3">
                <Skeleton width="200px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="40px" height="40px" borderRadius="9999px" className="bg-gray-200" />
              </div>
            </div>
            
            {/* Category Tabs */}
            <div className="flex space-x-4 overflow-x-auto py-2">
              {[...Array(6)].map((_, i) => (
                <CategoryTab key={i} />
              ))}
            </div>
            
            {/* Featured Article */}
            <FeaturedArticle />
            
            {/* Article Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <Skeleton width="180px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <ArticleCard key={i} />
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Trending Section */}
                <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <TrendingItem key={i} />
                    ))}
                  </div>
                </div>
                
                {/* Newsletter */}
                <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <Skeleton width="160px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="90%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                  <div className="flex space-x-2">
                    <Skeleton width="70%" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="30%" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                  <VideoCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Skeleton width="150px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
              <div className="flex items-center space-x-3">
                <Skeleton width="200px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="40px" height="40px" borderRadius="9999px" className="bg-gray-700" />
              </div>
            </div>
            
            {/* Category Tabs */}
            <div className="flex space-x-4 overflow-x-auto py-2">
              {[...Array(6)].map((_, i) => (
                <CategoryTab key={i} className="bg-gray-700" />
              ))}
            </div>
            
            {/* Featured Article */}
            <FeaturedArticle className="bg-gray-700" />
            
            {/* Article Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <Skeleton width="180px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <ArticleCard key={i} className="bg-gray-700" />
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Trending Section */}
                <div className="space-y-4 rounded-lg border border-gray-700 p-4">
                  <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <TrendingItem key={i} className="bg-gray-700" />
                    ))}
                  </div>
                </div>
                
                {/* Newsletter */}
                <div className="space-y-4 rounded-lg border border-gray-700 p-4">
                  <Skeleton width="160px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="90%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                  <div className="flex space-x-2">
                    <Skeleton width="70%" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="30%" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                  <VideoCard key={i} className="bg-gray-700" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample45; 