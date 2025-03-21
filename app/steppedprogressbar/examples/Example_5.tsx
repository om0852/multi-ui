"use client";

import React, { useState } from "react";
import SteppedProgressBar_5 from "../_components/SteppedProgressBar_5";

const SteppedProgressBarExample5 = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [status, setStatus] = useState("Preparing your application");

  // Define the steps for the job application process
  const steps = [
    { 
      label: "Resume", 
      onClick: () => handleStepClick(1) 
    },
    { 
      label: "Details", 
      onClick: () => handleStepClick(2) 
    },
    { 
      label: "Skills", 
      onClick: () => handleStepClick(3) 
    },
    { 
      label: "Submit", 
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
        setStatus("Preparing your application");
        break;
      case 2:
        setStatus("Filling in personal details");
        break;
      case 3:
        setStatus("Highlighting your skills and experience");
        break;
      case 4:
        setStatus("Reviewing and submitting your application");
        break;
      default:
        setStatus("Unknown step");
    }
  };

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-lg font-medium">Job Application Process</h3>
        
        <div className="py-4">
          <SteppedProgressBar_5
            activeStep={activeStep}
            steps={steps}
            activeColor="bg-blue-500"
            completedColor="bg-green-500"
            inactiveColor="bg-gray-200"
            animation={{ scale: 1.5, rotate: [0, 10, -10, 0], transition: { duration: 0.6 } }}
          />
        </div>
        
        <div className="text-center">
          <p className="mb-4 text-gray-600 dark:text-gray-300">{status}</p>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={handlePrevStep}
              disabled={activeStep === 1}
              className={`rounded-md px-4 py-2 font-medium text-white ${
                activeStep === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNextStep}
              disabled={activeStep === steps.length}
              className={`rounded-md px-4 py-2 font-medium text-white ${
                activeStep === steps.length ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
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
              <h4 className="mb-2 text-lg font-medium">Upload Your Resume</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Upload your resume or CV to start the application process. We accept PDF, DOC, or DOCX formats.
              </p>
            </div>
          )}
          
          {activeStep === 2 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Personal Details</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Provide your contact information, education history, and work experience.
              </p>
            </div>
          )}
          
          {activeStep === 3 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Skills Assessment</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Highlight your relevant skills, certifications, and any additional qualifications.
              </p>
            </div>
          )}
          
          {activeStep === 4 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Review and Submit</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Review all your information before submitting your application. You won&apos;t be able to make changes after submission.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample5; 