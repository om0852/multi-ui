"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_33";

const SkeletonExample33 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const SearchForm = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      {/* Tabs */}
      <div className="flex space-x-2">
        <Skeleton width="80px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="80px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="80px" height="32px" borderRadius={borderRadius} className={className} />
      </div>
      
      {/* Form Fields */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-2">
          <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-2">
          <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="space-y-2">
          <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      {/* Search Button */}
      <div className="flex justify-end">
        <Skeleton width="120px" height="40px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const HotelCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 md:flex-row">
      {/* Hotel Image */}
      <div className="md:w-1/3">
        <Skeleton width="100%" height="100%" borderRadius={borderRadius} className={className} />
      </div>
      
      {/* Hotel Info */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Skeleton width="60%" height="24px" borderRadius={borderRadius} className={className} />
            <Skeleton width="80px" height="32px" borderRadius={borderRadius} className={className} />
          </div>
          
          {/* Location and Rating */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
              <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
            </div>
            <div className="flex items-center space-x-1">
              <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
              <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
            </div>
          </div>
          
          {/* Amenities */}
          <div className="flex flex-wrap gap-2">
            <Skeleton width="80px" height="24px" borderRadius={borderRadius} className={className} />
            <Skeleton width="100px" height="24px" borderRadius={borderRadius} className={className} />
            <Skeleton width="90px" height="24px" borderRadius={borderRadius} className={className} />
            <Skeleton width="70px" height="24px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
        
        {/* Price and Button */}
        <div className="mt-4 flex items-center justify-between">
          <div className="space-y-1">
            <Skeleton width="80px" height="14px" borderRadius={borderRadius} className={className} />
            <Skeleton width="120px" height="24px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="120px" height="40px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const FilterSection = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      <Skeleton width="120px" height="20px" borderRadius={borderRadius} className={className} />
      
      <div className="space-y-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <Skeleton width="20px" height="20px" borderRadius={borderRadius} className={className} />
            <Skeleton width="80%" height="16px" borderRadius={borderRadius} className={className} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Travel Booking Skeleton</h2>
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
          <SearchForm />
          
          {/* Results Section */}
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Filters */}
            <div className="space-y-6 lg:col-span-1">
              <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="mb-4 bg-gray-200" />
              
              {/* Filter Groups */}
              <FilterSection />
              <FilterSection />
              <FilterSection />
            </div>
            
            {/* Hotel Results */}
            <div className="space-y-6 lg:col-span-3">
              <div className="flex items-center justify-between">
                <Skeleton width="200px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="120px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <HotelCard key={i} />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center space-x-2 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="space-y-8 rounded-lg bg-gray-800 p-6 shadow-lg">
          {/* Search Section */}
          <SearchForm className="bg-gray-700" />
          
          {/* Results Section */}
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Filters */}
            <div className="space-y-6 lg:col-span-1">
              <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="mb-4 bg-gray-700" />
              
              {/* Filter Groups */}
              <FilterSection className="bg-gray-700" />
              <FilterSection className="bg-gray-700" />
              <FilterSection className="bg-gray-700" />
            </div>
            
            {/* Hotel Results */}
            <div className="space-y-6 lg:col-span-3">
              <div className="flex items-center justify-between">
                <Skeleton width="200px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="120px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <HotelCard key={i} className="bg-gray-700" />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center space-x-2 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample33; 