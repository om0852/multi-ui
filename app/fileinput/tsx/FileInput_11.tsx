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

const FileUploadFuturistic: React.FC<FileUploadProps> = ({
  onFilesSelected,
  uploadText = "Click or Drag files to upload",
  dragActiveText = "Drop your files here",
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
          "relative w-80 h-40 rounded-xl p-6 text-center cursor-pointer",
          "border-2 border-gray-700 bg-gray-900 bg-opacity-80",
          "shadow-lg shadow-cyan-800 hover:shadow-cyan-500",
          isDragActive ? "border-cyan-500" : "border-gray-700"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 40px rgba(0, 255, 255, 0.6)",
          transition: { duration: 0.3 },
        }}
        animate={{
          background: isDragActive
            ? "linear-gradient(145deg, rgba(0, 50, 100, 0.8), rgba(0, 150, 200, 0.5))"
            : "rgba(10, 10, 10, 0.9)",
        }}
      >
        <p
          className={clsx(
            "text-lg font-bold",
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

      <div className="w-full max-w-md space-y-4">
        <AnimatePresence>
          {selectedFiles &&
            Array.from(selectedFiles).map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={clsx(
                  "flex items-center justify-between p-4 rounded-lg shadow-inner",
                  "bg-gray-800 bg-opacity-90 hover:bg-gray-700",
                  "border border-gray-600"
                )}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-600 text-gray-900 font-semibold"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      backgroundColor: "rgba(0, 200, 255, 0.8)",
                    }}
                  >
                    {file.name.slice(0, 1).toUpperCase()}
                  </motion.div>
                  <p className="text-gray-300 truncate max-w-[180px]">
                    {file.name}
                  </p>
                </div>
                <motion.button
                  whileHover={{
                    scale: 1.3,
                    color: "rgba(255, 100, 100, 1)",
                  }}
                  className="text-red-400 hover:text-red-500"
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

export default FileUploadFuturistic;

