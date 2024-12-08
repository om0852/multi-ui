"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "./_components/ProgressBar_1";
import AnimatedProgressBar from "./_components/ProgressBar_2";
import StateBasedProgressBar from "./_components/ProgressBar_3";

const page = () => {
  const [progress, setProgress] = useState(0);

  // Simulate progress updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  const steps = [
    {
      label: "Start",
      value: 0,
      onClick: () => console.log("Step 1 Clicked"),
    },
    {
      label: "In Progress",
      value: 1,
      onClick: () => console.log("Step 2 Clicked"),
    },
    {
      label: "Completed",
      value: 2,
      onClick: () => console.log("Step 3 Clicked"),
    },
    {
      label: "Done",
      value: 3,
      onClick: () => console.log("Step 4 Clicked"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <StateBasedProgressBar
        steps={steps}
        activeColor="bg-blue-600"
        completedColor="bg-green-400"
        inactiveColor="bg-gray-300"
      />
    </div>
  );
  return (
    <div>
      {/* <ProgressBar
        progress={10}
        color="bg-red-500"
        animationDuration={1}
      />
      <ProgressBar
        progress={50}
        color="bg-yellow-500"
        animationDuration={1.5}
      />
      <ProgressBar progress={75} color="bg-green-500" animationDuration={2} />
      <ProgressBar
        progress={100}
        color="bg-blue-600"
        animationDuration={2}
        showCounter
      />
      <ProgressBar
        progress={60}
        color="bg-purple-600"
        animationDuration={1.2}
        showCounter
      />
      <ProgressBar
        progress={40}
        height="h-2"
        color="bg-indigo-500"
        animationDuration={0.8}
      />
      <ProgressBar
        progress={80}
        height="h-6"
        color="bg-teal-500"
        animationDuration={1.8}
        showCounter
      />
      <ProgressBar
        progress={90}
        height="h-8"
        color="bg-pink-500"
        animationDuration={2.5}
      />
      <ProgressBar
        progress={20}
        rounded={false}
        color="bg-orange-400"
        backgroundColor="bg-gray-400"
        animationDuration={1.1}
      />
      <ProgressBar
        progress={85}
        height="h-5"
        color="bg-cyan-500"
        backgroundColor="bg-gray-300"
        animationDuration={1.5}
        showCounter
      /> */}
      <AnimatedProgressBar progress={progress} />

    </div>
  );
};

export default page;
