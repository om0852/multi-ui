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
  dropAreaClassName = "border-2 border-dashed border-gray-300 p-6 rounded-lg shadow-lg bg-white",
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

  // Helper function to get the file preview (for images)
  const getFilePreview = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgPreview = reader.result as string;
        return imgPreview;
      };
      reader.readAsDataURL(file);
    }
    return null;
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
          isDragActive ? "bg-gray-100 border-blue-500" : "bg-white"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        <motion.p
          className="text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isDragActive ? dragActiveText : uploadText}
        </motion.p>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple
          onChange={handleFileSelect}
        />
        {selectedFiles && selectedFiles.length > 0 && (
          <div className="mt-6 space-y-2 w-full">
            {Array.from(selectedFiles).map((file, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between space-x-2 hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  {file.type.startsWith('image/') ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                  ) : (
                    <div className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded">
                      <span className="text-gray-600 text-xl">📄</span>
                    </div>
                  )}
                  <p className="text-sm text-gray-700 truncate w-32">{file.name}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onClick={() => removeFile(file)}
                  className="text-red-500 hover:text-red-700 transition-all"
                >
                  Remove
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FileUpload;
