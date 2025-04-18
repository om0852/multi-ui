"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_9";

const SteppedProgressBarExample9 = () => {
  // Define the steps for the vacation planning process
  const vacationSteps = [
    "Choose Destination",
    "Book Flights",
    "Reserve Accommodation",
    "Plan Activities",
    "Pack Essentials"
  ];

  // Define the steps for the home buying process
  const homeBuyingSteps = [
    "Pre-Approval",
    "House Hunting",
    "Make an Offer",
    "Home Inspection",
    "Closing"
  ];

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-xl font-medium">Vacation Planning Guide</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={vacationSteps}
            initialStep={2}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>This premium stepped progress bar features gradient colors and smooth animations.</p>
          <p>Track your vacation planning progress with this visually appealing interface.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-xl font-medium text-white">Home Buying Process</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={homeBuyingSteps}
            initialStep={1}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Navigate through the complex home buying process with this interactive guide.</p>
          <p>The enhanced visual design helps clarify the steps and your current progress.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample9; 