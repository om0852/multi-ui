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
    <div className="relative group inline-block">
      <div className="bg-white py-2 rounded-md shadow-lg hover:cursor-pointer flex justify-center items-center gap-4 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 14" height={25} width={25}>
          <path fill="#FFA000" d="M16.2 1.75H8.1L6.3 0H1.8C0.81 0 0 0.7875 0 1.75V12.25C0 13.2125 0.81 14 1.8 14H15.165L18 9.1875V3.5C18 2.5375 17.19 1.75 16.2 1.75Z" />
          <path fill="#FFCA28" d="M16.2 2H1.8C0.81 2 0 2.77143 0 3.71429V12.2857C0 13.2286 0.81 14 1.8 14H16.2C17.19 14 18 13.2286 18 12.2857V3.71429C18 2.77143 17.19 2 16.2 2Z" />
        </svg>
        <p>Project Structure</p>
      </div>
      <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <ul className="p-4 space-y-1">
          <li className="py-1">📁 src</li>
          <li className="pl-4 py-1">📁 app</li>
          <li className="pl-8 py-1">📄 layout.js</li>
          <li className="pl-8 py-1">📄 page.js</li>
          <li className="pl-4 py-1">📁 components</li>
          <li className="pl-8 py-1">📄 header.js</li>
          <li className="pl-8 py-1">📄 footer.js</li>
          <li className="pl-4 py-1">📁 styles</li>
          <li className="pl-8 py-1">📄 globals.css</li>
        </ul>
      </div>
    </div>
  );
}

export default Tooltip;
