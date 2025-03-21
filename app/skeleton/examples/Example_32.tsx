"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_32";

const SkeletonExample32 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const RecipeCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
      {/* Recipe Image */}
      <Skeleton width="100%" height="180px" borderRadius={borderRadius} className={className} />
      
      {/* Recipe Content */}
      <div className="space-y-3 p-4">
        <Skeleton width="80%" height="24px" borderRadius={borderRadius} className={className} />
        
        {/* Meta Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="40px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
          <div className="flex items-center space-x-1">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
        
        {/* Description */}
        <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
        
        {/* Author */}
        <div className="flex items-center space-x-2 pt-2">
          <Skeleton width="32px" height="32px" borderRadius="9999px" className={className} />
          <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const IngredientItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center space-x-3 py-2">
      <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      <div className="flex-1">
        <Skeleton width="80%" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
    </div>
  );

  const StepItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 py-4">
      <div className="flex items-center space-x-3">
        <Skeleton width="32px" height="32px" borderRadius="9999px" className={className} />
        <Skeleton width="70%" height="20px" borderRadius={borderRadius} className={className} />
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
        <h2 className="text-lg font-semibold">Customize Recipe App Skeleton</h2>
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
        <div className="space-y-8 rounded-lg bg-white p-6 shadow-lg">
          {/* Featured Recipes */}
          <div>
            <Skeleton width="200px" height="32px" borderRadius={borderRadius} className="mb-6 bg-gray-200" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
            </div>
          </div>

          {/* Recipe Detail */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero Image */}
              <Skeleton width="100%" height="300px" borderRadius={borderRadius} className="bg-gray-200" />
              
              {/* Title and Meta */}
              <div className="space-y-4">
                <Skeleton width="80%" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="flex flex-wrap gap-3">
                  <Skeleton width="80px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="100px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="90px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>
              
              {/* Description */}
              <div className="space-y-2">
                <Skeleton width="100%" height="18px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="95%" height="18px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="90%" height="18px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              
              {/* Steps */}
              <div className="space-y-4">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="divide-y">
                  {[...Array(3)].map((_, i) => (
                    <StepItem key={i} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Nutrition Facts */}
              <div className="rounded-lg border border-gray-200 p-4">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="mb-4 bg-gray-200" />
                <div className="grid grid-cols-2 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="space-y-1">
                      <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="bg-gray-200" />
                      <Skeleton width="40px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Ingredients */}
              <div className="rounded-lg border border-gray-200 p-4">
                <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="mb-4 bg-gray-200" />
                <div className="divide-y">
                  {[...Array(8)].map((_, i) => (
                    <IngredientItem key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="space-y-8 rounded-lg bg-gray-800 p-6 shadow-lg">
          {/* Featured Recipes */}
          <div>
            <Skeleton width="200px" height="32px" borderRadius={borderRadius} className="mb-6 bg-gray-700" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <RecipeCard className="bg-gray-700" />
              <RecipeCard className="bg-gray-700" />
              <RecipeCard className="bg-gray-700" />
            </div>
          </div>

          {/* Recipe Detail */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero Image */}
              <Skeleton width="100%" height="300px" borderRadius={borderRadius} className="bg-gray-700" />
              
              {/* Title and Meta */}
              <div className="space-y-4">
                <Skeleton width="80%" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="flex flex-wrap gap-3">
                  <Skeleton width="80px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="100px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="90px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>
              
              {/* Description */}
              <div className="space-y-2">
                <Skeleton width="100%" height="18px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="95%" height="18px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="90%" height="18px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              
              {/* Steps */}
              <div className="space-y-4">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="divide-y divide-gray-700">
                  {[...Array(3)].map((_, i) => (
                    <StepItem key={i} className="bg-gray-700" />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Nutrition Facts */}
              <div className="rounded-lg border border-gray-700 p-4">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="mb-4 bg-gray-700" />
                <div className="grid grid-cols-2 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="space-y-1">
                      <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="bg-gray-700" />
                      <Skeleton width="40px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Ingredients */}
              <div className="rounded-lg border border-gray-700 p-4">
                <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="mb-4 bg-gray-700" />
                <div className="divide-y divide-gray-700">
                  {[...Array(8)].map((_, i) => (
                    <IngredientItem key={i} className="bg-gray-700" />
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

export default SkeletonExample32; 