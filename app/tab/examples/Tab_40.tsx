"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_40";

const TabExample40 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-200">Music Player</h2>
      
      <Tabs defaultValue="now-playing" className="w-full">
        <TabsList activeTab="now-playing" setActiveTab={() => {}}>
          <TabsTrigger value="now-playing">Now Playing</TabsTrigger>
          <TabsTrigger value="queue">Queue</TabsTrigger>
          <TabsTrigger value="lyrics">Lyrics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="now-playing" className="bg-white dark:bg-purple-900/40 p-4 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="space-y-6">
            <div className="aspect-square max-w-xs mx-auto bg-purple-100 dark:bg-purple-800 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🎵</span>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-medium text-purple-900 dark:text-purple-100">Dancing in the Moonlight</h3>
              <p className="text-purple-600 dark:text-purple-400">Toploader</p>
            </div>
            <div className="space-y-2">
              <div className="h-1 bg-purple-200 dark:bg-purple-700 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-purple-500 dark:bg-purple-400"></div>
              </div>
              <div className="flex justify-between text-sm text-purple-600 dark:text-purple-400">
                <span>1:24</span>
                <span>3:52</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6">
              <button className="p-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200">
                <span className="text-2xl">⏮️</span>
              </button>
              <button className="p-3 bg-purple-500 dark:bg-purple-600 text-white rounded-full hover:bg-purple-600 dark:hover:bg-purple-500">
                <span className="text-3xl">⏸️</span>
              </button>
              <button className="p-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200">
                <span className="text-2xl">⏭️</span>
              </button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="queue" className="bg-white dark:bg-purple-900/40 p-4 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-purple-900 dark:text-purple-100">Up Next</h3>
              <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200">
                Clear Queue
              </button>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-purple-50 dark:bg-purple-900/60 rounded-lg flex items-center gap-3">
                <span className="text-xl">🎵</span>
                <div className="flex-1">
                  <p className="text-purple-900 dark:text-purple-100">Walking on Sunshine</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Katrina & The Waves</p>
                </div>
                <span className="text-sm text-purple-600 dark:text-purple-400">3:58</span>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/60 rounded-lg flex items-center gap-3">
                <span className="text-xl">🎵</span>
                <div className="flex-1">
                  <p className="text-purple-900 dark:text-purple-100">Sweet Dreams</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Eurythmics</p>
                </div>
                <span className="text-sm text-purple-600 dark:text-purple-400">3:36</span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="lyrics" className="bg-white dark:bg-purple-900/40 p-4 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-purple-900 dark:text-purple-100">Lyrics</h3>
              <select className="text-sm rounded-md border border-purple-200 dark:border-purple-700 bg-white dark:bg-purple-900/60 text-purple-900 dark:text-purple-100">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="space-y-4 text-center">
              <p className="text-purple-400 dark:text-purple-500">
                We get it on most every night
              </p>
              <p className="text-purple-400 dark:text-purple-500">
                When that moon is big and bright
              </p>
              <p className="text-purple-900 dark:text-purple-100 font-medium">
                It&apos;s a supernatural delight
              </p>
              <p className="text-purple-900 dark:text-purple-100 font-medium">
                Everybody&apos;s dancing in the moonlight
              </p>
              <p className="text-purple-400 dark:text-purple-500">
                Everybody here is out of sight
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample40; 