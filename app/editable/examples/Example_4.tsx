"use client";

import React from "react";
import { InlineEditableContainer } from "../tsx/Editable_4";

export default function Example_4() {
  const handleSave = (content: string) => {
    console.log('Content saved:', content);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Recipe Collection
        </h2>
        <p className="text-gray-500">
          Organize your favorite recipes
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Ingredients
          </label>
          <InlineEditableContainer
            initialContent="• 2 cups all-purpose flour
• 1 cup sugar
• 3 eggs
• 1 cup milk
• 2 tsp vanilla extract
• 1/2 tsp salt"
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Instructions
          </label>
          <InlineEditableContainer
            initialContent="1. Preheat oven to 350°F
2. Mix dry ingredients
3. Beat eggs and milk
4. Combine wet and dry ingredients
5. Pour into prepared pan
6. Bake for 30-35 minutes"
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Notes
          </label>
          <InlineEditableContainer
            initialContent="• Best served warm
• Can be stored for up to 3 days
• Freezes well
• Try adding nuts or chocolate chips"
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
}
