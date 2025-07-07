"use client";

import React from "react";
import { StepsRoot } from "../tsx/SteppedProgressBar_18";

const SteppedProgressBarExample18 = () => {
  // Define the steps for the book writing process
  const bookWritingSteps = [
    "Outline",
    "First Draft",
    "Revision",
    "Editing",
    "Proofreading",
    "Publishing"
  ];

  // Define the steps for the home renovation process
  const homeRenovationSteps = [
    "Planning",
    "Demolition",
    "Structural Work",
    "Electrical & Plumbing",
    "Finishing",
    "Decoration"
  ];

  // Define fixed step values
  const bookWritingStep = 2;
  const homeRenovationStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Book Writing Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={bookWritingSteps}
            initialStep={bookWritingStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your book writing journey with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help authors stay motivated and organized.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Home Renovation Guide</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={homeRenovationSteps}
            initialStep={homeRenovationStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Navigate your home renovation project with this comprehensive stepped progress bar.</p>
          <p>The visual indicators help homeowners track progress and plan for upcoming phases.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample18; 