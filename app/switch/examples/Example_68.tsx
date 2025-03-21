"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_68";

const SwitchExample68 = () => {
  const [stepByStep, setStepByStep] = useState(true);
  const [unitConversion, setUnitConversion] = useState(true);
  const [shoppingList, setShoppingList] = useState(true);
  const [nutritionInfo, setNutritionInfo] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 p-1">
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
          {/* Step-by-Step Guide */}
          <div className="rounded-lg border-2 border-orange-100 bg-orange-50 p-4 dark:border-orange-900 dark:bg-orange-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Step-by-Step Guide
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stepByStep
                    ? "Detailed instructions"
                    : "Simple recipe view"}
                </p>
              </div>
              <Switch
                checked={stepByStep}
                onChange={setStepByStep}
              />
            </div>
            {stepByStep && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Follow detailed cooking steps
              </div>
            )}
          </div>

          {/* Unit Conversion */}
          <div className="rounded-lg border-2 border-orange-100 bg-orange-50 p-4 dark:border-orange-900 dark:bg-orange-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Unit Conversion
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {unitConversion
                    ? "Auto unit conversion"
                    : "Original units"}
                </p>
              </div>
              <Switch
                checked={unitConversion}
                onChange={setUnitConversion}
              />
            </div>
            {unitConversion && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Convert between metric and imperial
              </div>
            )}
          </div>

          {/* Shopping List */}
          <div className="rounded-lg border-2 border-orange-100 bg-orange-50 p-4 dark:border-orange-900 dark:bg-orange-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Shopping List
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {shoppingList
                    ? "Auto-generated list"
                    : "Manual list"}
                </p>
              </div>
              <Switch
                checked={shoppingList}
                onChange={setShoppingList}
              />
            </div>
            {shoppingList && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • Generate shopping list from recipes
              </div>
            )}
          </div>

          {/* Nutrition Info */}
          <div className="rounded-lg border-2 border-orange-100 bg-orange-50 p-4 dark:border-orange-900 dark:bg-orange-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Nutrition Info
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {nutritionInfo
                    ? "Detailed nutrition facts"
                    : "Basic info only"}
                </p>
              </div>
              <Switch
                checked={nutritionInfo}
                onChange={setNutritionInfo}
              />
            </div>
            {nutritionInfo && (
              <div className="mt-4 text-sm text-orange-600 dark:text-orange-400">
                • View detailed nutritional information
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <h4 className="mb-3 text-sm font-medium text-amber-900 dark:text-amber-100">
              Cooking Preferences
            </h4>
            <div className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
              <p>• {stepByStep ? "Step-by-step guide on" : "Simple view"}</p>
              <p>• {unitConversion ? "Auto conversion on" : "Original units"}</p>
              <p>• {shoppingList ? "Shopping list on" : "Manual list"}</p>
              <p>• {nutritionInfo ? "Nutrition info on" : "Basic info"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample68; 