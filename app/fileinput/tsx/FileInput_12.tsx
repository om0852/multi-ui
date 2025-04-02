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

const FileUploadMinimal: React.FC<FileUploadProps> = ({
  onFilesSelected,
  uploadText = "Click or drag files here to upload",
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
          "relative w-96 h-48 rounded-lg p-6 text-center cursor-pointer",
          "bg-gray-800 border-2 border-gray-600 hover:border-blue-400",
          "shadow-md transition-all ease-in-out duration-300",
          isDragActive ? "bg-gray-700" : "bg-gray-800"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
        whileHover={{
          scale: 1.05,
          backgroundColor: "rgba(0, 153, 255, 0.2)",
          boxShadow: "0px 10px 30px rgba(0, 153, 255, 0.4)",
        }}
      >
        <p
          className={clsx(
            "text-lg text-gray-200",
            isDragActive ? "text-blue-400" : "text-gray-300"
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

      <div className="mt-6 w-full max-w-md space-y-4">
        <AnimatePresence>
          {selectedFiles &&
            Array.from(selectedFiles).map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex justify-between items-center p-4 bg-gray-700 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-600 text-white font-bold"
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "rgba(0, 153, 255, 0.8)",
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

export default FileUploadMinimal;
