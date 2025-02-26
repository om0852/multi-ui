"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface FileUploadProps {
  onFilesSelected: (files: FileList | null) => void;
  uploadText?: string;
  dragActiveText?: string;
  className?: string;
}

const FileUploadGlassmorphic: React.FC<FileUploadProps> = ({
  onFilesSelected,
  uploadText = "Click or Drag files here to upload",
  dragActiveText = "Release to upload files!",
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
    <div className={clsx("flex flex-col items-center space-y-6", className)}>
      <motion.div
        className={clsx(
          "relative w-96 h-52 rounded-lg p-6 text-center cursor-pointer",
          "backdrop-blur-md border border-gray-600",
          isDragActive
            ? "bg-opacity-40 bg-gradient-to-br from-cyan-500 to-blue-900"
            : "bg-opacity-10 bg-gray-800"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 30px rgba(0, 255, 255, 0.6)",
        }}
        animate={{
          background: isDragActive
            ? "linear-gradient(to right, rgba(0, 255, 255, 0.3), rgba(0, 100, 255, 0.5))"
            : "rgba(0, 0, 0, 0.5)",
        }}
        transition={{ duration: 0.3 }}
      >
        <p
          className={clsx(
            "text-lg font-semibold",
            isDragActive ? "text-cyan-300" : "text-gray-400"
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

      <div className="w-full max-w-md space-y-3">
        <AnimatePresence>
          {selectedFiles &&
            Array.from(selectedFiles).map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative flex items-center justify-between p-4 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg border border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-gray-900 shadow-inner">
                    {file.name.slice(0, 1).toUpperCase()}
                  </div>
                  <p className="text-gray-200 truncate max-w-[200px]">
                    {file.name}
                  </p>
                </div>
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    color: "rgba(255, 50, 50, 1)",
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  className="text-red-500 hover:text-red-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(file);
                  }}
                >
                  ✕
                </motion.button>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FileUploadGlassmorphic;
