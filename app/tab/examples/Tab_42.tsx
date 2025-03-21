"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_42";

const TabExample42 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-sky-800 dark:text-sky-200">File Manager</h2>
      
      <Tabs defaultValue="files" className="w-full">
        <TabsList activeTab="files" setActiveTab={() => {}}>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
          <TabsTrigger value="trash">Trash</TabsTrigger>
        </TabsList>
        
        <TabsContent value="files" className="bg-white dark:bg-sky-900/40 p-4 rounded-lg shadow-sm border border-sky-200 dark:border-sky-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-md bg-sky-100 dark:bg-sky-800 text-sky-700 dark:text-sky-300">
                  ⬅️
                </button>
                <span className="text-sky-600 dark:text-sky-400">/Documents/Projects</span>
              </div>
              <button className="px-3 py-1 text-sm rounded-md bg-sky-100 dark:bg-sky-800 text-sky-700 dark:text-sky-300">
                New Folder
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-sky-50 dark:bg-sky-900/60 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📁</span>
                  <div>
                    <h3 className="font-medium text-sky-900 dark:text-sky-100">Project A</h3>
                    <p className="text-sm text-sky-600 dark:text-sky-400">5 items</p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-sky-50 dark:bg-sky-900/60 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📄</span>
                  <div>
                    <h3 className="font-medium text-sky-900 dark:text-sky-100">Report.pdf</h3>
                    <p className="text-sm text-sky-600 dark:text-sky-400">2.5 MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="shared" className="bg-white dark:bg-sky-900/40 p-4 rounded-lg shadow-sm border border-sky-200 dark:border-sky-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sky-900 dark:text-sky-100">Shared with me</h3>
              <select className="text-sm rounded-md border border-sky-200 dark:border-sky-700 bg-white dark:bg-sky-900/60 text-sky-900 dark:text-sky-100">
                <option>Recent</option>
                <option>Name</option>
                <option>Size</option>
              </select>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-sky-50 dark:bg-sky-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📄</span>
                    <div>
                      <h3 className="font-medium text-sky-900 dark:text-sky-100">Presentation.pptx</h3>
                      <p className="text-sm text-sky-600 dark:text-sky-400">Shared by John</p>
                    </div>
                  </div>
                  <button className="text-sky-600 dark:text-sky-400">⬇️</button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="trash" className="bg-white dark:bg-sky-900/40 p-4 rounded-lg shadow-sm border border-sky-200 dark:border-sky-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sky-900 dark:text-sky-100">Trash</h3>
              <button className="px-3 py-1 text-sm rounded-md bg-sky-100 dark:bg-sky-800 text-sky-700 dark:text-sky-300">
                Empty Trash
              </button>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-sky-50 dark:bg-sky-900/60 rounded-lg opacity-75">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📄</span>
                    <div>
                      <h3 className="font-medium text-sky-900 dark:text-sky-100">Old_draft.txt</h3>
                      <p className="text-sm text-sky-600 dark:text-sky-400">Deleted 2 days ago</p>
                    </div>
                  </div>
                  <button className="text-sky-600 dark:text-sky-400">↩️</button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample42; 