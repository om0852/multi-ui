"use client";

import React, { useState } from "react";
import Skeleton from "../_components/Skeleton_9";

const SkeletonExample9 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const ChatMessage = ({ isUser = false, className = "bg-gray-200" }: { isUser?: boolean; className?: string }) => (
    <div className={`flex items-start space-x-3 ${isUser ? "flex-row-reverse space-x-reverse" : ""}`}>
      <Skeleton width="32px" height="32px" borderRadius="9999px" className={className} />
      <div className={`space-y-2 ${isUser ? "items-end" : "items-start"}`}>
        <Skeleton
          width="120px"
          height="16px"
          borderRadius={borderRadius}
          className={className}
        />
        <Skeleton
          width="200px"
          height="40px"
          borderRadius={borderRadius}
          className={className}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Chat Skeleton</h2>
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
      <div className="grid gap-8 md:grid-cols-2">
        {/* Chat - Light */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="space-y-6">
            <ChatMessage />
            <ChatMessage isUser />
            <ChatMessage />
            <ChatMessage isUser />
            <ChatMessage />
          </div>
        </div>

        {/* Chat - Dark */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="space-y-6">
            <ChatMessage className="bg-gray-700" />
            <ChatMessage isUser className="bg-gray-700" />
            <ChatMessage className="bg-gray-700" />
            <ChatMessage isUser className="bg-gray-700" />
            <ChatMessage className="bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample9; 