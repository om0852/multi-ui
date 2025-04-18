"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_27";

const SteppedProgressBarExample27 = () => {
  // Define the steps for the UX design process
  const uxDesignSteps = [
    "User Research",
    "Information Architecture",
    "Wireframing",
    "Prototyping",
    "User Testing",
    "Implementation"
  ];

  // Define the steps for the content marketing process
  const contentMarketingSteps = [
    "Strategy",
    "Content Planning",
    "Creation",
    "Distribution",
    "Promotion",
    "Analysis"
  ];

  // Define fixed step values
  const uxDesignStep = 2;
  const contentMarketingStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">UX Design Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={uxDesignSteps}
            initialStep={uxDesignStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your UX design process with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help designers create user-centered experiences.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Content Marketing Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={contentMarketingSteps}
            initialStep={contentMarketingStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Organize your content marketing strategy with this comprehensive stepped progress bar.</p>
          <p>The visual indicators help marketers track progress from planning to analysis.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample27; 