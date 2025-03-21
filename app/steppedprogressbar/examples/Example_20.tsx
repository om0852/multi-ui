"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_20";

const SteppedProgressBarExample20 = () => {
  // Define the steps for the fundraising campaign process
  const fundraisingSteps = [
    "Planning",
    "Team Building",
    "Campaign Creation",
    "Launch",
    "Donor Engagement",
    "Completion"
  ];

  // Define the steps for the music production process
  const musicProductionSteps = [
    "Composition",
    "Arrangement",
    "Recording",
    "Mixing",
    "Mastering",
    "Distribution"
  ];

  // Define fixed step values
  const fundraisingStep = 2;
  const musicProductionStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Fundraising Campaign Timeline</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={fundraisingSteps}
            initialStep={fundraisingStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your fundraising campaign with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help organizers stay on track and meet goals.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Music Production Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={musicProductionSteps}
            initialStep={musicProductionStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Navigate your music production workflow with this professional stepped progress bar.</p>
          <p>The visual indicators help musicians and producers track their progress from composition to distribution.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample20; 