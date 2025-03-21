"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_31";

const SkeletonExample31 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const CourseCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
      {/* Course Thumbnail */}
      <Skeleton width="100%" height="160px" borderRadius={borderRadius} className={className} />
      
      {/* Course Content */}
      <div className="space-y-4 p-4">
        <div className="space-y-2">
          <Skeleton width="80%" height="20px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60%" height="16px" borderRadius={borderRadius} className={className} />
        </div>

        {/* Course Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Skeleton width="32px" height="32px" borderRadius="9999px" className={className} />
            <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="60px" height="24px" borderRadius={borderRadius} className={className} />
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <Skeleton width="100%" height="8px" borderRadius={borderRadius} className={className} />
          <div className="flex justify-between">
            <Skeleton width="100px" height="14px" borderRadius={borderRadius} className={className} />
            <Skeleton width="40px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
      </div>
    </div>
  );

  const LessonItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center space-x-3 py-3">
      <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
      <div className="flex-1 space-y-2">
        <Skeleton width="80%" height="16px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center space-x-4">
          <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
          <Skeleton width="80px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
    </div>
  );

  const VideoPlayer = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      {/* Video Container */}
      <div className="relative aspect-video w-full">
        <Skeleton width="100%" height="100%" borderRadius={borderRadius} className={className} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Skeleton width="64px" height="64px" borderRadius="9999px" className={className} />
        </div>
      </div>

      {/* Video Controls */}
      <div className="space-y-2">
        <Skeleton width="100%" height="4px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
            <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
            <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
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
          {/* Course Grid */}
          <div>
            <Skeleton width="200px" height="32px" borderRadius={borderRadius} className="mb-6 bg-gray-200" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>

          {/* Course Content */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Video Section */}
            <div className="lg:col-span-2">
              <VideoPlayer />
              <div className="mt-4 space-y-4">
                <Skeleton width="80%" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="100%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="95%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
            </div>

            {/* Lesson List */}
            <div className="rounded-lg border border-gray-200 p-4">
              <div className="mb-4 flex items-center justify-between">
                <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                <Skeleton width="80px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>
              <div className="divide-y">
                {[...Array(6)].map((_, i) => (
                  <LessonItem key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="space-y-8 rounded-lg bg-gray-800 p-6 shadow-lg">
          {/* Course Grid */}
          <div>
            <Skeleton width="200px" height="32px" borderRadius={borderRadius} className="mb-6 bg-gray-700" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <CourseCard className="bg-gray-700" />
              <CourseCard className="bg-gray-700" />
              <CourseCard className="bg-gray-700" />
            </div>
          </div>

          {/* Course Content */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Video Section */}
            <div className="lg:col-span-2">
              <VideoPlayer className="bg-gray-700" />
              <div className="mt-4 space-y-4">
                <Skeleton width="80%" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="100%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="95%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
            </div>

            {/* Lesson List */}
            <div className="rounded-lg border border-gray-700 p-4">
              <div className="mb-4 flex items-center justify-between">
                <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                <Skeleton width="80px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>
              <div className="divide-y divide-gray-700">
                {[...Array(6)].map((_, i) => (
                  <LessonItem key={i} className="bg-gray-700" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample31; 