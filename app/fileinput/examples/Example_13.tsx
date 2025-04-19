"use client";

import React from "react";
import FileUpload from "../tsx/FileInput_13";

export default function Example_13() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Vibrant File Upload
        </h1>
        <p className="text-gray-600">
          Colorful and energetic interface for file management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Creative Assets */}
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-1 rounded-2xl">
          <div className="bg-white p-6 rounded-xl h-full">
            <label className="block text-lg font-medium text-pink-600 mb-4">
              Creative Assets
            </label>
            <FileUpload
              onFilesSelected={handleFilesSelected}
              uploadText="Upload creative files"
              dragActiveText="Release to unleash creativity"
              className="w-full"
            />
          </div>
        </div>

        {/* Visual Content */}
        <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-1 rounded-2xl">
          <div className="bg-white p-6 rounded-xl h-full">
            <label className="block text-lg font-medium text-purple-600 mb-4">
              Visual Content
            </label>
            <FileUpload
              onFilesSelected={handleFilesSelected}
              uploadText="Upload visual content"
              dragActiveText="Release to showcase visuals"
              className="w-full"
            />
          </div>
        </div>

        {/* Audio Files */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-1 rounded-2xl">
          <div className="bg-white p-6 rounded-xl h-full">
            <label className="block text-lg font-medium text-blue-600 mb-4">
              Audio Files
            </label>
            <FileUpload
              onFilesSelected={handleFilesSelected}
              uploadText="Upload audio files"
              dragActiveText="Release to drop the beat"
              className="w-full"
            />
          </div>
        </div>

        {/* Motion Graphics */}
        <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-1 rounded-2xl">
          <div className="bg-white p-6 rounded-xl h-full">
            <label className="block text-lg font-medium text-teal-600 mb-4">
              Motion Graphics
            </label>
            <FileUpload
              onFilesSelected={handleFilesSelected}
              uploadText="Upload motion files"
              dragActiveText="Release to set in motion"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
