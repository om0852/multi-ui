"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_29";

const SteppedProgressBarExample29 = () => {
  // Define the steps for the digital transformation process
  const digitalTransformationSteps = [
    "Assessment",
    "Strategy",
    "Roadmap",
    "Implementation",
    "Adoption",
    "Optimization"
  ];

  // Define the steps for the personal development journey
  const personalDevelopmentSteps = [
    "Self-Awareness",
    "Goal Setting",
    "Skill Acquisition",
    "Practice",
    "Feedback",
    "Mastery"
  ];

  // Define fixed step values
  const digitalTransformationStep = 2;
  const personalDevelopmentStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Digital Transformation Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={digitalTransformationSteps}
            initialStep={digitalTransformationStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your organization&apos;s digital transformation with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help leaders navigate the complex journey of technological change.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Personal Development Journey</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={personalDevelopmentSteps}
            initialStep={personalDevelopmentStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Visualize your personal growth with this comprehensive stepped progress bar.</p>
          <p>The visual indicators help track progress through each stage of personal development.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample29; 