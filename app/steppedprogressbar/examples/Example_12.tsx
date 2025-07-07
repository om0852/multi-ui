"use client";

import React, { useState } from "react";
import { StepsRoot } from "../tsx/SteppedProgressBar_12";

const SteppedProgressBarExample12 = () => {
  // Define the steps for the software development process
  const developmentSteps = [
    "Requirements",
    "Design",
    "Development",
    "Testing",
    "Deployment",
    "Maintenance"
  ];

  // Define the steps for the customer onboarding process
  const onboardingSteps = [
    "Sign Up",
    "Profile Setup",
    "Preferences",
    "Tutorial",
    "Connect Accounts",
    "Welcome"
  ];

  // State to track active step for each example
  const [devActiveStep, setDevActiveStep] = useState(2);
  const [onboardingActiveStep, setOnboardingActiveStep] = useState(3);

  // Navigation functions for development process
  const handleDevPrev = () => {
    setDevActiveStep((prev) => Math.max(0, prev - 1));
  };

  const handleDevNext = () => {
    setDevActiveStep((prev) => Math.min(developmentSteps.length - 1, prev + 1));
  };

  // Navigation functions for onboarding process
  const handleOnboardingPrev = () => {
    setOnboardingActiveStep((prev) => Math.max(0, prev - 1));
  };

  const handleOnboardingNext = () => {
    setOnboardingActiveStep((prev) => Math.min(onboardingSteps.length - 1, prev + 1));
  };

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Software Development Lifecycle</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={developmentSteps}
            initialStep={devActiveStep}
          />
        </div>
        
        <div className="mt-4 flex justify-center space-x-4">
          <button
            onClick={handleDevPrev}
            disabled={devActiveStep === 0}
            className="rounded-md bg-blue-100 px-4 py-2 text-blue-700 transition hover:bg-blue-200 disabled:opacity-50 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
          >
            Previous
          </button>
          <button
            onClick={handleDevNext}
            disabled={devActiveStep === developmentSteps.length - 1}
            className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Next
          </button>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your software development progress with this interactive stepped progress bar.</p>
          <p>Each step is clearly visualized with custom styling and animations.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Customer Onboarding</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={onboardingSteps}
            initialStep={onboardingActiveStep}
          />
        </div>
        
        <div className="mt-4 flex justify-center space-x-4">
          <button
            onClick={handleOnboardingPrev}
            disabled={onboardingActiveStep === 0}
            className="rounded-md bg-purple-900 px-4 py-2 text-purple-200 transition hover:bg-purple-800 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleOnboardingNext}
            disabled={onboardingActiveStep === onboardingSteps.length - 1}
            className="rounded-md bg-purple-500 px-4 py-2 text-white transition hover:bg-purple-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Guide your users through the onboarding process with this elegant stepped progress bar.</p>
          <p>The visual feedback helps users understand where they are in the process.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample12; 