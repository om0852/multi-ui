"use client";

import React from "react";
import { StepsRoot } from "../tsx/SteppedProgressBar_22";

const SteppedProgressBarExample22 = () => {
  // Define the steps for the graphic design process
  const designSteps = [
    "Client Brief",
    "Research",
    "Sketching",
    "Digital Design",
    "Client Review",
    "Finalization"
  ];

  // Define the steps for the moving process
  const movingSteps = [
    "Planning",
    "Packing",
    "Hiring Movers",
    "Moving Day",
    "Unpacking",
    "Settling In"
  ];

  // Define fixed step values
  const designStep = 2;
  const movingStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Graphic Design Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={designSteps}
            initialStep={designStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your design project with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help designers stay organized and meet client expectations.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Moving Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={movingSteps}
            initialStep={movingStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Organize your move with this comprehensive stepped progress bar.</p>
          <p>The visual indicators help keep track of all the important steps in the moving process.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample22; 