"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_24";

type AnimationType = "toast" | "alert" | "badge" | "pulse";

export default function Example_24() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("toast");

  const animations: AnimationType[] = ["toast", "alert", "badge", "pulse"];
  const notificationDescriptions = {
    toast: "Slide-in notification",
    alert: "Important message pop",
    badge: "Achievement unlock",
    pulse: "Attention grabber",
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-orange-50 to-red-50 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-900 text-center">
          Notification Dialog
          <span className="inline-block ml-2">🔔</span>
        </h2>
        <p className="text-red-600 text-center text-sm">
          Experience different notification styles and animations
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-lg ${
                currentAnimation === animation
                  ? "bg-red-500 text-white shadow-red-200"
                  : "bg-white text-red-500 hover:bg-red-50"
              } transition-all duration-200 shadow-sm border border-red-100`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Show Notification
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              New Notification
            </StyledDialogHeader>
            <StyledDialogDescription>
              Viewing {currentAnimation} style: {notificationDescriptions[currentAnimation]}.
              Try different notification types to see various alert styles!
            </StyledDialogDescription>
            <div className="my-6 space-y-4">
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white">
                  🔔
                </div>
                <div>
                  <h4 className="font-medium text-red-900">Important Update</h4>
                  <p className="text-sm text-red-600">
                    Your system has new notifications waiting for review.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-orange-500 mb-1">⚡️ Quick Alert</div>
                  <div className="text-sm text-orange-700">System update ready</div>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-red-500 mb-1">🎯 Priority</div>
                  <div className="text-sm text-red-700">Action required</div>
                </div>
              </div>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                Dismiss
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Notifications marked as read!");
                }}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 
                  transition-colors shadow-sm shadow-red-200"
              >
                Mark as Read
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-red-100">
        <h3 className="text-red-900 font-semibold mb-2">
          About this Dialog
        </h3>
        <p className="text-red-600 text-sm leading-relaxed">
          Dialog_24 specializes in notification and alert displays. It features 
          various animation styles for different types of notifications, from subtle 
          toasts to attention-grabbing alerts. The design includes visual hierarchy 
          for different priority levels, clear action buttons, and smooth transitions 
          that enhance the notification experience without being intrusive.
        </p>
      </div>
    </div>
  );
}
