"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface FileUploadProps {
  onFilesSelected: (files: FileList | null) => void;
  uploadText?: string;
  dragActiveText?: string;
  className?: string;
  dropAreaClassName?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFilesSelected,
  uploadText = "Drag and drop files here or click to select",
  dragActiveText = "Release to drop the files",
  className = "",
  dropAreaClassName = "border-2 border-dashed border-gray-300 p-4 rounded-lg",
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    setSelectedFiles(e.dataTransfer.files);
    onFilesSelected(e.dataTransfer.files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
    onFilesSelected(e.target.files);
  };

  // Remove a file from the selected files
  const removeFile = (fileToRemove: File) => {
    if (!selectedFiles) return;

    // Create a new array excluding the clicked file
    const updatedFiles = Array.from(selectedFiles).filter(
      (file) => file.name !== fileToRemove.name
    );

    // Convert the updated array back to a FileList-like object (needed for the input)
    const updatedFileList = new DataTransfer();
    updatedFiles.forEach((file) => updatedFileList.items.add(file));

    setSelectedFiles(updatedFileList.files); // Update the state with new files
    onFilesSelected(updatedFileList.files); // Notify parent component of the change
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={clsx("flex flex-col items-center justify-center", className)}
    >
      <div
        className={clsx(
          dropAreaClassName,
          isDragActive ? "bg-gray-100" : "bg-white"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        <p className="text-center text-gray-600">
          {isDragActive ? dragActiveText : uploadText}
        </p>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple
          onChange={handleFileSelect}
        />
        {selectedFiles && selectedFiles.length > 0 && (
          <div className="mt-4 text-sm text-gray-500">
            {Array.from(selectedFiles).map((file, index) => (
              <div key={index} className="flex items-center space-x-2">
                <p
                  className="cursor-pointer text-blue-500"
                  onClick={() => removeFile(file)}
                >
                  {file.name}
                </p>
                <span
                  className="text-gray-400 cursor-pointer"
                  onClick={() => removeFile(file)}
                >
                  (remove)
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FileUpload;
