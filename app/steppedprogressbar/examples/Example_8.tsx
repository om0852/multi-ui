"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_8";

const SteppedProgressBarExample8 = () => {
  // Define the steps for the course completion process
  const courseSteps = [
    "Introduction",
    "Fundamentals",
    "Advanced Concepts",
    "Practical Application",
    "Final Assessment"
  ];

  // Define the steps for the recipe process
  const recipeSteps = [
    "Gather Ingredients",
    "Preparation",
    "Cooking",
    "Plating",
    "Serving"
  ];

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-lg font-medium">Course Completion Tracker</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={courseSteps}
            initialStep={2}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your progress through the course modules with this interactive stepped progress bar.</p>
          <p>Completed steps are marked in green, and the current step is highlighted in blue.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-lg font-medium text-white">Recipe Steps</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={recipeSteps}
            initialStep={1}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Follow along with the recipe steps using this interactive progress tracker.</p>
          <p>Each step includes a rotation animation when active for better visibility.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample8; 