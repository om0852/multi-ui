"use client";

import React, { useState } from "react";
import Skeleton from "../tsx/Skeleton_4";

const SkeletonExample4 = () => {
  const [borderRadius, setBorderRadius] = useState("4px");

  const TableRow = ({ className = "bg-gray-200" }: { className?: string }) => (
    <tr>
      <td className="py-2">
        <Skeleton width="40px" height="40px" borderRadius="4px" className={className} />
      </td>
      <td className="py-2">
        <Skeleton width="120px" height="20px" borderRadius={borderRadius} className={className} />
      </td>
      <td className="py-2">
        <Skeleton width="200px" height="20px" borderRadius={borderRadius} className={className} />
      </td>
      <td className="py-2">
        <Skeleton width="100px" height="20px" borderRadius={borderRadius} className={className} />
      </td>
      <td className="py-2">
        <Skeleton width="80px" height="20px" borderRadius={borderRadius} className={className} />
      </td>
    </tr>
  );

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Table Skeleton</h2>
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
        {/* Table - Light */}
        <div className="overflow-x-auto rounded-lg bg-white p-6 shadow-lg">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-[50px] py-2 text-left">Image</th>
                <th className="py-2 text-left">Name</th>
                <th className="py-2 text-left">Description</th>
                <th className="py-2 text-left">Category</th>
                <th className="py-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[...Array(5)].map((_, i) => (
                <TableRow key={i} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Table - Dark */}
        <div className="overflow-x-auto rounded-lg bg-gray-800 p-6 shadow-lg">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-[50px] py-2 text-left text-white">Image</th>
                <th className="py-2 text-left text-white">Name</th>
                <th className="py-2 text-left text-white">Description</th>
                <th className="py-2 text-left text-white">Category</th>
                <th className="py-2 text-left text-white">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {[...Array(5)].map((_, i) => (
                <TableRow key={i} className="bg-gray-700" />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample4; 