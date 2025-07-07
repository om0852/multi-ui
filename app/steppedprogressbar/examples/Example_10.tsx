"use client";

import React from "react";
import { StepsRoot } from "../tsx/SteppedProgressBar_10";

const SteppedProgressBarExample10 = () => {
  // Define the steps for the product launch process
  const launchSteps = [
    "Market Research",
    "Product Development",
    "Quality Assurance",
    "Marketing Campaign",
    "Launch Event"
  ];

  // Define the steps for the fitness journey
  const fitnessSteps = [
    "Initial Assessment",
    "Goal Setting",
    "Nutrition Plan",
    "Training Program",
    "Progress Tracking"
  ];

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Product Launch Roadmap</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={launchSteps}
            initialStep={2}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>This premium stepped progress bar features checkmarks for completed steps and elegant animations.</p>
          <p>The large, visually distinct steps make it perfect for important business processes.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Fitness Journey Tracker</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={fitnessSteps}
            initialStep={1}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Track your fitness journey with this deluxe stepped progress bar.</p>
          <p>The interactive elements and smooth transitions provide a motivating user experience.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample10; 