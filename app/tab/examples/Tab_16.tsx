"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_16";

const TabExample16 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-pink-800 dark:text-pink-200">Music Player</h2>
      
      <Tabs defaultValue="now-playing" className="w-full">
        <TabsList activeTab="now-playing" setActiveTab={() => {}}>
          <TabsTrigger value="now-playing">Now Playing</TabsTrigger>
          <TabsTrigger value="playlist">Playlist</TabsTrigger>
          <TabsTrigger value="queue">Queue</TabsTrigger>
        </TabsList>
        
        <TabsContent value="now-playing" className="bg-white dark:bg-pink-900/40 p-4 rounded-lg shadow-sm border border-pink-200 dark:border-pink-800">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg bg-pink-100 dark:bg-pink-800 flex items-center justify-center">
                <span className="text-2xl">🎵</span>
              </div>
              <div>
                <h3 className="font-medium text-pink-900 dark:text-pink-100">Song Title</h3>
                <p className="text-sm text-pink-600 dark:text-pink-400">Artist Name</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-1 bg-pink-100 dark:bg-pink-800 rounded-full">
                <div className="w-1/3 h-full bg-pink-500 dark:bg-pink-400 rounded-full"></div>
              </div>
              <div className="flex justify-between text-sm text-pink-600 dark:text-pink-400">
                <span>1:30</span>
                <span>4:15</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button className="p-2 rounded-full bg-pink-100 dark:bg-pink-800 text-pink-600 dark:text-pink-400">⏮️</button>
              <button className="p-2 rounded-full bg-pink-500 dark:bg-pink-400 text-white">▶️</button>
              <button className="p-2 rounded-full bg-pink-100 dark:bg-pink-800 text-pink-600 dark:text-pink-400">⏭️</button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="playlist" className="bg-white dark:bg-pink-900/40 p-4 rounded-lg shadow-sm border border-pink-200 dark:border-pink-800">
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 hover:bg-pink-50 dark:hover:bg-pink-900/60 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-pink-600 dark:text-pink-400">1</span>
                <div>
                  <p className="font-medium text-pink-900 dark:text-pink-100">Song One</p>
                  <p className="text-sm text-pink-600 dark:text-pink-400">Artist One</p>
                </div>
              </div>
              <span className="text-sm text-pink-600 dark:text-pink-400">3:45</span>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-pink-50 dark:hover:bg-pink-900/60 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-pink-600 dark:text-pink-400">2</span>
                <div>
                  <p className="font-medium text-pink-900 dark:text-pink-100">Song Two</p>
                  <p className="text-sm text-pink-600 dark:text-pink-400">Artist Two</p>
                </div>
              </div>
              <span className="text-sm text-pink-600 dark:text-pink-400">4:20</span>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="queue" className="bg-white dark:bg-pink-900/40 p-4 rounded-lg shadow-sm border border-pink-200 dark:border-pink-800">
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-pink-50 dark:bg-pink-900/60 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-pink-600 dark:text-pink-400">▶️</span>
                <div>
                  <p className="font-medium text-pink-900 dark:text-pink-100">Current Song</p>
                  <p className="text-sm text-pink-600 dark:text-pink-400">Current Artist</p>
                </div>
              </div>
              <span className="text-sm text-pink-600 dark:text-pink-400">2:30</span>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-pink-50 dark:hover:bg-pink-900/60 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-pink-600 dark:text-pink-400">⏭️</span>
                <div>
                  <p className="font-medium text-pink-900 dark:text-pink-100">Next Song</p>
                  <p className="text-sm text-pink-600 dark:text-pink-400">Next Artist</p>
                </div>
              </div>
              <span className="text-sm text-pink-600 dark:text-pink-400">3:15</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample16; 