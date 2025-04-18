"use client";

import React from "react";
import FileUpload from "../_components/FileInput_18";

export default function Example_18() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">3D Model Upload</h1>
        <p className="text-gray-300">
          Specialized interface for 3D assets
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 3D Models */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-500/30 shadow-lg transform hover:scale-[1.02] transition-transform">
          <label className="block text-lg font-medium text-blue-400 mb-4">
            3D Models
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".obj,.fbx,.gltf"
            allowMultiple={true}
          />
        </div>

        {/* Textures */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/30 shadow-lg transform hover:scale-[1.02] transition-transform">
          <label className="block text-lg font-medium text-purple-400 mb-4">
            Textures
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".png,.jpg,.psd"
            allowMultiple={true}
          />
        </div>

        {/* Materials */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-emerald-500/30 shadow-lg transform hover:scale-[1.02] transition-transform">
          <label className="block text-lg font-medium text-emerald-400 mb-4">
            Materials
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".mtl,.mat"
            allowMultiple={true}
          />
        </div>

        {/* Animations */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-500/30 shadow-lg transform hover:scale-[1.02] transition-transform">
          <label className="block text-lg font-medium text-amber-400 mb-4">
            Animations
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={3}
            accept=".anim,.fbx"
            allowMultiple={true}
          />
        </div>
      </div>
    </div>
  );
}
