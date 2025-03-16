"use client";
import React, { useState } from 'react';
import ProgressBar_3 from '../_components/ProgressBar_3';

export default function ProgressBarExample() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepStatus, setStepStatus] = useState('');

  // Define the steps for the checkout process
  const checkoutSteps = [
    { label: 'Cart', value: 0, onClick: () => handleStepClick(0) },
    { label: 'Shipping', value: 25, onClick: () => handleStepClick(1) },
    { label: 'Payment', value: 50, onClick: () => handleStepClick(2) },
    { label: 'Review', value: 75, onClick: () => handleStepClick(3) },
    { label: 'Complete', value: 100, onClick: () => handleStepClick(4) },
  ];

  // Handle step click
  const handleStepClick = (index: number) => {
    // Only allow clicking on completed steps or the next available step
    if (index <= currentStepIndex + 1) {
      setCurrentStepIndex(index);
    }
  };

  // Handle next step button
  const handleNextStep = () => {
    if (currentStepIndex < checkoutSteps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  // Handle previous step button
  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  // Callbacks for the progress bar
  const handleStart = (stepIndex: number) => {
    setStepStatus(`Moving to ${checkoutSteps[stepIndex].label} step...`);
  };

  const handleComplete = (stepIndex: number) => {
    setStepStatus(`Now at ${checkoutSteps[stepIndex].label} step`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Checkout Process
        </h1>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <ProgressBar_3 
              steps={checkoutSteps}
              activeColor="bg-blue-600"
              completedColor="bg-green-500"
              inactiveColor="bg-gray-200"
              onStart={handleStart}
              onComplete={handleComplete}
            />
            
            <p className="text-sm text-center text-gray-600 italic">{stepStatus}</p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg">
            {currentStepIndex === 0 && (
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
                <p>Review your items and proceed to shipping</p>
              </div>
            )}
            
            {currentStepIndex === 1 && (
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
                <p>Enter your shipping address and delivery preferences</p>
              </div>
            )}
            
            {currentStepIndex === 2 && (
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
                <p>Select your payment method and enter payment details</p>
              </div>
            )}
            
            {currentStepIndex === 3 && (
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">Order Review</h2>
                <p>Review your order details before finalizing</p>
              </div>
            )}
            
            {currentStepIndex === 4 && (
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">Order Complete</h2>
                <p>Your order has been placed successfully!</p>
              </div>
            )}
          </div>
          
          <div className="flex justify-between">
            <button
              onClick={handlePrevStep}
              disabled={currentStepIndex === 0}
              className={`px-4 py-2 rounded-md font-medium ${
                currentStepIndex === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>
            
            <button
              onClick={handleNextStep}
              disabled={currentStepIndex === checkoutSteps.length - 1}
              className={`px-4 py-2 rounded-md font-medium text-white ${
                currentStepIndex === checkoutSteps.length - 1 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {currentStepIndex === checkoutSteps.length - 1 ? 'Completed' : 'Next Step'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
