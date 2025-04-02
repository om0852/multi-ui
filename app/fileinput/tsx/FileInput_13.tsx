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

const FileUploadVibrant: React.FC<FileUploadProps> = ({
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
      <motion.div
        className={clsx(
          "relative w-96 h-60 rounded-xl p-8 text-center cursor-pointer",
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

      <div className="mt-8 w-full max-w-md space-y-4">
        <AnimatePresence>
          {selectedFiles &&
            Array.from(selectedFiles).map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white font-semibold"
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    {file.name.slice(0, 1).toUpperCase()}
                  </motion.div>
                  <p className="text-gray-200 truncate max-w-[150px]">{file.name}</p>
                </div>
                <motion.button
                  className="text-red-400 hover:text-red-500"
                  whileHover={{ scale: 1.1 }}
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

export default FileUploadVibrant;
