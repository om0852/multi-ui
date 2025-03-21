"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_23";

const TabExample23 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-cyan-800 dark:text-cyan-200">Code Editor</h2>
      
      <Tabs defaultValue="files" className="w-full">
        <TabsList activeTab="files" setActiveTab={() => {}}>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="terminal">Terminal</TabsTrigger>
          <TabsTrigger value="output">Output</TabsTrigger>
        </TabsList>
        
        <TabsContent value="files" className="bg-white dark:bg-cyan-900/40 p-4 rounded-lg shadow-sm border border-cyan-200 dark:border-cyan-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <input type="text" placeholder="Search files..." className="w-full px-3 py-2 rounded-md border border-cyan-200 dark:border-cyan-700 bg-white dark:bg-cyan-900/60 text-cyan-900 dark:text-cyan-100" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 hover:bg-cyan-50 dark:hover:bg-cyan-900/60 rounded-md">
                <span className="text-cyan-600 dark:text-cyan-400">📄</span>
                <span className="text-cyan-900 dark:text-cyan-100">index.tsx</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-cyan-50 dark:hover:bg-cyan-900/60 rounded-md">
                <span className="text-cyan-600 dark:text-cyan-400">📄</span>
                <span className="text-cyan-900 dark:text-cyan-100">styles.css</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-cyan-50 dark:hover:bg-cyan-900/60 rounded-md">
                <span className="text-cyan-600 dark:text-cyan-400">📁</span>
                <span className="text-cyan-900 dark:text-cyan-100">components/</span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="terminal" className="bg-white dark:bg-cyan-900/40 p-4 rounded-lg shadow-sm border border-cyan-200 dark:border-cyan-800">
          <div className="space-y-4">
            <div className="bg-cyan-900/90 text-cyan-100 p-4 rounded-lg font-mono text-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-cyan-400">$</span>
                <span>npm start</span>
              </div>
              <div className="text-cyan-300">Starting development server...</div>
              <div className="text-cyan-300">Compiled successfully!</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-600 dark:text-cyan-400">$</span>
              <input type="text" className="flex-1 px-2 py-1 rounded-md border border-cyan-200 dark:border-cyan-700 bg-white dark:bg-cyan-900/60 text-cyan-900 dark:text-cyan-100" placeholder="Enter command..." />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="output" className="bg-white dark:bg-cyan-900/40 p-4 rounded-lg shadow-sm border border-cyan-200 dark:border-cyan-800">
          <div className="space-y-4">
            <div className="bg-cyan-900/90 text-cyan-100 p-4 rounded-lg font-mono text-sm">
              <div className="text-cyan-300">Server running on http://localhost:3000</div>
              <div className="text-cyan-300">Webpack compiled successfully</div>
              <div className="text-cyan-300">No errors found</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-sm rounded-md bg-cyan-100 dark:bg-cyan-800 text-cyan-700 dark:text-cyan-300">Clear Output</button>
              <button className="px-3 py-1 text-sm rounded-md bg-cyan-100 dark:bg-cyan-800 text-cyan-700 dark:text-cyan-300">Save Log</button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample23; 