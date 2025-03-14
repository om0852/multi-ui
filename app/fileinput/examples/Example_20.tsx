"use client";

import React from "react";
import FileUpload from "../_components/FileInput_20";

export default function Example_20() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Upload</h1>
        <p className="text-gray-600">
          Modern dashboard file management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Analytics Data */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <label className="text-lg font-medium text-gray-800">
              Analytics Data
            </label>
            <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
              CSV, Excel
            </span>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".csv,.xlsx,.xls"
            allowMultiple={true}
          />
        </div>

        {/* Report Templates */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <label className="text-lg font-medium text-gray-800">
              Report Templates
            </label>
            <span className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-50 rounded-full">
              PDF, Word
            </span>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".pdf,.doc,.docx"
            allowMultiple={true}
          />
        </div>

        {/* Database Backups */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <label className="text-lg font-medium text-gray-800">
              Database Backups
            </label>
            <span className="px-3 py-1 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full">
              SQL, Backup
            </span>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={1}
            accept=".sql,.bak,.backup"
            allowMultiple={false}
          />
        </div>

        {/* Configuration Files */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <label className="text-lg font-medium text-gray-800">
              Configuration Files
            </label>
            <span className="px-3 py-1 text-xs font-medium text-amber-600 bg-amber-50 rounded-full">
              JSON, YAML
            </span>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={3}
            accept=".json,.yaml,.yml"
            allowMultiple={true}
          />
        </div>
      </div>
    </div>
  );
}
