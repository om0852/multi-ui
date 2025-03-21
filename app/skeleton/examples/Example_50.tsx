"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_50";

const SkeletonExample50 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const ProjectCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="150px" height="24px" borderRadius={borderRadius} className={className} />
        <div className="flex space-x-1">
          <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      <div className="space-y-2">
        <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="100%" height="8px" borderRadius={borderRadius} className={className} />
      </div>
      
      <div className="flex items-center justify-between pt-2">
        <div className="flex -space-x-2">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} width="32px" height="32px" borderRadius="9999px" className={className} />
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="20px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
          <div className="flex items-center space-x-1">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="20px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
      </div>
    </div>
  );

  const TaskItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center space-x-3 rounded-lg border border-gray-200 p-3 dark:border-gray-700">
      <Skeleton width="20px" height="20px" borderRadius={borderRadius} className={className} />
      <div className="flex-1 space-y-2">
        <Skeleton width="80%" height="18px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center space-x-2">
          <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="100px" height="14px" borderRadius={borderRadius} className={className} />
          <span className="px-1 text-gray-300">•</span>
          <Skeleton width="80px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Skeleton width="70px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="32px" height="32px" borderRadius="9999px" className={className} />
      </div>
    </div>
  );

  const TeamMember = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center space-x-3">
      <Skeleton width="40px" height="40px" borderRadius="9999px" className={className} />
      <div className="space-y-1">
        <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="80px" height="14px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const ActivityItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex space-x-3">
      <div className="flex flex-col items-center">
        <Skeleton width="32px" height="32px" borderRadius="9999px" className={className} />
        <div className="h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="flex-1 space-y-1 pb-6">
        <div className="flex items-center space-x-2">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
        <Skeleton width="40%" height="16px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const StatCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="120px" height="28px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="48px" height="48px" borderRadius={borderRadius} className={className} />
      </div>
      <div className="mt-4">
        <Skeleton width="100%" height="40px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const ChartCard = ({ className = "bg-gray-200", height = "200px" }: { className?: string; height?: string }) => (
    <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="150px" height="24px" borderRadius={borderRadius} className={className} />
        <div className="flex space-x-2">
          <Skeleton width="80px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      <Skeleton width="100%" height={height} borderRadius={borderRadius} className={className} />
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Project Management Skeleton</h2>
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
          <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="200px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="flex items-center space-x-3">
                <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="120px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="40px" height="40px" borderRadius="9999px" className="bg-gray-200" />
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <StatCard key={i} />
              ))}
            </div>
            
            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Projects */}
              <div className="space-y-4 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                  <div className="flex items-center space-x-2">
                    <Skeleton width="100px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="36px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  {[...Array(4)].map((_, i) => (
                    <ProjectCard key={i} />
                  ))}
                </div>
                
                {/* Tasks */}
                <div className="pt-4">
                  <div className="flex items-center justify-between pb-4">
                    <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                  
                  <div className="space-y-3">
                    {[...Array(3)].map((_, i) => (
                      <TaskItem key={i} />
                    ))}
                  </div>
                </div>
                
                {/* Chart */}
                <ChartCard height="250px" />
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6 lg:col-span-1">
                {/* Team */}
                <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <Skeleton width="100px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                  
                  <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                      <TeamMember key={i} />
                    ))}
                  </div>
                  
                  <Skeleton width="100%" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
                
                {/* Activity */}
                <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                  
                  <div className="space-y-0">
                    {[...Array(3)].map((_, i) => (
                      <ActivityItem key={i} />
                    ))}
                  </div>
                </div>
                
                {/* Mini Chart */}
                <ChartCard height="150px" />
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="200px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="flex items-center space-x-3">
                <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="120px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="40px" height="40px" borderRadius="9999px" className="bg-gray-700" />
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <StatCard key={i} className="bg-gray-700" />
              ))}
            </div>
            
            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Projects */}
              <div className="space-y-4 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                  <div className="flex items-center space-x-2">
                    <Skeleton width="100px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="36px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  {[...Array(4)].map((_, i) => (
                    <ProjectCard key={i} className="bg-gray-700" />
                  ))}
                </div>
                
                {/* Tasks */}
                <div className="pt-4">
                  <div className="flex items-center justify-between pb-4">
                    <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                  
                  <div className="space-y-3">
                    {[...Array(3)].map((_, i) => (
                      <TaskItem key={i} className="bg-gray-700" />
                    ))}
                  </div>
                </div>
                
                {/* Chart */}
                <ChartCard className="bg-gray-700" height="250px" />
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6 lg:col-span-1">
                {/* Team */}
                <div className="space-y-4 rounded-lg border border-gray-700 p-4">
                  <div className="flex items-center justify-between">
                    <Skeleton width="100px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                  
                  <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                      <TeamMember key={i} className="bg-gray-700" />
                    ))}
                  </div>
                  
                  <Skeleton width="100%" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
                
                {/* Activity */}
                <div className="space-y-4 rounded-lg border border-gray-700 p-4">
                  <div className="flex items-center justify-between">
                    <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                  
                  <div className="space-y-0">
                    {[...Array(3)].map((_, i) => (
                      <ActivityItem key={i} className="bg-gray-700" />
                    ))}
                  </div>
                </div>
                
                {/* Mini Chart */}
                <ChartCard className="bg-gray-700" height="150px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample50; 