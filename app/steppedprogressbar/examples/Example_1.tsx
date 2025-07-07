"use client";

import React, { useState } from "react";
import SteppedProgressBar_1 from "../tsx/SteppedProgressBar_1";

const SteppedProgressBarExample1 = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [status, setStatus] = useState("Starting the process");

  // Define the steps for the process
  const steps = [
    { 
      label: "Start", 
      onClick: () => handleStepClick(1) 
    },
    { 
      label: "Details", 
      onClick: () => handleStepClick(2) 
    },
    { 
      label: "Review", 
      onClick: () => handleStepClick(3) 
    },
    { 
      label: "Complete", 
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
        setStatus("Starting the process");
        break;
      case 2:
        setStatus("Filling in the details");
        break;
      case 3:
        setStatus("Reviewing your information");
        break;
      case 4:
        setStatus("Process completed successfully!");
        break;
      default:
        setStatus("Unknown step");
    }
  };

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-lg font-medium">Basic Stepped Progress Bar</h3>
        
        <div className="py-4">
          <SteppedProgressBar_1
            activeStep={activeStep}
            steps={steps}
            activeColor="bg-purple-500"
            completedColor="bg-teal-500"
            inactiveColor="bg-gray-400"
            animation={{ opacity: 1, translateY: -10, transition: { duration: 0.4 } }}
          />
        </div>
        
        <div className="text-center">
          <p className="mb-4 text-gray-600 dark:text-gray-300">{status}</p>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={handlePrevStep}
              disabled={activeStep === 1}
              className={`rounded-md px-4 py-2 font-medium text-white ${
                activeStep === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-500 hover:bg-purple-600'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNextStep}
              disabled={activeStep === steps.length}
              className={`rounded-md px-4 py-2 font-medium text-white ${
                activeStep === steps.length ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-500 hover:bg-purple-600'
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
              <h4 className="mb-2 text-lg font-medium">Welcome to the Process</h4>
              <p className="text-gray-600 dark:text-gray-300">
                This is the first step of our process. Click Next to continue.
              </p>
            </div>
          )}
          
          {activeStep === 2 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Enter Your Details</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Please provide the necessary information for this step.
              </p>
            </div>
          )}
          
          {activeStep === 3 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Review Your Information</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Please review all the information you&apos;ve provided before finalizing.
              </p>
            </div>
          )}
          
          {activeStep === 4 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Process Complete!</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Congratulations! You have successfully completed all the steps.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample1; 