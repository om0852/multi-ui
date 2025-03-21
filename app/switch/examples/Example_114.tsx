"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_114";

const SwitchExample114 = () => {
  const [mealPlanning, setMealPlanning] = useState(true);
  const [shoppingList, setShoppingList] = useState(true);
  const [nutritionInfo, setNutritionInfo] = useState(false);
  const [recipeScaling, setRecipeScaling] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 p-1">
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
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Meal Planning
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {mealPlanning
                    ? "Weekly meal planner"
                    : "Basic recipe view"}
                </p>
              </div>
              <Switch
                checked={mealPlanning}
                onChange={setMealPlanning}
              />
            </div>
            {mealPlanning && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Plan meals for the entire week
              </div>
            )}
          </div>

          {/* Shopping List */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Shopping List
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {shoppingList
                    ? "Auto-generated shopping list"
                    : "Manual list only"}
                </p>
              </div>
              <Switch
                checked={shoppingList}
                onChange={setShoppingList}
              />
            </div>
            {shoppingList && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Automatically generate shopping lists
              </div>
            )}
          </div>

          {/* Nutrition Info */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Nutrition Info
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {nutritionInfo
                    ? "Detailed nutrition facts"
                    : "Basic recipe info"}
                </p>
              </div>
              <Switch
                checked={nutritionInfo}
                onChange={setNutritionInfo}
              />
            </div>
            {nutritionInfo && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • View detailed nutritional information
              </div>
            )}
          </div>

          {/* Recipe Scaling */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Recipe Scaling
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {recipeScaling
                    ? "Adjust serving sizes"
                    : "Original portions only"}
                </p>
              </div>
              <Switch
                checked={recipeScaling}
                onChange={setRecipeScaling}
              />
            </div>
            {recipeScaling && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Scale recipes to any serving size
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Recipe Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {mealPlanning ? "Meal planning on" : "Basic view"}</p>
              <p>• {shoppingList ? "Shopping list on" : "Manual list"}</p>
              <p>• {nutritionInfo ? "Nutrition info on" : "Basic info"}</p>
              <p>• {recipeScaling ? "Recipe scaling on" : "Original portions"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample114; 