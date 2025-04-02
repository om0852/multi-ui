"use client";

import React from "react";
import FileUpload from "../tsx/FileInput_17";

export default function Example_17() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-900">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-green-400 mb-2 font-mono">Retro Gaming Upload</h1>
        <p className="text-green-200 font-mono">
          8-bit style file management interface
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Game ROMs */}
        <div className="bg-gray-800 p-6 rounded border-2 border-green-500">
          <label className="block text-lg font-mono font-medium text-green-400 mb-4">
            Game ROMs
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".rom,.bin"
            allowMultiple={true}
          />
          <p className="mt-2 text-xs text-green-500 font-mono">
            READY PLAYER ONE
          </p>
        </div>

        {/* Save Files */}
        <div className="bg-gray-800 p-6 rounded border-2 border-blue-500">
          <label className="block text-lg font-mono font-medium text-blue-400 mb-4">
            Save Files
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".sav,.dat"
            allowMultiple={true}
          />
          <p className="mt-2 text-xs text-blue-500 font-mono">
            CONTINUE GAME
          </p>
        </div>

        {/* Cheat Codes */}
        <div className="bg-gray-800 p-6 rounded border-2 border-red-500">
          <label className="block text-lg font-mono font-medium text-red-400 mb-4">
            Cheat Codes
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={1}
            accept=".txt,.cht"
            allowMultiple={false}
          />
          <p className="mt-2 text-xs text-red-500 font-mono">
            POWER UP!
          </p>
        </div>

        {/* Custom Maps */}
        <div className="bg-gray-800 p-6 rounded border-2 border-purple-500">
          <label className="block text-lg font-mono font-medium text-purple-400 mb-4">
            Custom Maps
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={3}
            accept=".map,.lvl"
            allowMultiple={true}
          />
          <p className="mt-2 text-xs text-purple-500 font-mono">
            NEW LEVEL UNLOCKED
          </p>
        </div>
      </div>
    </div>
  );
}
