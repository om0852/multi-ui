"use client";

import React from "react";
import { StepsRoot } from "../tsx/SteppedProgressBar_17";

const SteppedProgressBarExample17 = () => {
  // Define the steps for the video production process
  const videoProductionSteps = [
    "Pre-Production",
    "Filming",
    "Editing",
    "Sound Design",
    "Color Grading",
    "Distribution"
  ];

  // Define the steps for the gardening process
  const gardeningSteps = [
    "Planning",
    "Soil Preparation",
    "Planting",
    "Maintenance",
    "Harvesting",
    "Preservation"
  ];

  // Define fixed step values
  const videoProductionStep = 2;
  const gardeningStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Video Production Workflow</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={videoProductionSteps}
            initialStep={videoProductionStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your video production process with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help creators stay organized and meet deadlines.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Gardening Season Guide</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={gardeningSteps}
            initialStep={gardeningStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Follow your gardening journey with this seasonal stepped progress bar.</p>
          <p>The visual indicators help gardeners stay on track throughout the growing season.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample17; 