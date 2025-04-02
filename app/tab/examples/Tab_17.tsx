"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tsx/Tab_17";

const TabExample17 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-orange-800 dark:text-orange-200">Recipe Viewer</h2>
      
      <Tabs defaultValue="ingredients" className="w-full">
        <TabsList activeTab="ingredients" setActiveTab={() => {}}>
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ingredients" className="bg-white dark:bg-orange-900/40 p-4 rounded-lg shadow-sm border border-orange-200 dark:border-orange-800">
          <div className="space-y-4">
            <h3 className="font-medium text-orange-900 dark:text-orange-100">Ingredients List</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-orange-300 dark:border-orange-700" />
                <span className="text-orange-900 dark:text-orange-100">2 cups flour</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-orange-300 dark:border-orange-700" />
                <span className="text-orange-900 dark:text-orange-100">1 cup sugar</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-orange-300 dark:border-orange-700" />
                <span className="text-orange-900 dark:text-orange-100">3 eggs</span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="instructions" className="bg-white dark:bg-orange-900/40 p-4 rounded-lg shadow-sm border border-orange-200 dark:border-orange-800">
          <div className="space-y-4">
            <h3 className="font-medium text-orange-900 dark:text-orange-100">Cooking Steps</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-400 flex items-center justify-center text-sm">1</span>
                <p className="text-orange-900 dark:text-orange-100">Preheat oven to 350°F</p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-400 flex items-center justify-center text-sm">2</span>
                <p className="text-orange-900 dark:text-orange-100">Mix dry ingredients</p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-400 flex items-center justify-center text-sm">3</span>
                <p className="text-orange-900 dark:text-orange-100">Add wet ingredients</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="nutrition" className="bg-white dark:bg-orange-900/40 p-4 rounded-lg shadow-sm border border-orange-200 dark:border-orange-800">
          <div className="space-y-4">
            <h3 className="font-medium text-orange-900 dark:text-orange-100">Nutrition Facts</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 dark:bg-orange-900/60 p-3 rounded-lg">
                <p className="text-sm text-orange-600 dark:text-orange-400">Calories</p>
                <p className="font-medium text-orange-900 dark:text-orange-100">250</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/60 p-3 rounded-lg">
                <p className="text-sm text-orange-600 dark:text-orange-400">Protein</p>
                <p className="font-medium text-orange-900 dark:text-orange-100">8g</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/60 p-3 rounded-lg">
                <p className="text-sm text-orange-600 dark:text-orange-400">Carbs</p>
                <p className="font-medium text-orange-900 dark:text-orange-100">35g</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/60 p-3 rounded-lg">
                <p className="text-sm text-orange-600 dark:text-orange-400">Fat</p>
                <p className="font-medium text-orange-900 dark:text-orange-100">12g</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample17; 