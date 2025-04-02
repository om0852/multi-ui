"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tsx/Tab_19";

const TabExample19 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-yellow-800 dark:text-yellow-200">Note Taking</h2>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList activeTab="all" setActiveTab={() => {}}>
          <TabsTrigger value="all">All Notes</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="bg-white dark:bg-yellow-900/40 p-4 rounded-lg shadow-sm border border-yellow-200 dark:border-yellow-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <input type="text" placeholder="Search notes..." className="w-full px-3 py-2 rounded-md border border-yellow-200 dark:border-yellow-700 bg-white dark:bg-yellow-900/60 text-yellow-900 dark:text-yellow-100" />
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/60 rounded-lg">
                <h3 className="font-medium text-yellow-900 dark:text-yellow-100">Meeting Notes</h3>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">Project discussion points and action items...</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-yellow-500 dark:text-yellow-400">
                  <span>2 hours ago</span>
                  <span>•</span>
                  <span>Work</span>
                </div>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/60 rounded-lg">
                <h3 className="font-medium text-yellow-900 dark:text-yellow-100">Shopping List</h3>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">Groceries and household items...</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-yellow-500 dark:text-yellow-400">
                  <span>1 day ago</span>
                  <span>•</span>
                  <span>Personal</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="favorites" className="bg-white dark:bg-yellow-900/40 p-4 rounded-lg shadow-sm border border-yellow-200 dark:border-yellow-800">
          <div className="space-y-4">
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/60 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-yellow-900 dark:text-yellow-100">Important Ideas</h3>
                <span className="text-yellow-500">⭐</span>
              </div>
              <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">Key concepts and brainstorming...</p>
              <div className="mt-2 flex items-center gap-2 text-xs text-yellow-500 dark:text-yellow-400">
                <span>3 days ago</span>
                <span>•</span>
                <span>Ideas</span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="archived" className="bg-white dark:bg-yellow-900/40 p-4 rounded-lg shadow-sm border border-yellow-200 dark:border-yellow-800">
          <div className="space-y-4">
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/60 rounded-lg">
              <h3 className="font-medium text-yellow-900 dark:text-yellow-100">Old Project Notes</h3>
              <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">Previous project documentation...</p>
              <div className="mt-2 flex items-center gap-2 text-xs text-yellow-500 dark:text-yellow-400">
                <span>2 weeks ago</span>
                <span>•</span>
                <span>Archived</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample19; 