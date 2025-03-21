"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_25";

const SteppedProgressBarExample25 = () => {
  // Define the steps for the product design process
  const productDesignSteps = [
    "Research",
    "Ideation",
    "Prototyping",
    "Testing",
    "Refinement",
    "Production"
  ];

  // Define the steps for the travel planning process
  const travelPlanningSteps = [
    "Destination Research",
    "Budget Planning",
    "Booking Transportation",
    "Accommodation",
    "Itinerary Planning",
    "Final Preparations"
  ];

  // Define fixed step values
  const productDesignStep = 2;
  const travelPlanningStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Product Design Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={productDesignSteps}
            initialStep={productDesignStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your product design journey with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help designers move efficiently from concept to production.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Travel Planning Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={travelPlanningSteps}
            initialStep={travelPlanningStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Organize your travel plans with this comprehensive stepped progress bar.</p>
          <p>The visual indicators help travelers stay on track with all necessary preparations before departure.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample25; 