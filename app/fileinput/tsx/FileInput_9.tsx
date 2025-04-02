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

const FileUploadCard: React.FC<FileUploadProps> = ({
  onFilesSelected,
  uploadText = "Click or Drag files here to upload",
  dragActiveText = "Drop your files now!",
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
          "relative w-72 h-48 border-2 rounded-lg flex items-center justify-center cursor-pointer",
          isDragActive
            ? "border-blue-500 bg-gray-100"
            : "border-gray-400 bg-gray-200"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
        whileHover={{
          scale: 1.1,
          rotate: -1,
          boxShadow: "0px 4px 20px rgba(0, 162, 255, 0.3)",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-lg bg-blue-500 opacity-20"
          animate={{ scale: isDragActive ? 1.1 : 1, opacity: isDragActive ? 0.3 : 0.2 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <p
          className={clsx(
            "z-10 font-medium text-center",
            isDragActive ? "text-blue-500" : "text-gray-600"
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  duration: 0.5,
                }}
                className="relative flex items-center justify-between p-4 mb-2 bg-gray-300 rounded-lg shadow-lg"
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white">
                    {file.name.slice(0, 1).toUpperCase()}
                  </div>
                  <p className="ml-4 text-gray-700 truncate">{file.name}</p>
                </div>
                <button
                  className="ml-4 text-red-400 hover:text-red-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(file);
                  }}
                >
                    ✕
                </button>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FileUploadCard;
