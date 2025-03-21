"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_36";

const SkeletonExample36 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const PodcastCard = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex space-x-4">
      <Skeleton width="80px" height="80px" borderRadius={borderRadius} className={className} />
      <div className="flex-1 space-y-2">
        <Skeleton width="70%" height="20px" borderRadius={borderRadius} className={className} />
        <Skeleton width="50%" height="16px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center space-x-2">
          <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const EpisodeItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-start space-x-3 py-3">
      <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      <div className="flex-1 space-y-2">
        <Skeleton width="90%" height="18px" borderRadius={borderRadius} className={className} />
        <Skeleton width="60%" height="14px" borderRadius={borderRadius} className={className} />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="40px" height="14px" borderRadius={borderRadius} className={className} />
          </div>
          <Skeleton width="80px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  const PlayerControls = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4">
      {/* Progress Bar */}
      <div className="space-y-2">
        <Skeleton width="100%" height="4px" borderRadius={borderRadius} className={className} />
        <div className="flex justify-between">
          <Skeleton width="40px" height="14px" borderRadius={borderRadius} className={className} />
          <Skeleton width="40px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex items-center justify-center space-x-6">
        <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="48px" height="48px" borderRadius={borderRadius} className={className} />
        <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
        <Skeleton width="32px" height="32px" borderRadius={borderRadius} className={className} />
      </div>
      
      {/* Additional Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
          <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Podcast Player Skeleton</h2>
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
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              {/* Search */}
              <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
              
              {/* Categories */}
              <div className="space-y-3">
                <Skeleton width="120px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="flex flex-wrap gap-2">
                  {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} width="80px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                  ))}
                </div>
              </div>
              
              {/* Subscriptions */}
              <div className="space-y-3">
                <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <PodcastCard key={i} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="space-y-6 lg:col-span-2">
              {/* Featured Podcast */}
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                  <Skeleton width="180px" height="180px" borderRadius={borderRadius} className="bg-gray-200" />
                  <div className="flex-1 space-y-3">
                    <Skeleton width="80%" height="28px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="60%" height="20px" borderRadius={borderRadius} className="bg-gray-200" />
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Skeleton width="16px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                        <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="bg-gray-200" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Skeleton width="16px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                        <Skeleton width="80px" height="14px" borderRadius={borderRadius} className="bg-gray-200" />
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Skeleton width="100px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
                      <Skeleton width="36px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
                      <Skeleton width="36px" height="36px" borderRadius={borderRadius} className="bg-gray-200" />
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="space-y-2">
                  <Skeleton width="100%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="95%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="90%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>
              
              {/* Episodes */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
                
                <div className="divide-y rounded-lg border border-gray-200">
                  {[...Array(5)].map((_, i) => (
                    <EpisodeItem key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Player Bar */}
          <div className="mt-8 border-t border-gray-200 pt-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center space-x-3">
                <Skeleton width="60px" height="60px" borderRadius={borderRadius} className="bg-gray-200" />
                <div className="space-y-1">
                  <Skeleton width="100%" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="80%" height="14px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <PlayerControls />
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              {/* Search */}
              <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
              
              {/* Categories */}
              <div className="space-y-3">
                <Skeleton width="120px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="flex flex-wrap gap-2">
                  {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} width="80px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                  ))}
                </div>
              </div>
              
              {/* Subscriptions */}
              <div className="space-y-3">
                <Skeleton width="150px" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <PodcastCard key={i} className="bg-gray-700" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="space-y-6 lg:col-span-2">
              {/* Featured Podcast */}
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                  <Skeleton width="180px" height="180px" borderRadius={borderRadius} className="bg-gray-700" />
                  <div className="flex-1 space-y-3">
                    <Skeleton width="80%" height="28px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="60%" height="20px" borderRadius={borderRadius} className="bg-gray-700" />
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Skeleton width="16px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                        <Skeleton width="60px" height="14px" borderRadius={borderRadius} className="bg-gray-700" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Skeleton width="16px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                        <Skeleton width="80px" height="14px" borderRadius={borderRadius} className="bg-gray-700" />
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Skeleton width="100px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
                      <Skeleton width="36px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
                      <Skeleton width="36px" height="36px" borderRadius={borderRadius} className="bg-gray-700" />
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="space-y-2">
                  <Skeleton width="100%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="95%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="90%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>
              
              {/* Episodes */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton width="120px" height="24px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="100px" height="32px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
                
                <div className="divide-y divide-gray-700 rounded-lg border border-gray-700">
                  {[...Array(5)].map((_, i) => (
                    <EpisodeItem key={i} className="bg-gray-700" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Player Bar */}
          <div className="mt-8 border-t border-gray-700 pt-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center space-x-3">
                <Skeleton width="60px" height="60px" borderRadius={borderRadius} className="bg-gray-700" />
                <div className="space-y-1">
                  <Skeleton width="100%" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="80%" height="14px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <PlayerControls className="bg-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample36; 