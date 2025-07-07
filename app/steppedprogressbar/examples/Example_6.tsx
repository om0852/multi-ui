"use client";

import React from "react";
import { StepsRoot } from "../tsx/SteppedProgressBar_6";

const SteppedProgressBarExample6 = () => {
  // Define the steps for the tutorial process
  const tutorialSteps = [
    "Getting Started",
    "Basic Features",
    "Advanced Techniques",
    "Tips & Tricks"
  ];

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-lg font-medium">Interactive Tutorial Progress</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={tutorialSteps}
            initialStep={0}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>This stepped progress bar includes built-in navigation controls and content display.</p>
          <p>Click on the step indicators or use the navigation buttons to move between steps.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-lg font-medium text-white">Dark Mode Example</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={[
              "Step 1",
              "Step 2",
              "Step 3",
              "Step 4",
              "Step 5"
            ]}
            initialStep={1}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>The component automatically adapts to dark mode environments.</p>
          <p>The active step is highlighted with a scale animation for better visibility.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample6; 