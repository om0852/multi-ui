"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_83";

const SwitchExample83 = () => {
  const [stepByStepGuide, setStepByStepGuide] = useState(true);
  const [unitConversion, setUnitConversion] = useState(true);
  const [shoppingList, setShoppingList] = useState(false);
  const [nutritionInfo, setNutritionInfo] = useState(true);

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
          {/* Step by Step Guide */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Step by Step Guide
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {stepByStepGuide
                    ? "Follow cooking steps"
                    : "View full recipe"}
                </p>
              </div>
              <Switch
                checked={stepByStepGuide}
                onChange={setStepByStepGuide}
              />
            </div>
            {stepByStepGuide && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Guided cooking experience
              </div>
            )}
          </div>

          {/* Unit Conversion */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Unit Conversion
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {unitConversion
                    ? "Convert measurements"
                    : "Original units"}
                </p>
              </div>
              <Switch
                checked={unitConversion}
                onChange={setUnitConversion}
              />
            </div>
            {unitConversion && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Switch between units
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
                    ? "Generate shopping list"
                    : "No shopping list"}
                </p>
              </div>
              <Switch
                checked={shoppingList}
                onChange={setShoppingList}
              />
            </div>
            {shoppingList && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • Create shopping list
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
                    ? "Show nutrition details"
                    : "Hide nutrition info"}
                </p>
              </div>
              <Switch
                checked={nutritionInfo}
                onChange={setNutritionInfo}
              />
            </div>
            {nutritionInfo && (
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                • View nutritional content
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Recipe Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {stepByStepGuide ? "Step by step guide on" : "Full recipe view"}</p>
              <p>• {unitConversion ? "Unit conversion on" : "Original units"}</p>
              <p>• {shoppingList ? "Shopping list on" : "No shopping list"}</p>
              <p>• {nutritionInfo ? "Nutrition info on" : "Hide nutrition info"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample83; 