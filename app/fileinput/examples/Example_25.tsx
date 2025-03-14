"use client";

import React from "react";
import FileUpload from "../_components/FileInput_25";

export default function Example_25() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-red-900 via-red-950 to-black">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-red-300 mb-2">Video Production Upload</h1>
        <p className="text-red-200/80">
          Professional video content management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Raw Footage */}
        <div className="bg-black/40 p-6 rounded-xl border border-red-500/20 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-red-300">
              Raw Footage
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={20}
            accept=".mov,.r3d,.braw,.ari"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-red-300/70">Upload raw camera footage</p>
        </div>

        {/* Edited Videos */}
        <div className="bg-black/40 p-6 rounded-xl border border-orange-500/20 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-orange-300">
              Edited Videos
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".mp4,.mov,.avi,.wmv"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-orange-300/70">Upload final edited videos</p>
        </div>

        {/* Project Files */}
        <div className="bg-black/40 p-6 rounded-xl border border-yellow-500/20 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-yellow-300">
              Project Files
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".prproj,.fcpx,.dpp"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-yellow-300/70">Upload editing project files</p>
        </div>

        {/* Assets */}
        <div className="bg-black/40 p-6 rounded-xl border border-amber-500/20 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-amber-300">
              Assets
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={50}
            accept=".png,.jpg,.wav,.mp3"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-amber-300/70">Upload graphics, music, and effects</p>
        </div>
      </div>
    </div>
  );
}
