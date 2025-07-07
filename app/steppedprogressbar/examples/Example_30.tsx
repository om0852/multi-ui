"use client";

import React from "react";
import { StepsRoot } from "../tsx/SteppedProgressBar_30";

const SteppedProgressBarExample30 = () => {
  // Define the steps for the agile sprint process
  const agileSprintSteps = [
    "Sprint Planning",
    "Daily Standups",
    "Development",
    "Testing",
    "Sprint Review",
    "Retrospective"
  ];

  // Define the steps for the investment process
  const investmentSteps = [
    "Financial Assessment",
    "Goal Setting",
    "Asset Allocation",
    "Investment Selection",
    "Implementation",
    "Monitoring"
  ];

  // Define fixed step values
  const agileSprintStep = 2;
  const investmentStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Agile Sprint Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={agileSprintSteps}
            initialStep={agileSprintStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your agile sprint with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help development teams stay aligned with agile methodologies.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Investment Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={investmentSteps}
            initialStep={investmentStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Visualize your investment journey with this comprehensive stepped progress bar.</p>
          <p>The visual indicators help investors track progress through each stage of the investment process.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample30; 