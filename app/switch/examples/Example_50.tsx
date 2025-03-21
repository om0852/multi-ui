"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_50";

const SwitchExample50 = () => {
  const [mealPlanning, setMealPlanning] = useState(true);
  const [shoppingList, setShoppingList] = useState(true);
  const [nutritionalInfo, setNutritionalInfo] = useState(false);
  const [recipeSharing, setRecipeSharing] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recipe Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your cooking experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Meal Planning */}
          <div className="rounded-lg border-2 border-rose-100 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Meal Planning
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {mealPlanning
                    ? "Weekly meal planner active"
                    : "No meal planning"}
                </p>
              </div>
              <Switch
                value={mealPlanning}
                onChange={setMealPlanning}
              />
            </div>
            {mealPlanning && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Plan meals for the week ahead
              </div>
            )}
          </div>

          {/* Shopping List */}
          <div className="rounded-lg border-2 border-rose-100 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Shopping List
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {shoppingList
                    ? "Auto-generated shopping list"
                    : "Manual shopping list"}
                </p>
              </div>
              <Switch
                value={shoppingList}
                onChange={setShoppingList}
              />
            </div>
            {shoppingList && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Ingredients from planned meals
              </div>
            )}
          </div>

          {/* Nutritional Info */}
          <div className="rounded-lg border-2 border-rose-100 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Nutritional Info
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {nutritionalInfo
                    ? "Show nutritional details"
                    : "Hide nutritional info"}
                </p>
              </div>
              <Switch
                value={nutritionalInfo}
                onChange={setNutritionalInfo}
              />
            </div>
            {nutritionalInfo && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Calories, macros, and vitamins
              </div>
            )}
          </div>

          {/* Recipe Sharing */}
          <div className="rounded-lg border-2 border-rose-100 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Recipe Sharing
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {recipeSharing
                    ? "Share recipes with others"
                    : "Private recipes only"}
                </p>
              </div>
              <Switch
                value={recipeSharing}
                onChange={setRecipeSharing}
              />
            </div>
            {recipeSharing && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Share with friends and family
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <h4 className="mb-3 text-sm font-medium text-pink-900 dark:text-pink-100">
              Cooking Preferences
            </h4>
            <div className="space-y-2 text-sm text-pink-700 dark:text-pink-300">
              <p>• {mealPlanning ? "Meal planning on" : "No meal planning"}</p>
              <p>• {shoppingList ? "Auto shopping list" : "Manual list"}</p>
              <p>• {nutritionalInfo ? "Nutrition info shown" : "Info hidden"}</p>
              <p>• {recipeSharing ? "Sharing enabled" : "Private recipes"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample50; 