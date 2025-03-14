"use client";

import React from "react";
import FileUpload from "../_components/FileInput_32";

export default function Example_32() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-zinc-100">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Legal Document Management</h1>
        <p className="text-gray-600">
          Secure legal document filing system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contracts */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-indigo-600">
          <div className="flex items-center mb-4">
            <span className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              📝
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-gray-900">
                Contracts & Agreements
              </label>
              <span className="text-sm text-gray-500">PDF or Word format</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".pdf,.doc,.docx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-gray-600">
            Upload legal contracts and agreements
          </p>
        </div>

        {/* Court Documents */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-red-600">
          <div className="flex items-center mb-4">
            <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              ⚖️
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-gray-900">
                Court Documents
              </label>
              <span className="text-sm text-gray-500">Legal filings and motions</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={20}
            accept=".pdf,.doc,.docx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-gray-600">
            Upload court filings and legal motions
          </p>
        </div>

        {/* Evidence Files */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-amber-600">
          <div className="flex items-center mb-4">
            <span className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              🔍
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-gray-900">
                Evidence Files
              </label>
              <span className="text-sm text-gray-500">Multiple formats accepted</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={50}
            accept=".pdf,.jpg,.png,.mp4,.mp3"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-gray-600">
            Upload evidence documents and media files
          </p>
        </div>

        {/* Client Records */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-emerald-600">
          <div className="flex items-center mb-4">
            <span className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              👥
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-gray-900">
                Client Records
              </label>
              <span className="text-sm text-gray-500">Confidential documents</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={15}
            accept=".pdf,.doc,.docx,.xlsx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-gray-600">
            Upload client information and records
          </p>
        </div>
      </div>
    </div>
  );
}
