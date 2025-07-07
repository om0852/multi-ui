"use client";

import React, { useState } from "react";
import SteppedProgressBar_4 from "../tsx/SteppedProgressBar_4";

const SteppedProgressBarExample4 = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [status, setStatus] = useState("Starting your journey");

  // Define the steps for the onboarding process
  const steps = [
    { 
      label: "Welcome", 
      onClick: () => handleStepClick(1) 
    },
    { 
      label: "Profile", 
      onClick: () => handleStepClick(2) 
    },
    { 
      label: "Preferences", 
      onClick: () => handleStepClick(3) 
    },
    { 
      label: "Finish", 
      onClick: () => handleStepClick(4) 
    },
  ];

  // Handle step click
  const handleStepClick = (step: number) => {
    // Only allow clicking on completed steps or the next available step
    if (step <= activeStep + 1) {
      setActiveStep(step);
      updateStatus(step);
    }
  };

  // Handle next step button
  const handleNextStep = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
      updateStatus(activeStep + 1);
    }
  };

  // Handle previous step button
  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
      updateStatus(activeStep - 1);
    }
  };

  // Update status based on current step
  const updateStatus = (step: number) => {
    switch (step) {
      case 1:
        setStatus("Starting your journey");
        break;
      case 2:
        setStatus("Setting up your profile");
        break;
      case 3:
        setStatus("Customizing your experience");
        break;
      case 4:
        setStatus("All set and ready to go!");
        break;
      default:
        setStatus("Unknown step");
    }
  };

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-lg font-medium">User Onboarding Progress</h3>
        
        <div className="py-4">
          <SteppedProgressBar_4
            activeStep={activeStep}
            steps={steps}
            activeColor="bg-red-500"
            completedColor="bg-yellow-500"
            inactiveColor="bg-gray-200"
            animation={{ rotate: 360, scale: 1.2, transition: { duration: 0.5 } }}
          />
        </div>
        
        <div className="text-center">
          <p className="mb-4 text-gray-600 dark:text-gray-300">{status}</p>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={handlePrevStep}
              disabled={activeStep === 1}
              className={`rounded-md px-4 py-2 font-medium text-white ${
                activeStep === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNextStep}
              disabled={activeStep === steps.length}
              className={`rounded-md px-4 py-2 font-medium text-white ${
                activeStep === steps.length ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
              }`}
            >
              Next
            </button>
          </div>
        </div>
        
        {/* Step content */}
        <div className="mt-6 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
          {activeStep === 1 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Welcome to Our Platform</h4>
              <p className="text-gray-600 dark:text-gray-300">
                We&apos;re excited to have you on board! This quick setup will help you get started.
              </p>
            </div>
          )}
          
          {activeStep === 2 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Create Your Profile</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Tell us a bit about yourself so we can personalize your experience.
              </p>
            </div>
          )}
          
          {activeStep === 3 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Set Your Preferences</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Customize your experience by selecting your preferences and interests.
              </p>
            </div>
          )}
          
          {activeStep === 4 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">All Set!</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Your account is now fully set up. You&apos;re ready to start using our platform!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample4; 