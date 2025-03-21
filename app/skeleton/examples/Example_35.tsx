"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_35";

const SkeletonExample35 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const TaskItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-start space-x-3 py-3">
      <Skeleton width="20px" height="20px" borderRadius={borderRadius} className={className} />
      <div className="flex-1 space-y-2">
        <Skeleton width="80%" height="18px" borderRadius={borderRadius} className={className} />
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton width="60px" height="20px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="20px" borderRadius={borderRadius} className={className} />
          <div className="flex-1" />
          <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="60%" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
      
      <Skeleton width="100%" height="8px" borderRadius={borderRadius} className={className} />
      
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} width="24px" height="24px" borderRadius="9999px" className={className} />
          ))}
        </div>
        <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
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

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Task Management Skeleton</h2>
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
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <Skeleton width="48px" height="48px" borderRadius="9999px" className="bg-gray-200" />
                <div className="space-y-1">
                  <Skeleton width="120px" height="18px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="80px" height="14px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>
              
              {/* Navigation */}
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Skeleton width="20px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                ))}
              </div>
              
              {/* Projects */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Skeleton width="80px" height="18px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="24px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
                
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Skeleton width="16px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="120px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                ))}
              </div>
              
              {/* Team */}
              <div className="space-y-3">
                <Skeleton width="80px" height="18px" borderRadius={borderRadius} className="bg-gray-200" />
                
                {[...Array(3)].map((_, i) => (
                  <TeamMember key={i} />
                ))}
              </div>
            </div>
            
            {/* Main Content */}
            <div className="space-y-6 lg:col-span-3">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Skeleton width="200px" height="28px" borderRadius={borderRadius} className="bg-gray-200" />
                  <div className="flex items-center space-x-2">
                    <Skeleton width="16px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="100px" height="14px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>
              
              {/* Search and Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex-1">
                  <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
                <Skeleton width="100px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="100px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              
              {/* Tasks */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton width="120px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
                
                <div className="divide-y rounded-lg border border-gray-200">
                  {[...Array(5)].map((_, i) => (
                    <TaskItem key={i} />
                  ))}
                </div>
              </div>
              
              {/* Projects */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <Skeleton width="48px" height="48px" borderRadius="9999px" className="bg-gray-700" />
                <div className="space-y-1">
                  <Skeleton width="120px" height="18px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="80px" height="14px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>
              
              {/* Navigation */}
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Skeleton width="20px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="100px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                ))}
              </div>
              
              {/* Projects */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Skeleton width="80px" height="18px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="24px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
                
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Skeleton width="16px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="120px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                ))}
              </div>
              
              {/* Team */}
              <div className="space-y-3">
                <Skeleton width="80px" height="18px" borderRadius={borderRadius} className="bg-gray-700" />
                
                {[...Array(3)].map((_, i) => (
                  <TeamMember key={i} className="bg-gray-700" />
                ))}
              </div>
            </div>
            
            {/* Main Content */}
            <div className="space-y-6 lg:col-span-3">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Skeleton width="200px" height="28px" borderRadius={borderRadius} className="bg-gray-700" />
                  <div className="flex items-center space-x-2">
                    <Skeleton width="16px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="100px" height="14px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>
              
              {/* Search and Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex-1">
                  <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
                <Skeleton width="100px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="100px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              
              {/* Tasks */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton width="120px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="80px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
                
                <div className="divide-y divide-gray-700 rounded-lg border border-gray-700">
                  {[...Array(5)].map((_, i) => (
                    <TaskItem key={i} className="bg-gray-700" />
                  ))}
                </div>
              </div>
              
              {/* Projects */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard className="bg-gray-700" />
                  <ProjectCard className="bg-gray-700" />
                  <ProjectCard className="bg-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample35; 