"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_25";

type AnimationType = "folder" | "file" | "list" | "grid";

export default function Example_25() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("folder");

  const animations: AnimationType[] = ["folder", "file", "list", "grid"];
  const viewDescriptions = {
    folder: "Folder opening transition",
    file: "File selection effect",
    list: "List view expansion",
    grid: "Grid view layout",
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-gray-50 to-slate-100 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 text-center">
          File Explorer Dialog
          <span className="inline-block ml-2">📁</span>
        </h2>
        <p className="text-slate-600 text-center text-sm">
          Browse and manage files with smooth transitions
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-lg ${
                currentAnimation === animation
                  ? "bg-slate-800 text-white shadow-slate-200"
                  : "bg-white text-slate-700 hover:bg-slate-50"
              } transition-all duration-200 shadow-sm border border-slate-200`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Open File Browser
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              File Browser
            </StyledDialogHeader>
            <StyledDialogDescription>
              Using {currentAnimation} view: {viewDescriptions[currentAnimation]}.
              Try different views to explore your files!
            </StyledDialogDescription>
            <div className="my-6">
              <div className="flex items-center gap-2 mb-4 p-2 bg-slate-100 rounded-lg">
                <button className="p-2 hover:bg-slate-200 rounded">
                  ⬅️
                </button>
                <button className="p-2 hover:bg-slate-200 rounded">
                  ➡️
                </button>
                <div className="flex-1 px-3 py-1.5 bg-white rounded border border-slate-200">
                  /Documents/Projects
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="text-slate-400 mb-1">📁</div>
                  <div className="text-sm text-slate-700">Documents</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="text-slate-400 mb-1">📁</div>
                  <div className="text-sm text-slate-700">Images</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="text-slate-400 mb-1">📄</div>
                  <div className="text-sm text-slate-700">notes.txt</div>
                </div>
              </div>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Files selected!");
                }}
                className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 
                  transition-colors shadow-sm"
              >
                Select
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-slate-900 font-semibold mb-2">
          About this Dialog
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Dialog_25 is designed for file management interfaces. It features smooth 
          transitions between different view modes (folder, file, list, grid) and 
          includes a navigation bar, file/folder grid, and intuitive controls. The 
          design emphasizes clarity and ease of use while maintaining a professional 
          appearance suitable for file management tasks.
        </p>
      </div>
    </div>
  );
}
