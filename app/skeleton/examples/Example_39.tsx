"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_39";

const SkeletonExample39 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const CourseCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
      {/* Course Image */}
      <Skeleton width="100%" height="160px" borderRadius={borderRadius} className={className} />
      
      {/* Course Content */}
      <div className="space-y-3 p-4">
        <Skeleton width="80%" height="20px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center space-x-2">
          <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="120px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
        
        {/* Instructor */}
        <div className="flex items-center space-x-2 pt-2">
          <Skeleton width="32px" height="32px" borderRadius="9999px" className={className} />
          <Skeleton width="100px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-1">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="40px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="70px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const CategoryButton = ({ className = "bg-gray-200" }: { className?: string }) => (
    <Skeleton width="100px" height="36px" borderRadius={borderRadius} className={className} />
  );

  const LessonItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-start space-x-3 py-3">
      <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      <div className="flex-1 space-y-2">
        <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="40px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const AssignmentCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="70%" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
      <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
      <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center space-x-2">
          <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="100px" height="32px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Learning Platform Skeleton</h2>
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
              <Skeleton width="200px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="40px" height="40px" borderRadius="9999px" className="bg-gray-200" />
            </div>
          </div>
          
          {/* Categories */}
          <div className="space-y-4">
            <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
            <div className="flex flex-wrap gap-2">
              {[...Array(8)].map((_, i) => (
                <CategoryButton key={i} />
              ))}
            </div>
          </div>
          
          {/* Featured Courses */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton width="180px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <CourseCard key={i} />
              ))}
            </div>
          </div>
          
          {/* Course Content */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-6 lg:col-span-2">
              {/* Video Player */}
              <div className="space-y-4">
                <Skeleton width="100%" height="400px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="space-y-2">
                  <Skeleton width="80%" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                  <div className="flex items-center space-x-2">
                    <Skeleton width="32px" height="32px" borderRadius="9999px" className="bg-gray-200" />
                    <Skeleton width="120px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                  <div className="flex space-x-2">
                    <Skeleton width="80px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="space-y-4">
                <div className="flex space-x-4 border-b border-gray-200">
                  <div className="border-b-2 border-blue-500 pb-2">
                    <Skeleton width="100px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                  <div className="pb-2">
                    <Skeleton width="100px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                  <div className="pb-2">
                    <Skeleton width="100px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                </div>
                
                {/* Description */}
                <div className="space-y-3">
                  <Skeleton width="100%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="95%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="90%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="100%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>
              
              {/* Assignments */}
              <div className="space-y-4">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="space-y-4">
                  <AssignmentCard />
                  <AssignmentCard />
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Progress */}
              <div className="space-y-3 rounded-lg border border-gray-200 p-4">
                <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="100%" height="8px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="flex justify-between">
                  <Skeleton width="100px" height="14px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="40px" height="14px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>
              
              {/* Course Content */}
              <div className="space-y-3 rounded-lg border border-gray-200 p-4">
                <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                
                {/* Modules */}
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Skeleton width="70%" height="18px" borderRadius={borderRadius} className="bg-gray-200" />
                        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                      </div>
                      
                      <div className="ml-4 space-y-1">
                        {[...Array(3)].map((_, j) => (
                          <LessonItem key={j} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
              <Skeleton width="200px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="40px" height="40px" borderRadius="9999px" className="bg-gray-700" />
            </div>
          </div>
          
          {/* Categories */}
          <div className="space-y-4">
            <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
            <div className="flex flex-wrap gap-2">
              {[...Array(8)].map((_, i) => (
                <CategoryButton key={i} className="bg-gray-700" />
              ))}
            </div>
          </div>
          
          {/* Featured Courses */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton width="180px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
              <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <CourseCard key={i} className="bg-gray-700" />
              ))}
            </div>
          </div>
          
          {/* Course Content */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-6 lg:col-span-2">
              {/* Video Player */}
              <div className="space-y-4">
                <Skeleton width="100%" height="400px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="space-y-2">
                  <Skeleton width="80%" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                  <div className="flex items-center space-x-2">
                    <Skeleton width="32px" height="32px" borderRadius="9999px" className="bg-gray-700" />
                    <Skeleton width="120px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                  <div className="flex space-x-2">
                    <Skeleton width="80px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="32px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="space-y-4">
                <div className="flex space-x-4 border-b border-gray-700">
                  <div className="border-b-2 border-blue-500 pb-2">
                    <Skeleton width="100px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                  <div className="pb-2">
                    <Skeleton width="100px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                  <div className="pb-2">
                    <Skeleton width="100px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                </div>
                
                {/* Description */}
                <div className="space-y-3">
                  <Skeleton width="100%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="95%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="90%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="100%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>
              
              {/* Assignments */}
              <div className="space-y-4">
                <Skeleton width="150px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="space-y-4">
                  <AssignmentCard className="bg-gray-700" />
                  <AssignmentCard className="bg-gray-700" />
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Progress */}
              <div className="space-y-3 rounded-lg border border-gray-700 p-4">
                <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="100%" height="8px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="flex justify-between">
                  <Skeleton width="100px" height="14px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="40px" height="14px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>
              
              {/* Course Content */}
              <div className="space-y-3 rounded-lg border border-gray-700 p-4">
                <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                
                {/* Modules */}
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Skeleton width="70%" height="18px" borderRadius={borderRadius} className="bg-gray-700" />
                        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                      </div>
                      
                      <div className="ml-4 space-y-1">
                        {[...Array(3)].map((_, j) => (
                          <LessonItem key={j} className="bg-gray-700" />
                        ))}
                      </div>
                    </div>
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

export default SkeletonExample39; 