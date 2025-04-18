"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_21";

const SteppedProgressBarExample21 = () => {
  // Define the steps for the photography workflow
  const photographySteps = [
    "Planning",
    "Shooting",
    "Culling",
    "Editing",
    "Delivery",
    "Archiving"
  ];

  // Define the steps for the research process
  const researchSteps = [
    "Question Formulation",
    "Literature Review",
    "Methodology Design",
    "Data Collection",
    "Analysis",
    "Publication"
  ];

  // Define fixed step values
  const photographyStep = 2;
  const researchStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Photography Workflow</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={photographySteps}
            initialStep={photographyStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your photography project with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help photographers stay organized and deliver on time.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Research Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={researchSteps}
            initialStep={researchStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Navigate your research journey with this comprehensive stepped progress bar.</p>
          <p>The visual indicators help researchers track their progress from question to publication.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample21; 