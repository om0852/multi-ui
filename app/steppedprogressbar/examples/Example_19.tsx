"use client";

import React from "react";
import { StepsRoot } from "../_components/SteppedProgressBar_19";

const SteppedProgressBarExample19 = () => {
  // Define the steps for the podcast production process
  const podcastProductionSteps = [
    "Topic Research",
    "Script Writing",
    "Recording",
    "Editing",
    "Publishing",
    "Promotion"
  ];

  // Define the steps for the language learning process
  const languageLearningSteps = [
    "Basics",
    "Vocabulary Building",
    "Grammar",
    "Listening",
    "Speaking",
    "Fluency"
  ];

  // Define fixed step values
  const podcastProductionStep = 2;
  const languageLearningStep = 3;

  return (
    <div className="w-full space-y-8 p-4">
      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-medium">Podcast Production Workflow</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={podcastProductionSteps}
            initialStep={podcastProductionStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Track your podcast production process with this interactive stepped progress bar.</p>
          <p>Each phase is clearly visualized to help podcasters stay organized and consistent.</p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-center text-2xl font-medium text-white">Language Learning Journey</h3>
        
        <div className="py-4">
          <StepsRoot
            steps={languageLearningSteps}
            initialStep={languageLearningStep}
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Track your language learning progress with this motivational stepped progress bar.</p>
          <p>The visual indicators help learners stay motivated and celebrate milestones.</p>
        </div>
      </div>
    </div>
  );
};

export default SteppedProgressBarExample19; 