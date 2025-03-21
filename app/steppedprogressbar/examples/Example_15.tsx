"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_15";

const SteppedProgressBarExample15 = () => {
  // Define the steps for the wedding planning process
  const weddingPlanningSteps = [
    "Set Budget",
    "Choose Venue",
    "Select Vendors",
    "Send Invitations",
    "Finalize Details",
    "Wedding Day"
  ];

  // Define the steps for the career development process
  const careerDevelopmentSteps = [
    "Self-Assessment",
    "Set Career Goals",
    "Skill Development",
    "Networking",
    "Job Search",
    "Career Advancement"
  ];

  // Define fixed step values
  const weddingPlanningStep = 2;
  const careerDevelopmentStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Wedding Planning Timeline</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={weddingPlanningSteps}
            initialStep={weddingPlanningStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Plan your perfect wedding day with this comprehensive stepped progress bar.</p>
          <p>Each milestone is clearly visualized to help couples stay organized during the planning process.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Career Development Path</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={careerDevelopmentSteps}
            initialStep={careerDevelopmentStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Navigate your career journey with this professional stepped progress bar.</p>
          <p>The visual indicators help professionals track their development and set clear goals.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample15; 