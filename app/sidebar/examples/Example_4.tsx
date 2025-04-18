"use client";

import React from "react";
import Sidebar from "../_components/Sidebar_4";

const SidebarExample4 = () => {
  return (
    <div className="flex min-h-[600px] w-full">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-4 text-gray-600">This is the main content area of your application.</p>
      </div>
    </div>
  );
};

export default SidebarExample4; 