"use client";

import React from "react";
import FileUpload from "../tsx/FileInput_7";

export default function Example_7() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Bubble Effect Upload</h1>
        <p className="text-gray-600">
          Playful bubble-style interface for file uploads
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Photo Gallery Upload */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <label className="block text-lg font-medium text-gray-700 mb-4">
            Photo Gallery
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop your photos here"
            dragActiveText="Release to add to gallery"
            className="w-full"
          />
        </div>

        {/* Video Upload */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <label className="block text-lg font-medium text-gray-700 mb-4">
            Video Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop your video files here"
            dragActiveText="Release to upload videos"
            className="w-full"
          />
        </div>

        {/* Music Upload */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <label className="block text-lg font-medium text-gray-700 mb-4">
            Music Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop your music files here"
            dragActiveText="Release to upload music"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
