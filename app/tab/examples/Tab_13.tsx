"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tsx/Tab_13";

const TabExample13 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-sky-50 dark:bg-sky-900/20 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-sky-800 dark:text-sky-200">File Manager</h2>
      
      <Tabs defaultValue="recent" className="w-full">
        <TabsList activeTab="recent" setActiveTab={() => {}}>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
          <TabsTrigger value="trash">Trash</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recent" className="bg-white dark:bg-sky-900/40 p-6 rounded-lg shadow-sm border border-sky-200 dark:border-sky-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-sky-900 dark:text-sky-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
              Recent Files
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sky-50 dark:bg-sky-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-sky-900 dark:text-sky-100">Project Report</h4>
                <p className="text-sm text-sky-700 dark:text-sky-300">PDF document</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-sky-600 dark:text-sky-400">
                  <span>2.4 MB</span>
                  <span>2 hours ago</span>
                </div>
              </div>
              <div className="bg-sky-50 dark:bg-sky-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-sky-900 dark:text-sky-100">Presentation</h4>
                <p className="text-sm text-sky-700 dark:text-sky-300">PowerPoint</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-sky-600 dark:text-sky-400">
                  <span>5.8 MB</span>
                  <span>4 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="favorites" className="bg-white dark:bg-sky-900/40 p-6 rounded-lg shadow-sm border border-sky-200 dark:border-sky-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-sky-900 dark:text-sky-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              Favorite Files
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sky-50 dark:bg-sky-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-sky-900 dark:text-sky-100">Budget Template</h4>
                <p className="text-sm text-sky-700 dark:text-sky-300">Excel spreadsheet</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-sky-600 dark:text-sky-400">
                  <span>1.2 MB</span>
                  <span>Last week</span>
                </div>
              </div>
              <div className="bg-sky-50 dark:bg-sky-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-sky-900 dark:text-sky-100">Design Assets</h4>
                <p className="text-sm text-sky-700 dark:text-sky-300">ZIP archive</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-sky-600 dark:text-sky-400">
                  <span>15.6 MB</span>
                  <span>Last month</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="shared" className="bg-white dark:bg-sky-900/40 p-6 rounded-lg shadow-sm border border-sky-200 dark:border-sky-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-sky-900 dark:text-sky-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
              Shared Files
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sky-50 dark:bg-sky-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-sky-900 dark:text-sky-100">Team Meeting Notes</h4>
                <p className="text-sm text-sky-700 dark:text-sky-300">Shared with team</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-sky-600 dark:text-sky-400">
                  <span>8 members</span>
                  <span>Can edit</span>
                </div>
              </div>
              <div className="bg-sky-50 dark:bg-sky-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-sky-900 dark:text-sky-100">Project Timeline</h4>
                <p className="text-sm text-sky-700 dark:text-sky-300">Shared with client</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-sky-600 dark:text-sky-400">
                  <span>3 members</span>
                  <span>View only</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="trash" className="bg-white dark:bg-sky-900/40 p-6 rounded-lg shadow-sm border border-sky-200 dark:border-sky-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-sky-900 dark:text-sky-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              Trash
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sky-50 dark:bg-sky-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-sky-900 dark:text-sky-100">Old Backup</h4>
                <p className="text-sm text-sky-700 dark:text-sky-300">30 days old</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-sky-600 dark:text-sky-400">
                  <span>Auto-delete</span>
                  <span>In 7 days</span>
                </div>
              </div>
              <div className="bg-sky-50 dark:bg-sky-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-sky-900 dark:text-sky-100">Temporary Files</h4>
                <p className="text-sm text-sky-700 dark:text-sky-300">Multiple files</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-sky-600 dark:text-sky-400">
                  <span>Auto-delete</span>
                  <span>In 3 days</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample13; 