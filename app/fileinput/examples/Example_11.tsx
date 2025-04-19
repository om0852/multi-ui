"use client";

import React from "react";
import FileUpload from "../tsx/FileInput_11";

export default function Example_11() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-900">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-blue-400 mb-2">Futuristic File Upload</h1>
        <p className="text-gray-400">
          Next-gen interface for file management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* AI Model Upload */}
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-blue-500/20">
          <label className="block text-lg font-medium text-blue-400 mb-4">
            AI Model Files
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload AI model files"
            dragActiveText="Initialize upload sequence"
            className="w-full"
          />
        </div>

        {/* Neural Network Data */}
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-purple-500/20">
          <label className="block text-lg font-medium text-purple-400 mb-4">
            Neural Network Data
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload training data"
            dragActiveText="Commence data transfer"
            className="w-full"
          />
        </div>

        {/* Quantum Algorithms */}
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/20">
          <label className="block text-lg font-medium text-cyan-400 mb-4">
            Quantum Algorithms
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload quantum scripts"
            dragActiveText="Initiate quantum transfer"
            className="w-full"
          />
        </div>

        {/* Holographic Data */}
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-teal-500/20">
          <label className="block text-lg font-medium text-teal-400 mb-4">
            Holographic Data
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload holographic data"
            dragActiveText="Project data stream"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
