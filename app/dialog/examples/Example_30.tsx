"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_30";

type AnimationType = "task" | "status" | "progress" | "check";

export default function Example_30() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("task");

  const animations: AnimationType[] = ["task", "status", "progress", "check"];
  const taskDescriptions = {
    task: "Manage your tasks",
    status: "Update task status",
    progress: "Track progress",
    check: "Complete tasks",
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Task Management Dialog
          <span className="inline-block ml-2">🗂️</span>
        </h2>
        <p className="text-gray-600 text-center text-sm">
          Organize your tasks with smooth transitions
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-lg ${
                currentAnimation === animation
                  ? "bg-gray-900 text-white shadow-gray-200"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              } transition-all duration-200 shadow-sm border border-gray-100`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Manage Tasks
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              Task Overview
            </StyledDialogHeader>
            <StyledDialogDescription>
              Experience the {currentAnimation} animation: {taskDescriptions[currentAnimation]}.
              Choose different animations to see how your tasks come to life!
            </StyledDialogDescription>
            <div className="my-6">
              <p className="text-gray-600 font-semibold">
                Dialog_30 features:
              </p>
              <ul className="list-none mt-2 space-y-2 text-gray-700">
                <li>📋 Task management</li>
                <li>📈 Status updates</li>
                <li>📊 Progress tracking</li>
                <li>✅ Task completion</li>
                <li>🗂️ Task-inspired design</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Tasks managed successfully!");
                }}
                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 
                  transition-colors shadow-sm shadow-gray-200"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-gray-900 font-semibold mb-2">
          About this Dialog
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Dialog_30 is designed for task management applications. It features 
          smooth transitions for managing tasks, updating statuses, tracking progress, 
          and completing tasks. The interface includes task-themed elements, 
          intuitive navigation, and a clean color palette that enhances the 
          user experience.
        </p>
      </div>
    </div>
  );
}
