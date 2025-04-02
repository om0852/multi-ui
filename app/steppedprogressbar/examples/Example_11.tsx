"use client";

import React from "react";
import { StepsRoot } from "../tsx/SteppedProgressBar_11";

const SteppedProgressBarExample11 = () => {
  // Define the steps for the event planning process
  const eventPlanningSteps = [
    "Define Event Goals",
    "Set Budget",
    "Choose Venue",
    "Plan Program",
    "Send Invitations",
    "Execute Event"
  ];

  // Define the steps for the content creation process
  const contentCreationSteps = [
    "Research",
    "Outline",
    "Draft",
    "Edit",
    "Review",
    "Publish"
  ];

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Event Planning Timeline</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={eventPlanningSteps}
            initialStep={2}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>This advanced stepped progress bar helps visualize the event planning process.</p>
          <p>The interactive elements and animations provide clear guidance through each planning phase.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Content Creation Workflow</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={contentCreationSteps}
            initialStep={3}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Track your content creation progress with this sophisticated stepped progress bar.</p>
          <p>The visual indicators help content creators stay organized and focused on the current task.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample11; 