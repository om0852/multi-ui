"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_42";

const SkeletonExample42 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const RestaurantHeader = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      {/* Cover Image */}
      <Skeleton width="100%" height="180px" borderRadius={borderRadius} className={className} />
      
      {/* Restaurant Info */}
      <div className="space-y-2">
        <Skeleton width="70%" height="28px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center space-x-2">
          <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="160px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const CategoryTab = ({ className = "bg-gray-200" }: { className?: string }) => (
    <Skeleton width="100px" height="36px" borderRadius={borderRadius} className={className} />
  );

  const MenuItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex space-x-4">
      <Skeleton width="80px" height="80px" borderRadius={borderRadius} className={className} />
      <div className="flex-1 space-y-2">
        <Skeleton width="70%" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center justify-between">
          <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const PopularDish = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-2">
      <Skeleton width="100%" height="120px" borderRadius={borderRadius} className={className} />
      <Skeleton width="80%" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width="50%" height="16px" borderRadius={borderRadius} className={className} />
    </div>
  );

  const ReviewItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Skeleton width="40px" height="40px" borderRadius="9999px" className={className} />
        <div className="space-y-1">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <div className="flex items-center space-x-1">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
        <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={`ml-auto ${className}`} />
      </div>
      <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width="95%" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Restaurant Menu Skeleton</h2>
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
            {/* Restaurant Header */}
            <RestaurantHeader />
            
            {/* Category Tabs */}
            <div className="flex space-x-4 overflow-x-auto py-2">
              {[...Array(6)].map((_, i) => (
                <CategoryTab key={i} />
              ))}
            </div>
            
            {/* Popular Dishes */}
            <div className="space-y-4">
              <Skeleton width="180px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                  <PopularDish key={i} />
                ))}
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="space-y-6">
              {/* Section */}
              <div className="space-y-4">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <MenuItem key={i} />
                  ))}
                </div>
              </div>
              
              {/* Section */}
              <div className="space-y-4">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <MenuItem key={i} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Reviews */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="100px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <ReviewItem key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="space-y-8">
            {/* Restaurant Header */}
            <RestaurantHeader className="bg-gray-700" />
            
            {/* Category Tabs */}
            <div className="flex space-x-4 overflow-x-auto py-2">
              {[...Array(6)].map((_, i) => (
                <CategoryTab key={i} className="bg-gray-700" />
              ))}
            </div>
            
            {/* Popular Dishes */}
            <div className="space-y-4">
              <Skeleton width="180px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                  <PopularDish key={i} className="bg-gray-700" />
                ))}
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="space-y-6">
              {/* Section */}
              <div className="space-y-4">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <MenuItem key={i} className="bg-gray-700" />
                  ))}
                </div>
              </div>
              
              {/* Section */}
              <div className="space-y-4">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <MenuItem key={i} className="bg-gray-700" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Reviews */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="100px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <ReviewItem key={i} className="bg-gray-700" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample42; 