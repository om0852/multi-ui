"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_29";

const TabExample29 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-teal-800 dark:text-teal-200">Social Feed</h2>
      
      <Tabs defaultValue="feed" className="w-full">
        <TabsList activeTab="feed" setActiveTab={() => {}}>
          <TabsTrigger value="feed">Feed</TabsTrigger>
          <TabsTrigger value="explore">Explore</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="feed" className="bg-white dark:bg-teal-900/40 p-4 rounded-lg shadow-sm border border-teal-200 dark:border-teal-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <input type="text" placeholder="What's on your mind?" className="w-full px-3 py-2 rounded-md border border-teal-200 dark:border-teal-700 bg-white dark:bg-teal-900/60 text-teal-900 dark:text-teal-100" />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-teal-50 dark:bg-teal-900/60 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center">
                    <span className="text-teal-600 dark:text-teal-300">JD</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-teal-900 dark:text-teal-100">John Doe</h3>
                    <p className="text-sm text-teal-600 dark:text-teal-400">2 hours ago</p>
                  </div>
                </div>
                <p className="text-teal-900 dark:text-teal-100 mb-3">Just launched our new website! Check it out 🚀</p>
                <div className="flex items-center gap-4 text-sm text-teal-600 dark:text-teal-400">
                  <button className="flex items-center gap-1">❤️ Like</button>
                  <button className="flex items-center gap-1">💬 Comment</button>
                  <button className="flex items-center gap-1">↗️ Share</button>
                </div>
              </div>
              <div className="p-4 bg-teal-50 dark:bg-teal-900/60 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center">
                    <span className="text-teal-600 dark:text-teal-300">AS</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-teal-900 dark:text-teal-100">Alice Smith</h3>
                    <p className="text-sm text-teal-600 dark:text-teal-400">4 hours ago</p>
                  </div>
                </div>
                <p className="text-teal-900 dark:text-teal-100 mb-3">Great team meeting today! 👥</p>
                <div className="flex items-center gap-4 text-sm text-teal-600 dark:text-teal-400">
                  <button className="flex items-center gap-1">❤️ Like</button>
                  <button className="flex items-center gap-1">💬 Comment</button>
                  <button className="flex items-center gap-1">↗️ Share</button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="explore" className="bg-white dark:bg-teal-900/40 p-4 rounded-lg shadow-sm border border-teal-200 dark:border-teal-800">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-teal-100 dark:bg-teal-800 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🎨</span>
              </div>
              <div className="aspect-square bg-teal-100 dark:bg-teal-800 rounded-lg flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <div className="aspect-square bg-teal-100 dark:bg-teal-800 rounded-lg flex items-center justify-center">
                <span className="text-4xl">💻</span>
              </div>
              <div className="aspect-square bg-teal-100 dark:bg-teal-800 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🎮</span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="bg-white dark:bg-teal-900/40 p-4 rounded-lg shadow-sm border border-teal-200 dark:border-teal-800">
          <div className="space-y-2">
            <div className="p-3 bg-teal-50 dark:bg-teal-900/60 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center">
                  <span className="text-teal-600 dark:text-teal-300">JD</span>
                </div>
                <div>
                  <p className="text-teal-900 dark:text-teal-100">John Doe liked your post</p>
                  <p className="text-sm text-teal-600 dark:text-teal-400">5 minutes ago</p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-teal-50 dark:bg-teal-900/60 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center">
                  <span className="text-teal-600 dark:text-teal-300">AS</span>
                </div>
                <div>
                  <p className="text-teal-900 dark:text-teal-100">Alice Smith commented on your post</p>
                  <p className="text-sm text-teal-600 dark:text-teal-400">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample29; 