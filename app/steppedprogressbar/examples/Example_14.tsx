"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_14";

const SteppedProgressBarExample14 = () => {
  // Define the steps for the home buying process
  const homeBuyingSteps = [
    "Pre-Approval",
    "House Hunting",
    "Make an Offer",
    "Home Inspection",
    "Closing Process",
    "Move In"
  ];

  // Define the steps for the fitness journey
  const fitnessJourneySteps = [
    "Assessment",
    "Goal Setting",
    "Nutrition Plan",
    "Workout Routine",
    "Progress Tracking",
    "Milestone Celebration"
  ];

  // State to track active step for each example
  const homeBuyingStep = 2;
  const fitnessJourneyStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Home Buying Journey</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={homeBuyingSteps}
            initialStep={homeBuyingStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Navigate the complex home buying process with this interactive stepped progress bar.</p>
          <p>Each stage is clearly visualized to help buyers understand where they are in the journey.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Fitness Journey Tracker</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={fitnessJourneySteps}
            initialStep={fitnessJourneyStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Track your fitness progress with this motivational stepped progress bar.</p>
          <p>The visual indicators help maintain motivation and celebrate achievements along the way.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample14; 