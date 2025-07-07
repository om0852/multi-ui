"use client";

import React from "react";
import { StepsRoot } from "../tsx/SteppedProgressBar_13";

const SteppedProgressBarExample13 = () => {
  // Define the steps for the product launch process
  const productLaunchSteps = [
    "Market Research",
    "Product Development",
    "Quality Assurance",
    "Marketing Campaign",
    "Launch Event",
    "Post-Launch Analysis"
  ];

  // Define the steps for the travel planning process
  const travelPlanningSteps = [
    "Choose Destination",
    "Book Flights",
    "Reserve Accommodation",
    "Plan Activities",
    "Pack Essentials",
    "Travel Day"
  ];

  // Define fixed step values instead of state
  const productLaunchStep = 2;
  const travelPlanningStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Product Launch Roadmap</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={productLaunchSteps}
            initialStep={productLaunchStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your product launch progress with this interactive stepped progress bar.</p>
          <p>Each milestone is clearly visualized with custom styling and animations.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Travel Planning Guide</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={travelPlanningSteps}
            initialStep={travelPlanningStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Plan your perfect trip with this elegant stepped progress bar.</p>
          <p>The visual indicators help travelers stay organized and track their planning progress.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample13; 