"use client";

import React from "react";
import Sidebar from "../tsx/Sidebar_12";

const SidebarExample12 = () => {
  return (
    <div className="flex min-h-[600px] w-full">
      <Sidebar className="border-r border-gray-200 dark:border-gray-700" />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          This is the main content area of your application.
        </p>
      </div>
    </div>
  );
};

export default SidebarExample12; 