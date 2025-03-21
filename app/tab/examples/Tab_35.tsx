"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_35";

const TabExample35 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-sky-800 dark:text-sky-200">File Explorer</h2>
      
      <Tabs defaultValue="files" className="w-full">
        <TabsList activeTab="files" setActiveTab={() => {}}>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        
        <TabsContent value="files" className="bg-white dark:bg-sky-900/40 p-4 rounded-lg shadow-sm border border-sky-200 dark:border-sky-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="p-1 rounded-md bg-sky-100 dark:bg-sky-800 text-sky-600 dark:text-sky-300">←</button>
                <span className="text-sky-600 dark:text-sky-400">/Documents/Projects</span>
              </div>
              <button className="p-1 rounded-md bg-sky-100 dark:bg-sky-800 text-sky-600 dark:text-sky-300">⊕</button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 hover:bg-sky-50 dark:hover:bg-sky-900/60 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-sky-600 dark:text-sky-400">📁</span>
                  <span className="text-sky-900 dark:text-sky-100">Project A</span>
                </div>
                <span className="text-sm text-sky-600 dark:text-sky-400">12 items</span>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-sky-50 dark:hover:bg-sky-900/60 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-sky-600 dark:text-sky-400">📄</span>
                  <span className="text-sky-900 dark:text-sky-100">report.pdf</span>
                </div>
                <span className="text-sm text-sky-600 dark:text-sky-400">2.4 MB</span>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-sky-50 dark:hover:bg-sky-900/60 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-sky-600 dark:text-sky-400">📄</span>
                  <span className="text-sky-900 dark:text-sky-100">presentation.pptx</span>
                </div>
                <span className="text-sm text-sky-600 dark:text-sky-400">5.1 MB</span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="recent" className="bg-white dark:bg-sky-900/40 p-4 rounded-lg shadow-sm border border-sky-200 dark:border-sky-800">
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 hover:bg-sky-50 dark:hover:bg-sky-900/60 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-sky-600 dark:text-sky-400">📄</span>
                <div>
                  <span className="text-sky-900 dark:text-sky-100">budget.xlsx</span>
                  <p className="text-xs text-sky-600 dark:text-sky-400">Modified 2 hours ago</p>
                </div>
              </div>
              <button className="text-sky-600 dark:text-sky-400">⋮</button>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-sky-50 dark:hover:bg-sky-900/60 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-sky-600 dark:text-sky-400">📄</span>
                <div>
                  <span className="text-sky-900 dark:text-sky-100">notes.txt</span>
                  <p className="text-xs text-sky-600 dark:text-sky-400">Modified yesterday</p>
                </div>
              </div>
              <button className="text-sky-600 dark:text-sky-400">⋮</button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="shared" className="bg-white dark:bg-sky-900/40 p-4 rounded-lg shadow-sm border border-sky-200 dark:border-sky-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sky-900 dark:text-sky-100">Shared with me</h3>
              <button className="text-sm text-sky-600 dark:text-sky-400">Sort by ↓</button>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-sky-50 dark:bg-sky-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sky-600 dark:text-sky-400">📄</span>
                    <div>
                      <span className="text-sky-900 dark:text-sky-100">team_doc.docx</span>
                      <p className="text-xs text-sky-600 dark:text-sky-400">Shared by John D.</p>
                    </div>
                  </div>
                  <span className="text-xs text-sky-600 dark:text-sky-400">Read only</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample35; 