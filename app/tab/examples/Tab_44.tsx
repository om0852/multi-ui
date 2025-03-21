"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_44";

const TabExample44 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-rose-800 dark:text-rose-200">Document Editor</h2>
      
      <Tabs defaultValue="edit" className="w-full">
        <TabsList activeTab="edit" setActiveTab={() => {}}>
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="edit" className="bg-white dark:bg-rose-900/40 p-4 rounded-lg shadow-sm border border-rose-200 dark:border-rose-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <select className="px-2 py-1 text-sm rounded-md border border-rose-200 dark:border-rose-700 bg-white dark:bg-rose-900/60 text-rose-900 dark:text-rose-100">
                <option>Paragraph</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
              </select>
              <div className="flex items-center gap-1 border-l border-rose-200 dark:border-rose-700 pl-2">
                <button className="p-1 rounded hover:bg-rose-100 dark:hover:bg-rose-800">
                  <span className="font-bold">B</span>
                </button>
                <button className="p-1 rounded hover:bg-rose-100 dark:hover:bg-rose-800">
                  <span className="italic">I</span>
                </button>
                <button className="p-1 rounded hover:bg-rose-100 dark:hover:bg-rose-800">
                  <span className="underline">U</span>
                </button>
              </div>
              <div className="flex items-center gap-1 border-l border-rose-200 dark:border-rose-700 pl-2">
                <button className="p-1 rounded hover:bg-rose-100 dark:hover:bg-rose-800">
                  🔗
                </button>
                <button className="p-1 rounded hover:bg-rose-100 dark:hover:bg-rose-800">
                  📷
                </button>
              </div>
            </div>
            <div className="min-h-[300px] p-4 rounded-lg border border-rose-200 dark:border-rose-700 bg-white dark:bg-rose-900/60">
              <div className="prose prose-rose dark:prose-invert">
                <h1 className="text-2xl font-bold text-rose-900 dark:text-rose-100">Document Title</h1>
                <p className="text-rose-700 dark:text-rose-300">Start typing your content here...</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-rose-600 dark:text-rose-400">
              <span>Words: 4</span>
              <span>Last saved: 2 minutes ago</span>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="preview" className="bg-white dark:bg-rose-900/40 p-4 rounded-lg shadow-sm border border-rose-200 dark:border-rose-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-rose-900 dark:text-rose-100">Preview Mode</h3>
              <button className="px-3 py-1 text-sm rounded-md bg-rose-100 dark:bg-rose-800 text-rose-700 dark:text-rose-300">
                Export PDF
              </button>
            </div>
            <div className="prose prose-rose dark:prose-invert max-w-none">
              <h1 className="text-2xl font-bold text-rose-900 dark:text-rose-100">Document Title</h1>
              <p className="text-rose-700 dark:text-rose-300">Your content will appear here exactly as it will look when published.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="bg-white dark:bg-rose-900/40 p-4 rounded-lg shadow-sm border border-rose-200 dark:border-rose-800">
          <div className="space-y-4">
            <h3 className="font-medium text-rose-900 dark:text-rose-100">Version History</h3>
            <div className="space-y-2">
              <div className="p-3 bg-rose-50 dark:bg-rose-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-rose-900 dark:text-rose-100">Current Version</p>
                    <p className="text-sm text-rose-600 dark:text-rose-400">2 minutes ago • John Doe</p>
                  </div>
                  <button className="text-rose-600 dark:text-rose-400">↩️</button>
                </div>
              </div>
              <div className="p-3 bg-rose-50 dark:bg-rose-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-rose-900 dark:text-rose-100">Initial Draft</p>
                    <p className="text-sm text-rose-600 dark:text-rose-400">1 hour ago • John Doe</p>
                  </div>
                  <button className="text-rose-600 dark:text-rose-400">↩️</button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample44; 