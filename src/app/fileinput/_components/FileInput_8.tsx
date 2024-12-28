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

const FileUploadNeon: React.FC<FileUploadProps> = ({
  onFilesSelected,
  uploadText = "Drag files here or click to upload",
  dragActiveText = "Release to drop your files",
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
    <motion.div
      className={clsx(
        "flex flex-col items-center justify-center space-y-4",
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <motion.div
        className={clsx(
          "relative w-64 h-40 border-4 rounded-xl flex items-center justify-center cursor-pointer",
          isDragActive
            ? "border-pink-400 bg-gray-900"
            : "border-gray-600 bg-gray-800"
        )}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 4px 15px rgba(255, 20, 147, 0.4)",
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
      >
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-xl"
          style={{ filter: "blur(20px)" }}
        />
        <p
          className={clsx(
            "z-10 font-medium text-center",
            isDragActive ? "text-pink-200" : "text-gray-400"
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

      <div className="w-full max-w-md">
        <AnimatePresence>
          {selectedFiles &&
            Array.from(selectedFiles).map((file, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, rotateY: 90, opacity: 0 }}
                animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                exit={{ scale: 0.8, rotateY: -90, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  duration: 0.5,
                }}
                className="relative p-4 mb-2 bg-gray-800 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <p className="text-gray-200 truncate">{file.name}</p>
                  <button
                    className="ml-4 text-red-400 hover:text-red-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(file);
                    }}
                  >
                      ✕
                  </button>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FileUploadNeon;
