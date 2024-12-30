"use client"
import React from "react";
import ProgressBar from "./_components/ProgressBar_20";

const Example1 = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Linear Progress Bar with Gradient Fill</h2>
      <ProgressBar
        progress={75} 
        color="bg-gradient-to-r from-pink-500 to-yellow-500" 
        backgroundColor="bg-gray-300" 
        animationDuration={2} 
        showCounter={true} 
        // onStart={() => console.log("Animation started")} 
        // onComplete={() => console.log("Animation completed")} 
      />
    </div>
  );
};

export default Example1;
