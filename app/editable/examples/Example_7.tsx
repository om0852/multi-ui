"use client";

import React from "react";
import { EditableContainer } from "../_components/Editable_7";

export default function Example_7() {
  const handleSave = (content: string) => {
    console.log('Content saved:', content);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Recipe Editor
        </h2>
        <p className="text-gray-500">
          Create and edit your favorite recipes
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Recipe Description
          </label>
          <EditableContainer
            initialContent="A delightful homemade pasta dish with fresh ingredients and aromatic herbs. Perfect for a cozy dinner at home. Preparation time: 30 minutes. Serves 4."
            className="bg-orange-50 rounded-lg shadow-sm border-b-2 border-orange-200"
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Ingredients List
          </label>
          <EditableContainer
            initialContent="- 400g fresh pasta
- 2 tablespoons olive oil
- 3 cloves garlic, minced
- Fresh basil leaves
- Salt and pepper to taste
- Parmesan cheese for garnish"
            className="bg-green-50 rounded-lg shadow-sm border-b-2 border-green-200"
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Cooking Instructions
          </label>
          <EditableContainer
            initialContent="1. Boil water in a large pot
2. Add pasta and cook until al dente
3. Meanwhile, heat olive oil in a pan
4. Add minced garlic and sauté
5. Combine pasta with garlic oil
6. Garnish with basil and cheese"
            className="bg-red-50 rounded-lg shadow-sm border-b-2 border-red-200"
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
}
