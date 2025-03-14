"use client";

import React from "react";
import FileUpload from "../_components/FileInput_35";

export default function Example_35() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-fuchsia-900 mb-2">Podcast Production Hub</h1>
        <p className="text-fuchsia-600">
          Complete podcast episode management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Raw Audio Recordings */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-fuchsia-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600">
              🎙️
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-fuchsia-900">
                Raw Audio Recordings
              </label>
              <span className="text-sm text-fuchsia-500">Unedited episode recordings</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".wav,.mp3,.aiff,.m4a"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-fuchsia-600">
            Upload raw podcast recordings
          </p>
        </div>

        {/* Music & Sound Effects */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-pink-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
              🎵
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-pink-900">
                Music & Sound Effects
              </label>
              <span className="text-sm text-pink-500">Background tracks and effects</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={50}
            accept=".wav,.mp3,.m4a"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-pink-600">
            Upload intro music and sound effects
          </p>
        </div>

        {/* Episode Artwork */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-rose-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
              🎨
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-rose-900">
                Episode Artwork
              </label>
              <span className="text-sm text-rose-500">Cover art and thumbnails</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".jpg,.jpeg,.png,.psd"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-rose-600">
            Upload episode cover art and graphics
          </p>
        </div>

        {/* Show Notes */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-purple-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
              📝
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-purple-900">
                Show Notes
              </label>
              <span className="text-sm text-purple-500">Episode documentation</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".pdf,.doc,.docx,.txt,.md"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-purple-600">
            Upload show notes and transcripts
          </p>
        </div>
      </div>
    </div>
  );
}
