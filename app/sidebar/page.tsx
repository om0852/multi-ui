"use client";

import React from 'react';
import Sidebar from './_components/Sidebar_12';

const SidebarPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center py-6">Sidebar Examples</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Example 1: Default Sidebar */}
        <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
          <Sidebar />
          <div className="absolute inset-0 left-[240px] bg-white p-6">
            <h2 className="text-xl font-semibold mb-4">Main Content Area</h2>
            <p className="text-gray-600">
              This is an example of how the sidebar would look in a real application.
              The sidebar can be collapsed to save space, and it includes animations
              for a smooth user experience.
            </p>
          </div>
        </div>

        {/* Example 2: Custom Styled Sidebar */}
        <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
          <Sidebar className="bg-gradient-to-b from-blue-900 to-blue-800" />
          <div className="absolute inset-0 left-[240px] bg-gray-50 p-6">
            <h2 className="text-xl font-semibold mb-4">Custom Styled Example</h2>
            <p className="text-gray-600">
              The sidebar component accepts a className prop for custom styling.
              This example shows a different gradient background.
            </p>
          </div>
        </div>

        {/* Example 3: Dark Theme */}
        <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
          <Sidebar className="bg-gradient-to-b from-gray-950 to-gray-900" />
          <div className="absolute inset-0 left-[240px] bg-gray-900 p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Dark Theme Example</h2>
            <p className="text-gray-400">
              The sidebar can be themed to match your application's color scheme.
              This example shows a dark theme variation.
            </p>
          </div>
        </div>

        {/* Example 4: Professional Theme */}
        <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
          <Sidebar className="bg-gradient-to-b from-indigo-700 to-purple-800" />
          <div className="absolute inset-0 left-[240px] bg-gray-50 p-6">
            <h2 className="text-xl font-semibold mb-4">Professional Theme</h2>
            <p className="text-gray-600">
              A professional theme variation with a rich gradient background.
              Perfect for enterprise applications.
            </p>
          </div>
        </div>
      </div>

      {/* Code Example Section */}
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-xl font-semibold mb-4">Usage Example</h2>
        <div className="bg-gray-900 rounded-lg p-6 text-gray-300">
          <pre className="font-mono text-sm">
            {`import Sidebar from './_components/Sidebar_11';

// Basic usage
<Sidebar />

// With custom className
<Sidebar className="bg-gradient-to-b from-blue-900 to-blue-800" />

// In a layout
<div className="relative min-h-screen">
  <Sidebar />
  <main className="ml-[240px] p-6">
    Your content here
  </main>
</div>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default SidebarPage;

