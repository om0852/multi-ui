"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_1";

const SkeletonExample1 = () => {
  const [width, setWidth] = useState("200px");
  const [height, setHeight] = useState("100px");
  const [borderRadius, setBorderRadius] = useState("4px");

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Skeleton</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="block text-sm font-medium">Width</label>
            <select
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            >
              <option value="100px">Small (100px)</option>
              <option value="200px">Medium (200px)</option>
              <option value="300px">Large (300px)</option>
              <option value="100%">Full Width</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Height</label>
            <select
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            >
              <option value="50px">Small (50px)</option>
              <option value="100px">Medium (100px)</option>
              <option value="150px">Large (150px)</option>
            </select>
          </div>
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
              <option value="9999px">Full</option>
            </select>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-8">
        {/* Light Background */}
        <div className="rounded-lg bg-white p-6">
          <h3 className="mb-4 text-lg font-medium">Light Background</h3>
          <Skeleton
            width={width}
            height={height}
            borderRadius={borderRadius}
            className="bg-gray-200"
          />
        </div>

        {/* Dark Background */}
        <div className="rounded-lg bg-gray-800 p-6">
          <h3 className="mb-4 text-lg font-medium text-white">Dark Background</h3>
          <Skeleton
            width={width}
            height={height}
            borderRadius={borderRadius}
            className="bg-gray-700"
          />
        </div>

        {/* Gradient Background */}
        <div className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-6">
          <h3 className="mb-4 text-lg font-medium text-white">Gradient Background</h3>
          <Skeleton
            width={width}
            height={height}
            borderRadius={borderRadius}
            className="bg-white bg-opacity-20"
          />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample1; 