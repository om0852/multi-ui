"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_49";

const SkeletonExample49 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const ProfileHeader = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-6">
      {/* Cover Photo */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <Skeleton width="100%" height="100%" borderRadius="0" className={className} />
      </div>
      
      {/* Profile Info */}
      <div className="flex flex-col items-center space-y-4 px-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        {/* Profile Picture */}
        <div className="relative -mt-16 h-32 w-32 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 sm:-mt-20 sm:h-40 sm:w-40">
          <Skeleton width="100%" height="100%" borderRadius="9999px" className={className} />
        </div>
        
        <div className="flex flex-1 flex-col items-center space-y-2 text-center sm:items-start sm:text-left">
          <Skeleton width="200px" height="32px" borderRadius={borderRadius} className={className} />
          <Skeleton width="150px" height="20px" borderRadius={borderRadius} className={className} />
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
              <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
            </div>
            <div className="flex items-center space-x-1">
              <Skeleton width="16px" height="16px" borderRadius={borderRadius} className={className} />
              <Skeleton width="100px" height="16px" borderRadius={borderRadius} className={className} />
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Skeleton width="120px" height="40px" borderRadius={borderRadius} className={className} />
          <Skeleton width="40px" height="40px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      {/* Profile Navigation */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <div className="flex space-x-4 overflow-x-auto px-4 pb-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} width="80px" height="36px" borderRadius={borderRadius} className={className} />
          ))}
        </div>
      </div>
    </div>
  );

  const AboutSection = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <Skeleton width="120px" height="24px" borderRadius={borderRadius} className={className} />
      
      <div className="space-y-3">
        <div className="space-y-1">
          <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="95%" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        
        <div className="space-y-2 pt-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <Skeleton width="20px" height="20px" borderRadius={borderRadius} className={className} />
              <Skeleton width={`${Math.floor(Math.random() * 30) + 60}%`} height="16px" borderRadius={borderRadius} className={className} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PhotosSection = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="120px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <Skeleton key={i} width="100%" height="100px" borderRadius={borderRadius} className={className} />
        ))}
      </div>
    </div>
  );

  const FriendsSection = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <Skeleton width="120px" height="24px" borderRadius={borderRadius} className={className} />
        <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
      </div>
      
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton width="100%" height="80px" borderRadius={borderRadius} className={className} />
            <Skeleton width="80%" height="16px" borderRadius={borderRadius} className={className} />
          </div>
        ))}
      </div>
    </div>
  );

  const PostItem = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      {/* Post Header */}
      <div className="flex items-center space-x-3">
        <Skeleton width="48px" height="48px" borderRadius="9999px" className={className} />
        <div className="space-y-1 flex-1">
          <Skeleton width="150px" height="18px" borderRadius={borderRadius} className={className} />
          <Skeleton width="120px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="24px" height="24px" borderRadius={borderRadius} className={className} />
      </div>
      
      {/* Post Content */}
      <div className="space-y-3">
        <div className="space-y-1">
          <Skeleton width="100%" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="90%" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        
        <Skeleton width="100%" height="300px" borderRadius={borderRadius} className={className} />
      </div>
      
      {/* Post Stats */}
      <div className="flex items-center justify-between border-b border-t border-gray-200 py-2 dark:border-gray-700">
        <div className="flex items-center space-x-1">
          <Skeleton width="20px" height="20px" borderRadius={borderRadius} className={className} />
          <Skeleton width="40px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton width="80px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
      
      {/* Post Actions */}
      <div className="flex justify-between">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center space-x-1">
            <Skeleton width="20px" height="20px" borderRadius={borderRadius} className={className} />
            <Skeleton width="60px" height="16px" borderRadius={borderRadius} className={className} />
          </div>
        ))}
      </div>
      
      {/* Comments */}
      <div className="space-y-3 pt-2">
        <div className="flex items-start space-x-2">
          <Skeleton width="36px" height="36px" borderRadius="9999px" className={className} />
          <div className="flex-1 space-y-1 rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
            <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
            <Skeleton width="90%" height="14px" borderRadius={borderRadius} className={className} />
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Skeleton width="36px" height="36px" borderRadius="9999px" className={className} />
          <Skeleton width="100%" height="36px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Social Media Profile Skeleton</h2>
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
        <div className="rounded-lg bg-white shadow-lg">
          <div className="space-y-6">
            {/* Profile Header */}
            <ProfileHeader />
            
            {/* Main Content */}
            <div className="grid gap-6 p-4 md:grid-cols-3">
              {/* Left Sidebar */}
              <div className="space-y-6 md:col-span-1">
                <AboutSection />
                <PhotosSection />
                <FriendsSection />
              </div>
              
              {/* Posts */}
              <div className="space-y-6 md:col-span-2">
                {/* Create Post */}
                <div className="flex space-x-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <Skeleton width="48px" height="48px" borderRadius="9999px" className="bg-gray-200" />
                  <Skeleton width="100%" height="48px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
                
                {/* Posts */}
                {[...Array(2)].map((_, i) => (
                  <PostItem key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="rounded-lg bg-gray-800 shadow-lg">
          <div className="space-y-6">
            {/* Profile Header */}
            <ProfileHeader className="bg-gray-700" />
            
            {/* Main Content */}
            <div className="grid gap-6 p-4 md:grid-cols-3">
              {/* Left Sidebar */}
              <div className="space-y-6 md:col-span-1">
                <AboutSection className="bg-gray-700" />
                <PhotosSection className="bg-gray-700" />
                <FriendsSection className="bg-gray-700" />
              </div>
              
              {/* Posts */}
              <div className="space-y-6 md:col-span-2">
                {/* Create Post */}
                <div className="flex space-x-2 rounded-lg border border-gray-700 p-4">
                  <Skeleton width="48px" height="48px" borderRadius="9999px" className="bg-gray-700" />
                  <Skeleton width="100%" height="48px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
                
                {/* Posts */}
                {[...Array(2)].map((_, i) => (
                  <PostItem key={i} className="bg-gray-700" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample49; 