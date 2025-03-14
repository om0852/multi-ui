"use client";

import React from "react";
import FileUpload from "../_components/FileInput_31";

export default function Example_31() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-slate-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Research Data Upload</h1>
        <p className="text-slate-600">
          Organize and manage scientific research data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Raw Data */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
          <label className="block text-lg font-medium text-slate-800 mb-4">
            Raw Data Files
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={20}
            accept=".csv,.xlsx,.dat"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-slate-600">
            Experimental data and measurements
          </p>
        </div>

        {/* Analysis Scripts */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
          <label className="block text-lg font-medium text-slate-800 mb-4">
            Analysis Scripts
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".py,.r,.m,.ipynb"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-slate-600">
            Data analysis and processing scripts
          </p>
        </div>

        {/* Research Papers */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-600">
          <label className="block text-lg font-medium text-slate-800 mb-4">
            Research Papers
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".pdf,.doc,.docx,.tex"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-slate-600">
            Publications and manuscripts
          </p>
        </div>

        {/* Visualization Data */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-600">
          <label className="block text-lg font-medium text-slate-800 mb-4">
            Visualization Data
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={15}
            accept=".png,.jpg,.svg,.fig"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-slate-600">
            Graphs, charts, and figures
          </p>
        </div>
      </div>
    </div>
  );
}
