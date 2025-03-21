"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_22";

const TabExample22 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-fuchsia-800 dark:text-fuchsia-200">Image Gallery</h2>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList activeTab="all" setActiveTab={() => {}}>
          <TabsTrigger value="all">All Photos</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="bg-white dark:bg-fuchsia-900/40 p-4 rounded-lg shadow-sm border border-fuchsia-200 dark:border-fuchsia-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <input type="text" placeholder="Search photos..." className="w-full px-3 py-2 rounded-md border border-fuchsia-200 dark:border-fuchsia-700 bg-white dark:bg-fuchsia-900/60 text-fuchsia-900 dark:text-fuchsia-100" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-fuchsia-100 dark:bg-fuchsia-800 rounded-lg flex items-center justify-center">
                <span className="text-4xl">📸</span>
              </div>
              <div className="aspect-square bg-fuchsia-100 dark:bg-fuchsia-800 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🌅</span>
              </div>
              <div className="aspect-square bg-fuchsia-100 dark:bg-fuchsia-800 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🏔️</span>
              </div>
              <div className="aspect-square bg-fuchsia-100 dark:bg-fuchsia-800 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🌊</span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="favorites" className="bg-white dark:bg-fuchsia-900/40 p-4 rounded-lg shadow-sm border border-fuchsia-200 dark:border-fuchsia-800">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-fuchsia-100 dark:bg-fuchsia-800 rounded-lg flex items-center justify-center relative">
                <span className="text-4xl">⭐</span>
                <button className="absolute top-2 right-2 p-1 rounded-full bg-fuchsia-200 dark:bg-fuchsia-700 text-fuchsia-600 dark:text-fuchsia-300">
                  ❤️
                </button>
              </div>
              <div className="aspect-square bg-fuchsia-100 dark:bg-fuchsia-800 rounded-lg flex items-center justify-center relative">
                <span className="text-4xl">🌺</span>
                <button className="absolute top-2 right-2 p-1 rounded-full bg-fuchsia-200 dark:bg-fuchsia-700 text-fuchsia-600 dark:text-fuchsia-300">
                  ❤️
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="albums" className="bg-white dark:bg-fuchsia-900/40 p-4 rounded-lg shadow-sm border border-fuchsia-200 dark:border-fuchsia-800">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-fuchsia-100 dark:bg-fuchsia-800 rounded-lg flex items-center justify-center relative">
                <div className="text-center">
                  <span className="text-4xl block mb-2">🎉</span>
                  <span className="text-sm text-fuchsia-900 dark:text-fuchsia-100">Vacation</span>
                </div>
                <span className="absolute bottom-2 right-2 text-sm text-fuchsia-600 dark:text-fuchsia-400">24 photos</span>
              </div>
              <div className="aspect-square bg-fuchsia-100 dark:bg-fuchsia-800 rounded-lg flex items-center justify-center relative">
                <div className="text-center">
                  <span className="text-4xl block mb-2">👥</span>
                  <span className="text-sm text-fuchsia-900 dark:text-fuchsia-100">Family</span>
                </div>
                <span className="absolute bottom-2 right-2 text-sm text-fuchsia-600 dark:text-fuchsia-400">56 photos</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample22; 