"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tsx/Tab_3";

const TabExample3 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-orange-800 dark:text-orange-200">Recipe Collection</h2>
      
      <Tabs defaultValue="breakfast" className="w-full">
        <TabsList activeTab="breakfast" setActiveTab={() => {}}>
          <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
          <TabsTrigger value="lunch">Lunch</TabsTrigger>
          <TabsTrigger value="dinner">Dinner</TabsTrigger>
          <TabsTrigger value="desserts">Desserts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="breakfast" className="bg-white dark:bg-orange-900/40 p-6 rounded-lg shadow-sm border border-orange-200 dark:border-orange-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 12H4"></path>
                <path d="M12 4v16"></path>
                <path d="M4 12a8 8 0 0 1 16 0"></path>
              </svg>
              Breakfast Recipes
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 dark:bg-orange-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-orange-900 dark:text-orange-100">Pancakes</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">Fluffy and delicious</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400">
                  <span>Prep: 15min</span>
                  <span>Cook: 20min</span>
                </div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-orange-900 dark:text-orange-100">Omelette</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">Classic breakfast</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400">
                  <span>Prep: 10min</span>
                  <span>Cook: 15min</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="lunch" className="bg-white dark:bg-orange-900/40 p-6 rounded-lg shadow-sm border border-orange-200 dark:border-orange-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              Lunch Recipes
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 dark:bg-orange-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-orange-900 dark:text-orange-100">Caesar Salad</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">Fresh and healthy</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400">
                  <span>Prep: 20min</span>
                  <span>Cook: 5min</span>
                </div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-orange-900 dark:text-orange-100">Sandwich</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">Quick and easy</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400">
                  <span>Prep: 15min</span>
                  <span>Cook: 10min</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="dinner" className="bg-white dark:bg-orange-900/40 p-6 rounded-lg shadow-sm border border-orange-200 dark:border-orange-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              Dinner Recipes
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 dark:bg-orange-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-orange-900 dark:text-orange-100">Pasta</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">Italian classic</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400">
                  <span>Prep: 25min</span>
                  <span>Cook: 20min</span>
                </div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-orange-900 dark:text-orange-100">Grilled Chicken</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">Healthy protein</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400">
                  <span>Prep: 30min</span>
                  <span>Cook: 25min</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="desserts" className="bg-white dark:bg-orange-900/40 p-6 rounded-lg shadow-sm border border-orange-200 dark:border-orange-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              Dessert Recipes
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 dark:bg-orange-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-orange-900 dark:text-orange-100">Chocolate Cake</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">Rich and moist</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400">
                  <span>Prep: 30min</span>
                  <span>Cook: 35min</span>
                </div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-orange-900 dark:text-orange-100">Ice Cream</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">Homemade treat</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400">
                  <span>Prep: 20min</span>
                  <span>Freeze: 4hr</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample3; 