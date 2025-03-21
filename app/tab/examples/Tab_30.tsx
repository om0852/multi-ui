"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_30";

const TabExample30 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-neutral-50 dark:bg-neutral-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Product Details</h2>
      
      <Tabs defaultValue="details" className="w-full">
        <TabsList activeTab="details" setActiveTab={() => {}}>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="specs">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="bg-white dark:bg-neutral-900/40 p-4 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800">
          <div className="space-y-4">
            <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
              <span className="text-4xl">📱</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Smartphone Pro Max</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Latest generation smartphone with advanced features</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">$999</span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400 line-through">$1099</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg">Add to Cart</button>
              <button className="px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg">❤️</button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="specs" className="bg-white dark:bg-neutral-900/40 p-4 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-neutral-50 dark:bg-neutral-900/60 rounded-lg">
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Display</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">6.7&quot; OLED</p>
              </div>
              <div className="p-3 bg-neutral-50 dark:bg-neutral-900/60 rounded-lg">
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Processor</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">A16 Bionic</p>
              </div>
              <div className="p-3 bg-neutral-50 dark:bg-neutral-900/60 rounded-lg">
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Storage</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">256GB</p>
              </div>
              <div className="p-3 bg-neutral-50 dark:bg-neutral-900/60 rounded-lg">
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Battery</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">4500mAh</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="bg-white dark:bg-neutral-900/40 p-4 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl text-yellow-400">⭐⭐⭐⭐⭐</div>
              <span className="text-neutral-600 dark:text-neutral-400">(128 reviews)</span>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-neutral-50 dark:bg-neutral-900/60 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                    <span className="text-neutral-600 dark:text-neutral-300">JD</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-100">John Doe</p>
                    <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">Great phone, amazing camera quality!</p>
              </div>
              <div className="p-3 bg-neutral-50 dark:bg-neutral-900/60 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                    <span className="text-neutral-600 dark:text-neutral-300">AS</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-100">Alice Smith</p>
                    <div className="text-yellow-400">⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">Battery life could be better, but overall good phone.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample30; 