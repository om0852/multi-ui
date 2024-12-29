"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type TooltipProps = {}; // You can add props here if needed in the future

const Tooltip: React.FC<TooltipProps> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;
  return (
    <button className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Hover For Tooltip</span>
      <div className="hidden group-hover:block">
        <div className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-white bg-purple-800">
          <div className="rounded-sm bg-black py-1 px-2">
            <p className="whitespace-nowrap">This is a fancy tooltip.</p>
          </div>
          <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black" />
        </div>
      </div>
    </button>
  );
}

export default Tooltip;
