"use client";

import React, { useState } from "react";
import SteppedProgressBar_3 from "../tsx/SteppedProgressBar_3";

const SteppedProgressBarExample3 = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [status, setStatus] = useState("Project planning phase");

  // Define the steps for the project management process
  const steps = [
    { 
      label: "Planning", 
      onClick: () => handleStepClick(1) 
    },
    { 
      label: "Design", 
      onClick: () => handleStepClick(2) 
    },
    { 
      label: "Development", 
      onClick: () => handleStepClick(3) 
    },
    { 
      label: "Testing", 
      onClick: () => handleStepClick(4) 
    },
    { 
      label: "Deployment", 
      onClick: () => handleStepClick(5) 
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
        setStatus("Project planning phase");
        break;
      case 2:
        setStatus("Design and prototyping phase");
        break;
      case 3:
        setStatus("Development and implementation phase");
        break;
      case 4:
        setStatus("Testing and quality assurance phase");
        break;
      case 5:
        setStatus("Deployment and maintenance phase");
        break;
      default:
        setStatus("Unknown phase");
    }
  };

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-lg font-medium">Project Management Progress</h3>
        
        <div className="py-4">
          <SteppedProgressBar_3
            activeStep={activeStep}
            steps={steps}
            activeColor="bg-purple-500"
            completedColor="bg-teal-500"
            inactiveColor="bg-gray-400"
            animation={{ scale: 1.1, rotate: 0, transition: { duration: 0.5 } }}
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
              <h4 className="mb-2 text-lg font-medium">Planning Phase</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Define project scope, objectives, and requirements. Create a project plan and timeline.
              </p>
            </div>
          )}
          
          {activeStep === 2 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Design Phase</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Create wireframes, mockups, and prototypes. Define the architecture and user experience.
              </p>
            </div>
          )}
          
          {activeStep === 3 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Development Phase</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Implement the design and develop the product according to specifications.
              </p>
            </div>
          )}
          
          {activeStep === 4 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Testing Phase</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Perform quality assurance testing, identify and fix bugs, and ensure the product meets requirements.
              </p>
            </div>
          )}
          
          {activeStep === 5 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Deployment Phase</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Deploy the product to production, provide training, and establish maintenance procedures.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample3; 