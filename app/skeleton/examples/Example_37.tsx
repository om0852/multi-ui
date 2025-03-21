"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_37";

const SkeletonExample37 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const PropertyCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
      {/* Property Image */}
      <div className="relative">
        <Skeleton width="100%" height="200px" borderRadius={borderRadius} className={className} />
        <div className="absolute left-2 top-2">
          <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      {/* Property Content */}
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <Skeleton width="60%" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="30%" height="24px" borderRadius={borderRadius} className={className} />
        </div>
        
        <Skeleton width="80%" height="16px" borderRadius={borderRadius} className={className} />
        
        {/* Features */}
        <div className="flex justify-between">
          <div className="flex items-center space-x-1">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="30px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
          <div className="flex items-center space-x-1">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="30px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
          <div className="flex items-center space-x-1">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="30px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
        
        {/* Agent */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <Skeleton width="32px" height="32px" borderRadius="9999px" className={className} />
            <Skeleton width="80px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="60px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const FilterItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center space-x-2">
      <Skeleton width="20px" height="20px" borderRadius={borderRadius} className={className} />
      <Skeleton width="80%" height="16px" borderRadius={borderRadius} className={className} />
    </div>
  );

  const PropertyDetail = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-6">
      {/* Image Gallery */}
      <div className="grid gap-2 grid-cols-4">
        <div className="col-span-4 md:col-span-2">
          <Skeleton width="100%" height="300px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Skeleton width="100%" height="145px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Skeleton width="100%" height="145px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="hidden md:block md:col-span-1">
          <Skeleton width="100%" height="145px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="hidden md:block md:col-span-1">
          <Skeleton width="100%" height="145px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      {/* Property Info */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <Skeleton width="300px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="200px" height="20px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="150px" height="40px" borderRadius={borderRadius} className={className} />
      </div>
      
      {/* Features */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="space-y-1">
          <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-1">
          <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-1">
          <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-1">
          <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      {/* Description */}
      <div className="space-y-2">
        <Skeleton width="150px" height="24px" borderRadius={borderRadius} className={className} />
        <div className="space-y-2">
          <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="95%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Real Estate Skeleton</h2>
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
          {/* Search Section */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex-1">
                <Skeleton width="100%" height="48px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <Skeleton width="100px" height="48px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="120px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="80px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="140px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
          </div>
          
          {/* Property Listings */}
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Filters */}
            <div className="space-y-6 lg:col-span-1">
              <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
              
              {/* Price Range */}
              <div className="space-y-3">
                <Skeleton width="100px" height="18px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="space-y-2">
                  <Skeleton width="100%" height="8px" borderRadius={borderRadius} className="bg-gray-200" />
                  <div className="flex items-center justify-between">
                    <Skeleton width="60px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="60px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                </div>
              </div>
              
              {/* Property Type */}
              <div className="space-y-3">
                <Skeleton width="120px" height="18px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <FilterItem key={i} />
                  ))}
                </div>
              </div>
              
              {/* Bedrooms */}
              <div className="space-y-3">
                <Skeleton width="100px" height="18px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                  ))}
                </div>
              </div>
              
              {/* More Filters */}
              <div className="space-y-3">
                <Skeleton width="120px" height="18px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <FilterItem key={i} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Properties Grid */}
            <div className="space-y-6 lg:col-span-3">
              <div className="flex items-center justify-between">
                <Skeleton width="200px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="120px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <PropertyCard key={i} />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center space-x-2 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Property Detail */}
          <div className="pt-8 border-t border-gray-200">
            <Skeleton width="200px" height="24px" borderRadius={borderRadius} className="mb-6 bg-gray-200" />
            <PropertyDetail />
          </div>
        </div>

        {/* Dark Mode */}
        <div className="space-y-8 rounded-lg bg-gray-800 p-6 shadow-lg">
          {/* Search Section */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex-1">
                <Skeleton width="100%" height="48px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <Skeleton width="100px" height="48px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="120px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="80px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="140px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
          </div>
          
          {/* Property Listings */}
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Filters */}
            <div className="space-y-6 lg:col-span-1">
              <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
              
              {/* Price Range */}
              <div className="space-y-3">
                <Skeleton width="100px" height="18px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="space-y-2">
                  <Skeleton width="100%" height="8px" borderRadius={borderRadius} className="bg-gray-700" />
                  <div className="flex items-center justify-between">
                    <Skeleton width="60px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="60px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                </div>
              </div>
              
              {/* Property Type */}
              <div className="space-y-3">
                <Skeleton width="120px" height="18px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <FilterItem key={i} className="bg-gray-700" />
                  ))}
                </div>
              </div>
              
              {/* Bedrooms */}
              <div className="space-y-3">
                <Skeleton width="100px" height="18px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                  ))}
                </div>
              </div>
              
              {/* More Filters */}
              <div className="space-y-3">
                <Skeleton width="120px" height="18px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <FilterItem key={i} className="bg-gray-700" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Properties Grid */}
            <div className="space-y-6 lg:col-span-3">
              <div className="flex items-center justify-between">
                <Skeleton width="200px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="120px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <PropertyCard key={i} className="bg-gray-700" />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center space-x-2 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Property Detail */}
          <div className="pt-8 border-t border-gray-700">
            <Skeleton width="200px" height="24px" borderRadius={borderRadius} className="mb-6 bg-gray-700" />
            <PropertyDetail className="bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample37; 