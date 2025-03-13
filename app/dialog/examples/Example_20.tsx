"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_20";

type AnimationType = "like" | "share" | "comment" | "story";

export default function Example_20() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("like");

  const animations: AnimationType[] = ["like", "share", "comment", "story"];

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-pink-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Social Dialog
        </h2>
        <div className="flex flex-wrap gap-3">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-full font-medium ${
                currentAnimation === animation
                  ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:shadow-md"
              } border border-gray-200 dark:border-gray-700 transition-all duration-200`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Create New Post
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={currentAnimation}
        >
          <StyledDialogHeader>
            Share Your Moment
          </StyledDialogHeader>
          <StyledDialogDescription>
            Create a new post to share with your followers.
            Add photos, videos, or express your thoughts!
          </StyledDialogDescription>
          <div className="my-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  👤
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-200">
                📷 Photo
              </button>
              <button className="flex-1 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-200">
                🎥 Video
              </button>
              <button className="flex-1 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-200">
                😊 Feeling
              </button>
            </div>
          </div>
          <StyledDialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="px-6 py-2 text-gray-600 dark:text-gray-300 font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setIsDialogOpen(false);
                alert("Post shared successfully!");
              }}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-medium rounded-full"
            >
              Share Now
            </button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}
