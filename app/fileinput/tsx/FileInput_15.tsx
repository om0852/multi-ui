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

const FileUploadCircularContainer: React.FC<FileUploadProps> = ({
  onFilesSelected,
  uploadText = "Drag & drop files or click to select",
  dragActiveText = "Release to drop the files",
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

  const removeFile = (fileToRemove: File) => {
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
    <div className={clsx("flex flex-col items-center", className)}>
      {/* Circular Drop Area */}
      <motion.div
        className={clsx(
          "relative w-48 h-48 rounded-full p-8 text-center cursor-pointer",
          "bg-gradient-to-r from-purple-500 to-pink-500",
          "shadow-lg transition-all ease-in-out duration-300",
          isDragActive ? "bg-gradient-to-r from-blue-400 to-blue-600" : ""
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{
          scale: 0.95,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <p
          className={clsx(
            "text-lg text-white font-semibold",
            isDragActive ? "text-yellow-300" : "text-white"
          )}
        >
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

      {/* Display Files Outside the Circular Container */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
      >
        {selectedFiles &&
          Array.from(selectedFiles).map((file, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Circular File Icon */}
              <div
                className="w-12 h-12 bg-purple-600 text-white flex items-center justify-center rounded-full"
                title={file.name}
              >
                {file.name.slice(0, 1).toUpperCase()}
              </div>
              <p className="text-sm text-gray-600 truncate">{file.name}</p>
              <button
                onClick={() => removeFile(file)}
                className="text-red-400 hover:text-red-500 text-lg"
              >
                ✕
              </button>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default FileUploadCircularContainer;
