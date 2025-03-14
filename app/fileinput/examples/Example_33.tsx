"use client";

import React from "react";
import FileUpload from "../_components/FileInput_33";

export default function Example_33() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-stone-50 to-neutral-100">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900 mb-2">Architectural Design Files</h1>
        <p className="text-stone-600">
          Professional architectural project management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CAD Files */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              📐
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-stone-900">
                CAD Files
              </label>
              <span className="text-sm text-stone-500">Technical drawings</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={20}
            accept=".dwg,.dxf,.rvt,.rfa"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-stone-600">
            Upload AutoCAD and Revit files
          </p>
        </div>

        {/* 3D Models */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
              🏗️
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-stone-900">
                3D Models
              </label>
              <span className="text-sm text-stone-500">3D visualization files</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".skp,.3ds,.obj,.fbx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-stone-600">
            Upload SketchUp and 3D model files
          </p>
        </div>

        {/* Project Documentation */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              📋
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-stone-900">
                Project Documentation
              </label>
              <span className="text-sm text-stone-500">Specifications and reports</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={15}
            accept=".pdf,.doc,.docx,.xlsx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-stone-600">
            Upload project specifications and documentation
          </p>
        </div>

        {/* Presentation Materials */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
              🎨
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-stone-900">
                Presentation Materials
              </label>
              <span className="text-sm text-stone-500">Client presentations</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".pdf,.ppt,.pptx,.jpg,.png"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-stone-600">
            Upload renderings and presentation files
          </p>
        </div>
      </div>
    </div>
  );
}
