"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_26";

const SteppedProgressBarExample26 = () => {
  // Define the steps for the game development process
  const gameDevelopmentSteps = [
    "Concept",
    "Pre-Production",
    "Production",
    "Testing",
    "Pre-Launch",
    "Post-Launch"
  ];

  // Define the steps for the event planning process
  const eventPlanningSteps = [
    "Concept & Goals",
    "Budgeting",
    "Venue Selection",
    "Vendor Coordination",
    "Marketing",
    "Execution"
  ];

  // Define fixed step values
  const gameDevelopmentStep = 2;
  const eventPlanningStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Game Development Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={gameDevelopmentSteps}
            initialStep={gameDevelopmentStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your game development journey with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help development teams stay organized and meet milestones.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Event Planning Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={eventPlanningSteps}
            initialStep={eventPlanningStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Organize your event planning with this comprehensive stepped progress bar.</p>
          <p>The visual indicators help event planners track progress and ensure all details are addressed.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample26; 