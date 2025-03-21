"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_28";

const SteppedProgressBarExample28 = () => {
  // Define the steps for the data science workflow
  const dataScienceSteps = [
    "Problem Definition",
    "Data Collection",
    "Data Cleaning",
    "Exploratory Analysis",
    "Modeling",
    "Deployment"
  ];

  // Define the steps for the customer journey
  const customerJourneySteps = [
    "Awareness",
    "Consideration",
    "Decision",
    "Purchase",
    "Retention",
    "Advocacy"
  ];

  // Define fixed step values
  const dataScienceStep = 2;
  const customerJourneyStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Data Science Workflow</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={dataScienceSteps}
            initialStep={dataScienceStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your data science projects with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help data scientists stay organized and methodical.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Customer Journey Map</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={customerJourneySteps}
            initialStep={customerJourneyStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Visualize your customer journey with this comprehensive stepped progress bar.</p>
          <p>The visual indicators help marketers understand and optimize each stage of the customer experience.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample28; 