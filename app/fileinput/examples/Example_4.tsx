"use client";

import React from 'react';
import FileUpload from '../tsx/FileInput_4';

const FileInput_4_Example: React.FC = () => {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log('Selected files:', Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="space-y-8 p-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Profile Picture Upload</h3>
        <FileUpload
          onFilesSelected={handleFilesSelected}
          uploadText="Drop your profile picture here"
          dragActiveText="Release to upload profile picture"
          className="w-full"
          dropAreaClassName="border-2 border-dashed border-blue-300 p-4 rounded-lg hover:border-blue-500"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Document Attachment</h3>
        <FileUpload
          onFilesSelected={handleFilesSelected}
          uploadText="Drop your document here"
          dragActiveText="Release to upload document"
          className="w-full"
          dropAreaClassName="border-2 border-dashed border-green-300 p-4 rounded-lg hover:border-green-500"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Gallery Images</h3>
        <FileUpload
          onFilesSelected={handleFilesSelected}
          uploadText="Drop your images here"
          dragActiveText="Release to upload images"
          className="w-full"
          dropAreaClassName="border-2 border-dashed border-purple-300 p-4 rounded-lg hover:border-purple-500"
        />
      </div>
    </div>
  );
};

export default FileInput_4_Example;
