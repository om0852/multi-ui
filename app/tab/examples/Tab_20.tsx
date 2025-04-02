"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tsx/Tab_20";

const TabExample20 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-red-800 dark:text-red-200">Contact Manager</h2>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList activeTab="all" setActiveTab={() => {}}>
          <TabsTrigger value="all">All Contacts</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="groups">Groups</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="bg-white dark:bg-red-900/40 p-4 rounded-lg shadow-sm border border-red-200 dark:border-red-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <input type="text" placeholder="Search contacts..." className="w-full px-3 py-2 rounded-md border border-red-200 dark:border-red-700 bg-white dark:bg-red-900/60 text-red-900 dark:text-red-100" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/60 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-800 flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-300">JD</span>
                </div>
                <div>
                  <h3 className="font-medium text-red-900 dark:text-red-100">John Doe</h3>
                  <p className="text-sm text-red-600 dark:text-red-400">john@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/60 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-800 flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-300">AS</span>
                </div>
                <div>
                  <h3 className="font-medium text-red-900 dark:text-red-100">Alice Smith</h3>
                  <p className="text-sm text-red-600 dark:text-red-400">alice@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="favorites" className="bg-white dark:bg-red-900/40 p-4 rounded-lg shadow-sm border border-red-200 dark:border-red-800">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/60 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-800 flex items-center justify-center">
                <span className="text-red-600 dark:text-red-300">JD</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-red-900 dark:text-red-100">John Doe</h3>
                  <span className="text-red-500">⭐</span>
                </div>
                <p className="text-sm text-red-600 dark:text-red-400">john@example.com</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="groups" className="bg-white dark:bg-red-900/40 p-4 rounded-lg shadow-sm border border-red-200 dark:border-red-800">
          <div className="space-y-4">
            <div className="p-3 bg-red-50 dark:bg-red-900/60 rounded-lg">
              <h3 className="font-medium text-red-900 dark:text-red-100">Family</h3>
              <p className="text-sm text-red-600 dark:text-red-400 mt-1">3 contacts</p>
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-900/60 rounded-lg">
              <h3 className="font-medium text-red-900 dark:text-red-100">Work</h3>
              <p className="text-sm text-red-600 dark:text-red-400 mt-1">5 contacts</p>
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-900/60 rounded-lg">
              <h3 className="font-medium text-red-900 dark:text-red-100">Friends</h3>
              <p className="text-sm text-red-600 dark:text-red-400 mt-1">8 contacts</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample20; 