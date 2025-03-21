"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_31";

const TabExample31 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-stone-50 dark:bg-stone-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-stone-800 dark:text-stone-200">File Upload</h2>
      
      <Tabs defaultValue="upload" className="w-full">
        <TabsList activeTab="upload" setActiveTab={() => {}}>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="bg-white dark:bg-stone-900/40 p-4 rounded-lg shadow-sm border border-stone-200 dark:border-stone-800">
          <div className="space-y-4">
            <div className="border-2 border-dashed border-stone-300 dark:border-stone-700 rounded-lg p-8">
              <div className="text-center space-y-2">
                <span className="text-4xl">📁</span>
                <p className="text-stone-900 dark:text-stone-100">Drag and drop files here</p>
                <p className="text-sm text-stone-600 dark:text-stone-400">or</p>
                <button className="px-4 py-2 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-lg">Browse Files</button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-stone-50 dark:bg-stone-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-600 dark:text-stone-400">📄</span>
                    <div>
                      <p className="text-stone-900 dark:text-stone-100">document.pdf</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400">2.4 MB</p>
                    </div>
                  </div>
                  <div className="w-24">
                    <div className="h-2 bg-stone-200 dark:bg-stone-700 rounded-full">
                      <div className="w-3/4 h-full bg-stone-600 dark:bg-stone-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-600 dark:text-stone-400">🖼️</span>
                    <div>
                      <p className="text-stone-900 dark:text-stone-100">image.jpg</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400">1.8 MB</p>
                    </div>
                  </div>
                  <span className="text-sm text-green-600">Completed</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="bg-white dark:bg-stone-900/40 p-4 rounded-lg shadow-sm border border-stone-200 dark:border-stone-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-stone-900 dark:text-stone-100">Recent Uploads</h3>
              <button className="text-sm text-stone-600 dark:text-stone-400">Clear History</button>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-stone-50 dark:bg-stone-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-600 dark:text-stone-400">📄</span>
                    <div>
                      <p className="text-stone-900 dark:text-stone-100">presentation.pptx</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400">Yesterday</p>
                    </div>
                  </div>
                  <button className="text-stone-600 dark:text-stone-400">↓</button>
                </div>
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-600 dark:text-stone-400">📄</span>
                    <div>
                      <p className="text-stone-900 dark:text-stone-100">report.docx</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400">2 days ago</p>
                    </div>
                  </div>
                  <button className="text-stone-600 dark:text-stone-400">↓</button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="bg-white dark:bg-stone-900/40 p-4 rounded-lg shadow-sm border border-stone-200 dark:border-stone-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-stone-900 dark:text-stone-100">Auto Upload</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">Automatically upload new files</p>
              </div>
              <button className="px-3 py-1 text-sm rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">Enable</button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-stone-900 dark:text-stone-100">File Size Limit</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">Maximum file size: 100MB</p>
              </div>
              <button className="px-3 py-1 text-sm rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">Change</button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample31; 