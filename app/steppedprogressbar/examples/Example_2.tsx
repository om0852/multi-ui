"use client";

import React, { useState } from "react";
import SteppedProgressBar_2 from "../tsx/SteppedProgressBar_2";

const SteppedProgressBarExample2 = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [status, setStatus] = useState("Select your product");

  // Define the steps for the checkout process
  const steps = [
    { 
      label: "Product", 
      onClick: () => handleStepClick(1) 
    },
    { 
      label: "Cart", 
      onClick: () => handleStepClick(2) 
    },
    { 
      label: "Shipping", 
      onClick: () => handleStepClick(3) 
    },
    { 
      label: "Payment", 
      onClick: () => handleStepClick(4) 
    },
    { 
      label: "Confirm", 
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
        setStatus("Select your product");
        break;
      case 2:
        setStatus("Review your cart");
        break;
      case 3:
        setStatus("Enter shipping information");
        break;
      case 4:
        setStatus("Enter payment details");
        break;
      case 5:
        setStatus("Confirm your order");
        break;
      default:
        setStatus("Unknown step");
    }
  };

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-lg font-medium">Checkout Progress Bar</h3>
        
        <div className="py-4">
          <SteppedProgressBar_2
            activeStep={activeStep}
            steps={steps}
            activeColor="bg-blue-500"
            completedColor="bg-green-500"
            inactiveColor="bg-gray-300"
            animation={{ scale: 1.2, transition: { duration: 0.3 } }}
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
              <h4 className="mb-2 text-lg font-medium">Select Your Product</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Browse our catalog and select the products you want to purchase.
              </p>
            </div>
          )}
          
          {activeStep === 2 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Review Your Cart</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Review the items in your cart, adjust quantities, or remove items.
              </p>
            </div>
          )}
          
          {activeStep === 3 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Shipping Information</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Enter your shipping address and select a shipping method.
              </p>
            </div>
          )}
          
          {activeStep === 4 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Payment Details</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Enter your payment information to proceed with the purchase.
              </p>
            </div>
          )}
          
          {activeStep === 5 && (
            <div>
              <h4 className="mb-2 text-lg font-medium">Confirm Your Order</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Review all information and confirm your order.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample2; 