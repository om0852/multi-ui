import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DarkFileInput = ({ onFilesSelected, maxFiles = Infinity, accept = "*", allowMultiple = true }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFiles = useCallback((files) => {
    const validFiles = files.slice(0, maxFiles);
    setSelectedFiles(validFiles);
    const dataTransfer = new DataTransfer();
    validFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
  }, [maxFiles, onFilesSelected]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  const removeFile = (indexToRemove) => {
    const newFiles = selectedFiles.filter((_, index) => index !== indexToRemove);
    setSelectedFiles(newFiles);
    const dataTransfer = new DataTransfer();
    newFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div 
          className={`relative border-2 border-dashed rounded-lg p-6 bg-gray-800 text-gray-300 transition-all ${isDragActive ? 'border-gray-500' : 'border-gray-600'}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('dark-file-upload')?.click()}
        >
          <div className="text-center">
            <p className="text-lg font-medium">{isDragActive ? "Release to drop" : "Drop files here"}</p>
            <p className="text-sm text-gray-400 mt-1">or click to select</p>
          </div>
          <input
            type="file"
            id="dark-file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
        </div>

        <AnimatePresence>
          {selectedFiles.length > 0 && (
            <motion.div className="mt-4 flex flex-col gap-2" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
              {selectedFiles.map((file, index) => (
                <motion.div 
                  key={`${file.name}-${index}`} 
                  className="flex items-center justify-between p-3 bg-gray-700 rounded-md text-gray-300"
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: 20 }}
                >
                  <span className="text-sm">{file.name}</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); removeFile(index); }} 
                    className="p-1 text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    ×
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DarkFileInput;
