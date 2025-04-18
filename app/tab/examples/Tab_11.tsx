"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_11";

const TabExample11 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-amber-800 dark:text-amber-200">Product Catalog</h2>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList activeTab="all" setActiveTab={() => {}}>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="new">New Arrivals</TabsTrigger>
          <TabsTrigger value="sale">Sale</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="bg-white dark:bg-amber-900/40 p-6 rounded-lg shadow-sm border border-amber-200 dark:border-amber-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              All Products
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 dark:bg-amber-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-amber-900 dark:text-amber-100">Wireless Headphones</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">Premium audio</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <span>$199.99</span>
                  <span>In Stock</span>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-amber-900 dark:text-amber-100">Smart Watch</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">Fitness tracking</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <span>$299.99</span>
                  <span>In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="featured" className="bg-white dark:bg-amber-900/40 p-6 rounded-lg shadow-sm border border-amber-200 dark:border-amber-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Featured Products
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 dark:bg-amber-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-amber-900 dark:text-amber-100">Gaming Console</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">Next-gen gaming</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <span>$499.99</span>
                  <span>Limited Stock</span>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-amber-900 dark:text-amber-100">4K Monitor</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">High resolution</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <span>$399.99</span>
                  <span>In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="new" className="bg-white dark:bg-amber-900/40 p-6 rounded-lg shadow-sm border border-amber-200 dark:border-amber-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              New Arrivals
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 dark:bg-amber-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-amber-900 dark:text-amber-100">Wireless Earbuds</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">Latest model</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <span>$159.99</span>
                  <span>New</span>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-amber-900 dark:text-amber-100">Smart Speaker</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">Voice assistant</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <span>$89.99</span>
                  <span>New</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="sale" className="bg-white dark:bg-amber-900/40 p-6 rounded-lg shadow-sm border border-amber-200 dark:border-amber-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 7v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7m18 0V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2m18 0H3m10 5h4m-4 3h4m-4 3h4M5 7h14M5 10h14M5 13h14M5 16h14M5 19h14"></path>
              </svg>
              Sale Items
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 dark:bg-amber-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-amber-900 dark:text-amber-100">Laptop</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">Clearance sale</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <span>$799.99</span>
                  <span>30% Off</span>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-amber-900 dark:text-amber-100">Tablet</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">Limited time</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <span>$299.99</span>
                  <span>20% Off</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample11; 