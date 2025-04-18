"use client";

import React from "react";
import FileUpload from "../_components/FileInput_8";

export default function Example_8() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-900">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Neon File Upload</h1>
        <p className="text-gray-400">
          Vibrant neon-styled interface for file uploads
        </p>
      </div>

      <div className="space-y-8">
        {/* Gaming Assets Upload */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-pink-500">
            Gaming Assets
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop your gaming assets here"
            dragActiveText="Release to power up!"
            className="w-full"
          />
        </div>

        {/* Stream Overlays Upload */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-cyan-500">
            Stream Overlays
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop your stream overlays here"
            dragActiveText="Release to add overlays"
            className="w-full"
          />
        </div>

        {/* Emotes Upload */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-purple-500">
            Emotes
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop your emotes here"
            dragActiveText="Release to add emotes"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
