"use client";

import React from "react";
import FileUpload from "../_components/FileInput_26";

export default function Example_26() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-blue-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">Medical Records Upload</h1>
        <p className="text-blue-600">
          Secure medical file management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Patient Records */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <label className="block text-lg font-medium text-blue-800 mb-4">
            Patient Records
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".pdf,.doc,.docx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-blue-600">
            Upload medical history and patient documents
          </p>
        </div>

        {/* Medical Imaging */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
          <label className="block text-lg font-medium text-purple-800 mb-4">
            Medical Imaging
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".dicom,.jpg,.png"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-purple-600">
            Upload X-rays, MRIs, and other medical images
          </p>
        </div>

        {/* Lab Results */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <label className="block text-lg font-medium text-green-800 mb-4">
            Lab Results
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".pdf,.csv,.xlsx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-green-600">
            Upload laboratory test results and reports
          </p>
        </div>

        {/* Insurance Documents */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
          <label className="block text-lg font-medium text-amber-800 mb-4">
            Insurance Documents
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".pdf,.doc,.docx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-amber-600">
            Upload insurance claims and coverage documents
          </p>
        </div>
      </div>
    </div>
  );
}
