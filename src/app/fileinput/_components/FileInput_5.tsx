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

const FileUploadCircular: React.FC<FileUploadProps> = ({
  onFilesSelected,
  uploadText = "Drag & Drop or Click to Upload",
  dragActiveText = "Drop the files to upload",
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
      <div
        className={clsx(
          "relative flex items-center justify-center w-64 h-64 rounded-full border-4 border-dashed",
          isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-white"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
      >
        <motion.p
          className="text-center text-gray-700"
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
      </div>
      {selectedFiles && selectedFiles.length > 0 && (
        <div className="space-y-4 w-full">
          {Array.from(selectedFiles).map((file, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                {file.type.startsWith("image/") ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-10 h-10 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-10 h-10 flex justify-center items-center bg-gray-300 rounded-lg">
                    <span className="text-gray-600 text-sm">📄</span>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-800 font-medium">{file.name}</p>
                  <div className="relative w-40 h-2 bg-gray-200 rounded">
                    <motion.div
                      className="absolute top-0 left-0 h-2 bg-blue-500 rounded"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    ></motion.div>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={(e) => removeFile(file, e)}
                className="text-red-500 hover:text-red-700 transition-all"
              >
                Remove
              </motion.button>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default FileUploadCircular;
