"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_27";

const SkeletonExample27 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const ChatContact = ({ className = "bg-gray-200" }: { className?: string }) => (
    <div className="flex items-center space-x-3 p-3">
      <Skeleton width="48px" height="48px" borderRadius="9999px" className={className} />
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <Skeleton width="120px" height="16px" borderRadius={borderRadius} className={className} />
          <Skeleton width="40px" height="14px" borderRadius={borderRadius} className={className} />
        </div>
        <Skeleton width="200px" height="14px" borderRadius={borderRadius} className={className} />
      </div>
    </div>
  );

  const Message = ({ sent = false, className = "bg-gray-200" }: { sent?: boolean; className?: string }) => (
    <div className={`flex ${sent ? "justify-end" : "justify-start"}`}>
      <div className={`flex max-w-[70%] ${sent ? "flex-row-reverse" : "flex-row"} items-end space-x-2`}>
        {!sent && <Skeleton width="32px" height="32px" borderRadius="9999px" className={className} />}
        <div className={`space-y-1 ${sent ? "mr-2" : "ml-2"}`}>
          <Skeleton
            width={Math.floor(Math.random() * 100 + 100) + "px"}
            height="32px"
            borderRadius={borderRadius}
            className={className}
          />
          <Skeleton width="40px" height="12px" borderRadius={borderRadius} className={className} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Messaging Skeleton</h2>
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
      <div className="space-y-8">
        {/* Light Mode */}
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="grid h-[600px] grid-cols-12">
            {/* Sidebar */}
            <div className="col-span-4 border-r border-gray-200">
              {/* Search */}
              <div className="border-b border-gray-200 p-3">
                <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
              </div>

              {/* Contacts */}
              <div className="h-[calc(600px-64px)] overflow-y-auto">
                {[...Array(8)].map((_, i) => (
                  <ChatContact key={i} />
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-8 flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-gray-200 p-4">
                <div className="flex items-center space-x-3">
                  <Skeleton width="48px" height="48px" borderRadius="9999px" className="bg-gray-200" />
                  <div className="space-y-2">
                    <Skeleton width="120px" height="16px" borderRadius={borderRadius} className="bg-gray-200" />
                    <Skeleton width="80px" height="14px" borderRadius={borderRadius} className="bg-gray-200" />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 space-y-4 overflow-y-auto p-4">
                <Message />
                <Message sent />
                <Message />
                <Message sent />
                <Message />
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex items-center space-x-2">
                  <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                  <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="overflow-hidden rounded-lg bg-gray-800 shadow-lg">
          <div className="grid h-[600px] grid-cols-12">
            {/* Sidebar */}
            <div className="col-span-4 border-r border-gray-700">
              {/* Search */}
              <div className="border-b border-gray-700 p-3">
                <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
              </div>

              {/* Contacts */}
              <div className="h-[calc(600px-64px)] overflow-y-auto">
                {[...Array(8)].map((_, i) => (
                  <ChatContact key={i} className="bg-gray-700" />
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-8 flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-gray-700 p-4">
                <div className="flex items-center space-x-3">
                  <Skeleton width="48px" height="48px" borderRadius="9999px" className="bg-gray-700" />
                  <div className="space-y-2">
                    <Skeleton width="120px" height="16px" borderRadius={borderRadius} className="bg-gray-700" />
                    <Skeleton width="80px" height="14px" borderRadius={borderRadius} className="bg-gray-700" />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 space-y-4 overflow-y-auto p-4">
                <Message className="bg-gray-700" />
                <Message sent className="bg-gray-700" />
                <Message className="bg-gray-700" />
                <Message sent className="bg-gray-700" />
                <Message className="bg-gray-700" />
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-700 p-4">
                <div className="flex items-center space-x-2">
                  <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="100%" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                  <Skeleton width="40px" height="40px" borderRadius={borderRadius} className="bg-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample27; 