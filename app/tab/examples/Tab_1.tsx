"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tsx/Tab_1";

const TabExample1 = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Product Categories</h2>
      
      <Tabs defaultValue="electronics" className="w-full">
        <TabsList activeTab="electronics" setActiveTab={() => {}}>
          <TabsTrigger value="electronics">Electronics</TabsTrigger>
          <TabsTrigger value="clothing">Clothing</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
        </TabsList>
        
        <TabsContent value="electronics" className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Electronics</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Browse our selection of the latest gadgets and electronics, from smartphones and laptops to home entertainment systems.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-800 dark:text-white">Smartphones</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Latest models from top brands</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-800 dark:text-white">Laptops</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Powerful computing on the go</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="clothing" className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Clothing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Discover our fashion collection with the latest trends in men&apos;s, women&apos;s, and children&apos;s clothing.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-800 dark:text-white">Men&apos;s Fashion</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Stylish options for every occasion</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-800 dark:text-white">Women&apos;s Collection</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Trending styles and classics</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="books" className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Books</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore our extensive library of books across all genres, from bestsellers to timeless classics.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-800 dark:text-white">Fiction</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Novels, short stories, and more</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-800 dark:text-white">Non-Fiction</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Biographies, science, and history</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample1; 