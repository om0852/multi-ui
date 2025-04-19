"use client";

import React from "react";
import FileUpload from "../tsx/FileInput_15";

export default function Example_15() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Circular Container Upload</h1>
        <p className="text-gray-600">
          Elegant circular design for file management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <div className="w-44 h-44">
                <FileUpload
                  onFilesSelected={handleFilesSelected}
                  uploadText="Upload avatar"
                  dragActiveText="Drop to set avatar"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <label className="mt-4 text-sm font-medium text-gray-700">
            Profile Picture
          </label>
        </div>

        {/* Team Logo */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <div className="w-44 h-44">
                <FileUpload
                  onFilesSelected={handleFilesSelected}
                  uploadText="Upload logo"
                  dragActiveText="Drop to set logo"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <label className="mt-4 text-sm font-medium text-gray-700">
            Team Logo
          </label>
        </div>

        {/* Brand Icon */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <div className="w-44 h-44">
                <FileUpload
                  onFilesSelected={handleFilesSelected}
                  uploadText="Upload icon"
                  dragActiveText="Drop to set icon"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <label className="mt-4 text-sm font-medium text-gray-700">
            Brand Icon
          </label>
        </div>
      </div>
    </div>
  );
}
