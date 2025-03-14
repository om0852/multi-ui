"use client";

import React from "react";
import FileUpload from "../_components/FileInput_10";

export default function Example_10() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Glassmorphic Upload</h1>
        <p className="text-white/80">
          Modern glass-effect interface for file uploads
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Creative Assets Upload */}
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20">
          <label className="block text-lg font-medium text-white mb-4">
            Creative Assets
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop creative files here"
            dragActiveText="Release to unleash creativity"
            className="w-full"
          />
        </div>

        {/* Brand Resources Upload */}
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20">
          <label className="block text-lg font-medium text-white mb-4">
            Brand Resources
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop brand assets here"
            dragActiveText="Release to build your brand"
            className="w-full"
          />
        </div>

        {/* Marketing Materials */}
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20">
          <label className="block text-lg font-medium text-white mb-4">
            Marketing Materials
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop marketing files here"
            dragActiveText="Release to boost your reach"
            className="w-full"
          />
        </div>

        {/* Digital Products */}
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20">
          <label className="block text-lg font-medium text-white mb-4">
            Digital Products
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop digital products here"
            dragActiveText="Release to showcase products"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
