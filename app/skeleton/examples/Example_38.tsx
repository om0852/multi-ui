"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_38";

const SkeletonExample38 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const StatCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="120px" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
      <Skeleton width="70%" height="32px" borderRadius={borderRadius} className={className} />
      <div className="flex items-center space-x-2">
        <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const LineChart = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="150px" height="20px" borderRadius={borderRadius} className={className} />
        <div className="flex space-x-2">
          <Skeleton width="80px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      <Skeleton width="100%" height="250px" borderRadius={borderRadius} className={className} />
      
      <div className="flex justify-between">
        <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const BarChart = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="180px" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
      </div>
      
      <div className="flex h-[200px] items-end justify-between space-x-2">
        {[...Array(12)].map((_, i) => (
          <Skeleton 
            key={i} 
            width="100%" 
            height={`${Math.floor(Math.random() * 80) + 20}%`} 
            borderRadius={borderRadius} 
            className={className} 
          />
        ))}
      </div>
      
      <div className="flex justify-between">
        <Skeleton width="30px" height="14px" borderRadius={borderRadius} className={className} />
        <Skeleton width="30px" height="14px" borderRadius={borderRadius} className={className} />
        <Skeleton width="30px" height="14px" borderRadius={borderRadius} className={className} />
        <Skeleton width="30px" height="14px" borderRadius={borderRadius} className={className} />
        <Skeleton width="30px" height="14px" borderRadius={borderRadius} className={className} />
        <Skeleton width="30px" height="14px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const TableRow = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center py-3">
      <div className="w-1/4">
        <Skeleton width="80%" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="w-1/4">
        <Skeleton width="60%" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="w-1/4">
        <Skeleton width="40%" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="w-1/4 flex justify-end">
        <Skeleton width="70px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const PieChart = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <Skeleton width="150px" height="20px" borderRadius={borderRadius} className={className} />
      
      <div className="flex justify-center py-4">
        <Skeleton width="180px" height="180px" borderRadius="9999px" className={className} />
      </div>
      
      <div className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Analytics Dashboard Skeleton</h2>
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
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <Skeleton width="200px" height="28px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="300px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton width="120px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="36px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
          </div>
          
          {/* Date Range Selector */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex space-x-2">
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton width="140px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
          </div>
          
          {/* Charts */}
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <LineChart />
            </div>
            <div>
              <PieChart />
            </div>
          </div>
          
          <BarChart />
          
          {/* Table */}
          <div className="space-y-4 rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <Skeleton width="180px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="200px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
            
            {/* Table Header */}
            <div className="flex items-center border-b border-gray-200 py-2 font-medium">
              <div className="w-1/4">
                <Skeleton width="60%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="w-1/4">
                <Skeleton width="40%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="w-1/4">
                <Skeleton width="50%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="w-1/4 flex justify-end">
                <Skeleton width="30%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
            </div>
            
            {/* Table Rows */}
            <div className="divide-y">
              {[...Array(5)].map((_, i) => (
                <TableRow key={i} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-between pt-4">
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                ))}
              </div>
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="space-y-8 rounded-lg bg-gray-800 p-6 shadow-lg">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <Skeleton width="200px" height="28px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="300px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton width="120px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="36px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
          </div>
          
          {/* Date Range Selector */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex space-x-2">
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton width="140px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard className="bg-gray-700" />
            <StatCard className="bg-gray-700" />
            <StatCard className="bg-gray-700" />
            <StatCard className="bg-gray-700" />
          </div>
          
          {/* Charts */}
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <LineChart className="bg-gray-700" />
            </div>
            <div>
              <PieChart className="bg-gray-700" />
            </div>
          </div>
          
          <BarChart className="bg-gray-700" />
          
          {/* Table */}
          <div className="space-y-4 rounded-lg border border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <Skeleton width="180px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="200px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
            
            {/* Table Header */}
            <div className="flex items-center border-b border-gray-700 py-2 font-medium">
              <div className="w-1/4">
                <Skeleton width="60%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="w-1/4">
                <Skeleton width="40%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="w-1/4">
                <Skeleton width="50%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="w-1/4 flex justify-end">
                <Skeleton width="30%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
            </div>
            
            {/* Table Rows */}
            <div className="divide-y divide-gray-700">
              {[...Array(5)].map((_, i) => (
                <TableRow key={i} className="bg-gray-700" />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-between pt-4">
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                ))}
              </div>
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample38; 