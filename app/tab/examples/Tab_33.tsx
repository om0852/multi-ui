"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_33";

const TabExample33 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">Video Player</h2>
      
      <Tabs defaultValue="player" className="w-full">
        <TabsList activeTab="player" setActiveTab={() => {}}>
          <TabsTrigger value="player">Player</TabsTrigger>
          <TabsTrigger value="playlist">Playlist</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="player" className="bg-white dark:bg-slate-900/40 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="space-y-4">
            <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center relative">
              <span className="text-6xl text-slate-400">▶️</span>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-white">
                    <span>2:15 / 5:30</span>
                    <button>⚙️</button>
                  </div>
                  <div className="h-1 bg-slate-700 rounded-full">
                    <div className="w-1/3 h-full bg-slate-100 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-white">
                    <button>⏮️</button>
                    <button className="text-2xl">⏯️</button>
                    <button>⏭️</button>
                    <button>🔊</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">Video Title</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">1.2K views • 2 days ago</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="playlist" className="bg-white dark:bg-slate-900/40 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-900/60 rounded-lg">
              <div className="w-24 h-16 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center">
                <span className="text-2xl">▶️</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900 dark:text-slate-100">Video One</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">5:30</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-900/60 rounded-lg">
              <div className="w-24 h-16 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center">
                <span className="text-2xl">▶️</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900 dark:text-slate-100">Video Two</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">3:45</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="bg-white dark:bg-slate-900/40 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-slate-900 dark:text-slate-100">Quality</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Video quality settings</p>
              </div>
              <select className="px-3 py-1 text-sm rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <option>1080p</option>
                <option>720p</option>
                <option>480p</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-slate-900 dark:text-slate-100">Autoplay</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Play next video automatically</p>
              </div>
              <button className="px-3 py-1 text-sm rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Enable</button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample33; 