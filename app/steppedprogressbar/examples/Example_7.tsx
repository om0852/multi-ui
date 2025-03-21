"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_7";

const SteppedProgressBarExample7 = () => {
  // Define the steps for the software development lifecycle
  const sdlcSteps = [
    "Requirements Analysis",
    "System Design",
    "Implementation",
    "Testing",
    "Deployment",
    "Maintenance"
  ];

  // Define the steps for the user journey
  const userJourneySteps = [
    "Awareness",
    "Consideration",
    "Purchase",
    "Retention",
    "Advocacy"
  ];

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-lg font-medium">Software Development Lifecycle</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={sdlcSteps}
            initialStep={2}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>This animated stepped progress bar visualizes the software development lifecycle.</p>
          <p>Completed steps and connections are highlighted with gradient colors.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-lg font-medium text-white">User Journey Visualization</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={userJourneySteps}
            initialStep={0}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Track the customer journey from initial awareness to becoming a brand advocate.</p>
          <p>The active step features a rotation animation for emphasis.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample7; 