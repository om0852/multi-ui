"use client";

import React from "react";
import FileUpload from "../_components/FileInput_9";

export default function Example_9() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Animated Card Upload</h1>
        <p className="text-gray-600">
          Interactive card-based interface with smooth animations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Portfolio Upload */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
          <label className="block text-lg font-medium text-gray-800 mb-4">
            Portfolio Projects
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop your portfolio files"
            dragActiveText="Release to showcase your work"
            className="w-full"
          />
        </div>

        {/* Blog Assets Upload */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl">
          <label className="block text-lg font-medium text-gray-800 mb-4">
            Blog Assets
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop your blog assets"
            dragActiveText="Release to enhance your blog"
            className="w-full"
          />
        </div>

        {/* Social Media Content */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl">
          <label className="block text-lg font-medium text-gray-800 mb-4">
            Social Media Content
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop your social media content"
            dragActiveText="Release to share your story"
            className="w-full"
          />
        </div>

        {/* Presentation Files */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
          <label className="block text-lg font-medium text-gray-800 mb-4">
            Presentation Files
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop your presentations"
            dragActiveText="Release to prepare your pitch"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
