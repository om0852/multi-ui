"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_23";

const SteppedProgressBarExample23 = () => {
  // Define the steps for the film production process
  const filmProductionSteps = [
    "Script Development",
    "Pre-Production",
    "Principal Photography",
    "Post-Production",
    "Distribution",
    "Exhibition"
  ];

  // Define the steps for the education journey
  const educationSteps = [
    "Elementary",
    "Middle School",
    "High School",
    "Undergraduate",
    "Graduate",
    "Continuing Education"
  ];

  // Define fixed step values
  const filmProductionStep = 2;
  const educationStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Film Production Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={filmProductionSteps}
            initialStep={filmProductionStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your film production with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help filmmakers stay organized throughout the production process.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Educational Journey</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={educationSteps}
            initialStep={educationStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Visualize educational progress with this comprehensive stepped progress bar.</p>
          <p>The visual indicators help track academic achievements and milestones throughout a lifelong learning journey.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample23; 