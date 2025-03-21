"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_48";

const TabExample48 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-indigo-800 dark:text-indigo-200">File Upload</h2>
      
      <Tabs defaultValue="upload" className="w-full">
        <TabsList activeTab="upload" setActiveTab={() => {}}>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="border-2 border-dashed border-indigo-200 dark:border-indigo-700 rounded-lg p-8">
              <div className="text-center space-y-4">
                <div className="text-4xl">📁</div>
                <div>
                  <p className="text-indigo-900 dark:text-indigo-100">Drag and drop files here</p>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">or</p>
                </div>
                <button className="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 rounded-lg">
                  Browse Files
                </button>
                <p className="text-xs text-indigo-600 dark:text-indigo-400">
                  Maximum file size: 50MB
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-indigo-600 dark:text-indigo-400">
                Selected: 0 files
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg" disabled>
                Upload Files
              </button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="progress" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/60 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-medium text-indigo-900 dark:text-indigo-100">document.pdf</h3>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">2.5MB / 5MB</p>
                </div>
                <button className="text-indigo-600 dark:text-indigo-400">✕</button>
              </div>
              <div className="h-2 bg-indigo-200 dark:bg-indigo-700 rounded-full">
                <div className="h-full w-1/2 bg-indigo-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/60 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-medium text-indigo-900 dark:text-indigo-100">image.jpg</h3>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">1.8MB / 1.8MB</p>
                </div>
                <div className="text-green-600">✓</div>
              </div>
              <div className="h-2 bg-indigo-200 dark:bg-indigo-700 rounded-full">
                <div className="h-full w-full bg-indigo-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-indigo-900 dark:text-indigo-100">Recent Uploads</h3>
              <select className="text-sm rounded-md border border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-900/60 text-indigo-900 dark:text-indigo-100">
                <option>All Files</option>
                <option>Images</option>
                <option>Documents</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-indigo-50 dark:bg-indigo-900/60 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📄</span>
                  <div>
                    <h4 className="font-medium text-indigo-900 dark:text-indigo-100">report.pdf</h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">5MB • PDF</p>
                  </div>
                </div>
                <span className="text-sm text-indigo-600 dark:text-indigo-400">2 hours ago</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-indigo-50 dark:bg-indigo-900/60 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🖼️</span>
                  <div>
                    <h4 className="font-medium text-indigo-900 dark:text-indigo-100">banner.png</h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">2.1MB • PNG</p>
                  </div>
                </div>
                <span className="text-sm text-indigo-600 dark:text-indigo-400">Yesterday</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample48; 