"use client";

import React from "react";
import { StepsRoot } from "../tsx/SteppedProgressBar_24";

const SteppedProgressBarExample24 = () => {
  // Define the steps for the startup journey
  const startupSteps = [
    "Ideation",
    "Validation",
    "MVP Development",
    "Market Entry",
    "Growth",
    "Scaling"
  ];

  // Define the steps for the construction process
  const constructionSteps = [
    "Planning",
    "Design",
    "Permits",
    "Foundation",
    "Framing",
    "Finishing"
  ];

  // Define fixed step values
  const startupStep = 2;
  const constructionStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Startup Journey</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={startupSteps}
            initialStep={startupStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your startup&apos;s progress with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help founders navigate the complex journey from idea to scale.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Construction Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={constructionSteps}
            initialStep={constructionStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Manage your construction project with this comprehensive stepped progress bar.</p>
          <p>The visual indicators help track progress through each critical phase of the building process.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample24; 