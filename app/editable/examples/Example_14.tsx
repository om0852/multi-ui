"use client";

import React from "react";
import { EditableContainer } from "../tsx/Editable_14";

export default function Example_14() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Recipe Collection</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Recipe Details</label>
          <EditableContainer
            initialContent={`# Mediterranean Quinoa Bowl

## Overview
A healthy and flavorful Mediterranean-inspired quinoa bowl packed with fresh vegetables, protein, and a zesty lemon dressing.

## Preparation Time
- Prep: 20 minutes
- Cook: 25 minutes
- Total: 45 minutes
- Servings: 4

## Dietary Information
- Vegetarian
- Gluten-free
- High protein
- Rich in fiber
- Mediterranean diet`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Ingredients & Instructions</label>
          <EditableContainer
            initialContent={`## Ingredients

### Base
- 2 cups quinoa
- 4 cups vegetable broth
- 1 tbsp olive oil
- 1/2 tsp salt

### Vegetables & Protein
- 2 cups cherry tomatoes, halved
- 1 large cucumber, diced
- 1 red onion, thinly sliced
- 2 cups chickpeas, cooked
- 1 cup kalamata olives
- 200g feta cheese, crumbled

### Dressing
- 1/4 cup olive oil
- 2 lemons, juiced
- 2 cloves garlic, minced
- 1 tsp dried oregano
- Salt and pepper to taste

## Instructions
1. Cook quinoa in vegetable broth according to package instructions
2. While quinoa cooks, prepare vegetables and dressing
3. Whisk together dressing ingredients
4. Once quinoa is cooked, let cool for 10 minutes
5. Combine quinoa with vegetables and chickpeas
6. Add dressing and toss gently
7. Top with feta cheese and serve`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Notes & Tips</label>
          <EditableContainer
            initialContent={`# Recipe Notes

## Storage
- Store in airtight container
- Keeps for 3-4 days in refrigerator
- Can be served cold or at room temperature
- Store dressing separately if meal prepping

## Variations
- Add grilled chicken for non-vegetarian version
- Substitute quinoa with couscous or brown rice
- Add roasted bell peppers
- Include fresh herbs like parsley or mint

## Nutrition (per serving)
- Calories: 450
- Protein: 15g
- Carbs: 52g
- Fiber: 8g
- Fat: 22g

## Chef's Tips
- Toast quinoa before cooking for nutty flavor
- Use fresh lemon juice, not bottled
- Let quinoa cool completely for best texture
- Adjust seasoning to taste before serving`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
