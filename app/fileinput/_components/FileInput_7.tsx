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

const FileUploadBubble: React.FC<FileUploadProps> = ({
  onFilesSelected,
  uploadText = "Drop files or click to upload",
  dragActiveText = "Release to upload your files",
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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={clsx(
        "flex flex-col items-center justify-center space-y-4",
        className
      )}
    >
      <motion.div
        className={clsx(
          "flex items-center justify-center w-60 h-60 bg-blue-200 rounded-full shadow-lg relative",
          isDragActive ? "bg-blue-300" : "bg-blue-200"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 10px 20px rgba(0, 0, 255, 0.3)",
        }}
      >
        <p className="text-center text-gray-700 font-semibold">
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

      <AnimatePresence>
        {selectedFiles && selectedFiles.length > 0 && (
          <div className="w-full max-w-lg overflow-hidden">
            <motion.div
              className="flex space-x-4 py-4"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {Array.from(selectedFiles).map((file, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg relative"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {file.type.startsWith("image/") ? (
                    <motion.img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-16 h-16 object-cover rounded-full"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-300 rounded-full">
                      <span className="text-gray-600 text-xl">📄</span>
                    </div>
                  )}
                  <p className="text-sm text-gray-700 mt-2 truncate w-24">
                    {file.name}
                  </p>
                  <button
                    className="absolute top-1 right-1 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center"
                    onClick={() => removeFile(file)}
                  >
                    ✕
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FileUploadBubble;
