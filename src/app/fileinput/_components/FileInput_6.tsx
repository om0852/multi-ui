"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface FileUploadProps {
  onFilesSelected: (files: FileList | null) => void;
  uploadText?: string;
  dragActiveText?: string;
  className?: string;
}

const FileUploadCard: React.FC<FileUploadProps> = ({
  onFilesSelected,
  uploadText = "Click or Drag & Drop to Upload",
  dragActiveText = "Release to Upload",
  className = "",
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

  const removeFile = (fileToRemove: File, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!selectedFiles) return;

    const updatedFiles = Array.from(selectedFiles).filter(
      (file) => file.name !== fileToRemove.name
    );

    const updatedFileList = new DataTransfer();
    updatedFiles.forEach((file) => updatedFileList.items.add(file));

    setSelectedFiles(updatedFileList.files);
    onFilesSelected(updatedFileList.files);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={clsx("flex flex-col items-center justify-center space-y-4", className)}
    >
      <motion.div
        className={clsx(
          "w-full max-w-lg p-6 rounded-lg shadow-lg border-2 border-dashed",
          isDragActive ? "bg-blue-100 border-blue-500" : "bg-white border-gray-300"
        )}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
      >
        <p className="text-center text-gray-700 text-lg">
          {isDragActive ? dragActiveText : uploadText}
        </p>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple
          onChange={handleFileSelect}
        />
      </motion.div>
      {selectedFiles && selectedFiles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {Array.from(selectedFiles).map((file, index) => (
            <motion.div
              key={index}
              className="relative group p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              {file.type.startsWith("image/") ? (
                <motion.img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="w-full h-32 object-cover rounded-lg"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <div className="w-full h-32 flex justify-center items-center bg-gray-300 rounded-lg">
                  <span className="text-gray-600 text-xl">📄</span>
                </div>
              )}
              <div className="mt-2 text-sm text-gray-800 font-medium truncate">
                {file.name}
              </div>
              <button
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => removeFile(file, e)}
              >
                ✕
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default FileUploadCard;
