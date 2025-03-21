"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_49";

const TabExample49 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-pink-800 dark:text-pink-200">Music Playlist</h2>
      
      <Tabs defaultValue="songs" className="w-full">
        <TabsList activeTab="songs" setActiveTab={() => {}}>
          <TabsTrigger value="songs">Songs</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="artists">Artists</TabsTrigger>
        </TabsList>
        
        <TabsContent value="songs" className="bg-white dark:bg-pink-900/40 p-4 rounded-lg shadow-sm border border-pink-200 dark:border-pink-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <input type="text" placeholder="Search songs..." className="w-full px-3 py-2 rounded-md border border-pink-200 dark:border-pink-700 bg-white dark:bg-pink-900/60 text-pink-900 dark:text-pink-100" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/60 rounded-lg">
                <div className="w-12 h-12 bg-pink-200 dark:bg-pink-800 rounded flex items-center justify-center">
                  🎵
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-pink-900 dark:text-pink-100">Summer Vibes</h3>
                  <p className="text-sm text-pink-600 dark:text-pink-400">Tropical Band</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-pink-600 dark:text-pink-400">3:45</span>
                  <button className="text-pink-600 dark:text-pink-400">▶️</button>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/60 rounded-lg">
                <div className="w-12 h-12 bg-pink-200 dark:bg-pink-800 rounded flex items-center justify-center">
                  🎵
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-pink-900 dark:text-pink-100">Midnight Dreams</h3>
                  <p className="text-sm text-pink-600 dark:text-pink-400">Luna</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-pink-600 dark:text-pink-400">4:20</span>
                  <button className="text-pink-600 dark:text-pink-400">▶️</button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="albums" className="bg-white dark:bg-pink-900/40 p-4 rounded-lg shadow-sm border border-pink-200 dark:border-pink-800">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-pink-50 dark:bg-pink-900/60 rounded-lg">
                <div className="w-full aspect-square bg-pink-200 dark:bg-pink-800 rounded-lg mb-3 flex items-center justify-center text-4xl">
                  💿
                </div>
                <h3 className="font-medium text-pink-900 dark:text-pink-100">Summer Collection</h3>
                <p className="text-sm text-pink-600 dark:text-pink-400">12 songs • 45 min</p>
              </div>
              
              <div className="p-4 bg-pink-50 dark:bg-pink-900/60 rounded-lg">
                <div className="w-full aspect-square bg-pink-200 dark:bg-pink-800 rounded-lg mb-3 flex items-center justify-center text-4xl">
                  💿
                </div>
                <h3 className="font-medium text-pink-900 dark:text-pink-100">Night Drive</h3>
                <p className="text-sm text-pink-600 dark:text-pink-400">8 songs • 32 min</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="artists" className="bg-white dark:bg-pink-900/40 p-4 rounded-lg shadow-sm border border-pink-200 dark:border-pink-800">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-pink-50 dark:bg-pink-900/60 rounded-lg">
              <div className="w-16 h-16 bg-pink-200 dark:bg-pink-800 rounded-full flex items-center justify-center text-2xl">
                🎤
              </div>
              <div>
                <h3 className="font-medium text-pink-900 dark:text-pink-100">Tropical Band</h3>
                <p className="text-sm text-pink-600 dark:text-pink-400">5 albums • 42 songs</p>
                <button className="mt-2 px-3 py-1 text-sm rounded-full bg-pink-200 dark:bg-pink-800 text-pink-700 dark:text-pink-300">
                  Follow
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-pink-50 dark:bg-pink-900/60 rounded-lg">
              <div className="w-16 h-16 bg-pink-200 dark:bg-pink-800 rounded-full flex items-center justify-center text-2xl">
                🎤
              </div>
              <div>
                <h3 className="font-medium text-pink-900 dark:text-pink-100">Luna</h3>
                <p className="text-sm text-pink-600 dark:text-pink-400">3 albums • 28 songs</p>
                <button className="mt-2 px-3 py-1 text-sm rounded-full bg-pink-200 dark:bg-pink-800 text-pink-700 dark:text-pink-300">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample49; 