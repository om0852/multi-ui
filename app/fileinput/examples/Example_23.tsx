"use client";

import React from "react";
import FileUpload from "../_components/FileInput_23";

export default function Example_23() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-rose-900 to-slate-900">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-rose-300 mb-2">Music Production Upload</h1>
        <p className="text-rose-200/80">
          Upload and manage your music production files
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Audio Tracks */}
        <div className="bg-slate-800/50 p-6 rounded-xl border border-rose-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-rose-300">
              Audio Tracks
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".wav,.mp3,.aiff"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-rose-300/70">Upload WAV, MP3, or AIFF files</p>
        </div>

        {/* MIDI Files */}
        <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-purple-300">
              MIDI Files
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={20}
            accept=".mid,.midi"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-purple-300/70">Upload MIDI sequences and patterns</p>
        </div>

        {/* Sample Packs */}
        <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-blue-300">
              Sample Packs
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".zip,.rar"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-blue-300/70">Upload sample and sound packs</p>
        </div>

        {/* Project Files */}
        <div className="bg-slate-800/50 p-6 rounded-xl border border-emerald-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-emerald-300">
              Project Files
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".als,.flp,.logic,.reason"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-emerald-300/70">Upload DAW project files</p>
        </div>
      </div>
    </div>
  );
}
