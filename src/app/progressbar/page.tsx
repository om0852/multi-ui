"use client"
import React from "react";
import TextBasedProgressBar from "./_components/ProgressBar_22";

const Example1 = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Linear Progress Bar with Gradient Fill</h2>
      <TextBasedProgressBar
  progress={75} // Progress value (e.g., 75%)
  text="Processing..." // Custom text to display
  animationDuration={1} // Duration of animation in seconds
  showCounter={true} // Show percentage counter
/>    </div>
  );
};

export default Example1;
