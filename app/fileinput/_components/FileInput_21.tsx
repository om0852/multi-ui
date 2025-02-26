import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

interface FileInputProps {
  onFilesSelected: (files: FileList | null) => void;
  maxFiles?: number;
  accept?: string;
  allowMultiple?: boolean;
}

const Container = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
`;

const CircleDropZone = styled.div<{ $isDragActive: boolean }>`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 2px dashed #E5E7EB;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  
  ${props => props.$isDragActive && `
    border-color: #3B82F6;
    transform: scale(1.1);
    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.1);
  `}

  &:hover {
    border-color: #3B82F6;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  }
`;

const ProgressCircle = styled.div<{ $progress: number }>`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-left-color: #3B82F6;
  transform: rotate(${props => (props.$progress * 3.6)}deg);
  transition: transform 0.3s ease-in-out;
`;

const FileList = styled(motion.div)`
  margin-top: 2rem;
  text-align: center;
`;

const FileItem = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  background: white;
  border-radius: 9999px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border: 1px solid #E5E7EB;
`;

const CircularFileInput: React.FC<FileInputProps> = ({
  onFilesSelected,
  maxFiles = Infinity,
  accept = "*",
  allowMultiple = true,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const simulateProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const handleFiles = useCallback((files: File[]) => {
    const validFiles = files.slice(0, maxFiles);
    setSelectedFiles(validFiles);
    const dataTransfer = new DataTransfer();
    validFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
    simulateProgress();
  }, [maxFiles, onFilesSelected]);

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
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  const removeFile = (indexToRemove: number) => {
    const newFiles = selectedFiles.filter((_, index) => index !== indexToRemove);
    setSelectedFiles(newFiles);
    const dataTransfer = new DataTransfer();
    newFiles.forEach(file => dataTransfer.items.add(file));
    onFilesSelected(dataTransfer.files);
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <CircleDropZone
          $isDragActive={isDragActive}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('circular-file-upload')?.click()}
        >
          {uploadProgress > 0 && uploadProgress < 100 && (
            <ProgressCircle $progress={uploadProgress} />
          )}
          <div className="text-center z-10">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-10 h-10 mx-auto mb-2 text-blue-500"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" 
              />
            </svg>
            <p className="text-sm font-medium text-gray-600">
              {isDragActive ? "Release" : "Drop files"}
            </p>
          </div>
          <input
            type="file"
            id="circular-file-upload"
            className="hidden"
            multiple={allowMultiple}
            accept={accept}
            onChange={handleFileSelect}
          />
        </CircleDropZone>

        <AnimatePresence>
          {selectedFiles.length > 0 && (
            <FileList
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {selectedFiles.map((file, index) => (
                <FileItem
                  key={`${file.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-4 h-4 text-blue-500 mr-2"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  <span className="text-sm text-gray-600 mr-2">{file.name}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                    className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </button>
                </FileItem>
              ))}
            </FileList>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default CircularFileInput; 