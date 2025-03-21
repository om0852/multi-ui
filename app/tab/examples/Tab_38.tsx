"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_38";

const TabExample38 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-pink-800 dark:text-pink-200">Notification Center</h2>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList activeTab="all" setActiveTab={() => {}}>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="mentions">Mentions</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="bg-white dark:bg-pink-900/40 p-4 rounded-lg shadow-sm border border-pink-200 dark:border-pink-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-pink-900 dark:text-pink-100">Today</h3>
              <button className="text-sm text-pink-600 dark:text-pink-400">Mark all as read</button>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-pink-50 dark:bg-pink-900/60 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-800 flex items-center justify-center">
                    <span className="text-pink-600 dark:text-pink-300">👤</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-pink-900 dark:text-pink-100">
                      <span className="font-medium">John Doe</span> commented on your post
                    </p>
                    <p className="text-sm text-pink-600 dark:text-pink-400">2 hours ago</p>
                  </div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-3 bg-pink-50 dark:bg-pink-900/60 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-800 flex items-center justify-center">
                    <span className="text-pink-600 dark:text-pink-300">🔔</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-pink-900 dark:text-pink-100">
                      Your report is ready to download
                    </p>
                    <p className="text-sm text-pink-600 dark:text-pink-400">5 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="mentions" className="bg-white dark:bg-pink-900/40 p-4 rounded-lg shadow-sm border border-pink-200 dark:border-pink-800">
          <div className="space-y-2">
            <div className="p-3 bg-pink-50 dark:bg-pink-900/60 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-800 flex items-center justify-center">
                  <span className="text-pink-600 dark:text-pink-300">@</span>
                </div>
                <div>
                  <p className="text-pink-900 dark:text-pink-100">
                    <span className="font-medium">Alice Smith</span> mentioned you in a comment
                  </p>
                  <p className="text-sm text-pink-600 dark:text-pink-400">Yesterday</p>
                  <div className="mt-2 p-2 bg-pink-100 dark:bg-pink-800/60 rounded">
                    <p className="text-sm text-pink-700 dark:text-pink-300">
                      Hey @you, what do you think about this design?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="bg-white dark:bg-pink-900/40 p-4 rounded-lg shadow-sm border border-pink-200 dark:border-pink-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-pink-900 dark:text-pink-100">Push Notifications</h3>
                <p className="text-sm text-pink-600 dark:text-pink-400">Get notified about important updates</p>
              </div>
              <button className="px-3 py-1 text-sm rounded-md bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300">
                Enable
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-pink-900 dark:text-pink-100">Email Notifications</h3>
                <p className="text-sm text-pink-600 dark:text-pink-400">Receive updates via email</p>
              </div>
              <button className="px-3 py-1 text-sm rounded-md bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300">
                Enable
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-pink-900 dark:text-pink-100">Notification Sound</h3>
                <p className="text-sm text-pink-600 dark:text-pink-400">Play sound for new notifications</p>
              </div>
              <button className="px-3 py-1 text-sm rounded-md bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300">
                Enable
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample38; 