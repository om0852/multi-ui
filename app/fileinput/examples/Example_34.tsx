"use client";

import React from "react";
import FileUpload from "../_components/FileInput_34";

export default function Example_34() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-violet-900 mb-2">Game Development Assets</h1>
        <p className="text-violet-600">
          Game asset management and organization system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 3D Models & Textures */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-violet-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
              🎮
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-violet-900">
                3D Models & Textures
              </label>
              <span className="text-sm text-violet-500">Game assets and materials</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={50}
            accept=".fbx,.obj,.blend,.png,.jpg,.psd"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-violet-600">
            Upload 3D models, textures, and materials
          </p>
        </div>

        {/* Audio Files */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-indigo-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
              🎵
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-indigo-900">
                Audio Files
              </label>
              <span className="text-sm text-indigo-500">Sound effects and music</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={100}
            accept=".wav,.mp3,.ogg"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-indigo-600">
            Upload sound effects, music, and voice-overs
          </p>
        </div>

        {/* Animation Files */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-blue-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              🎬
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-blue-900">
                Animation Files
              </label>
              <span className="text-sm text-blue-500">Character and object animations</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={30}
            accept=".fbx,.anim,.blend"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-blue-600">
            Upload character and object animations
          </p>
        </div>

        {/* Project Files */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-cyan-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
              📁
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-cyan-900">
                Project Files
              </label>
              <span className="text-sm text-cyan-500">Game engine and source files</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".unitypackage,.uproject,.blend,.ma"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-cyan-600">
            Upload Unity, Unreal, and source files
          </p>
        </div>
      </div>
    </div>
  );
}
