"use client";

import React from "react";
import { StepsRoot } from "../tsx/SteppedProgressBar_16";

const SteppedProgressBarExample16 = () => {
  // Define the steps for the app development process
  const appDevelopmentSteps = [
    "Idea Validation",
    "Wireframing",
    "UI/UX Design",
    "Development",
    "Testing",
    "Launch"
  ];

  // Define the steps for the cooking process
  const cookingSteps = [
    "Gather Ingredients",
    "Preparation",
    "Cooking",
    "Plating",
    "Garnishing",
    "Serving"
  ];

  // Define fixed step values
  const appDevelopmentStep = 2;
  const cookingStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">App Development Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={appDevelopmentSteps}
            initialStep={appDevelopmentStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your app development journey with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help developers stay on track and meet deadlines.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Cooking Process Guide</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={cookingSteps}
            initialStep={cookingStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Follow your recipe with this elegant stepped progress bar for cooking.</p>
          <p>The visual indicators help chefs stay organized and ensure perfect timing for each step.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample16; 